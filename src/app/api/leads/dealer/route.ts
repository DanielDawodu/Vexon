import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import { sendDealerLeadEmail } from '@/lib/email';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { dealerName, location, availableCars, phone } = body;

        // Validate required fields
        if (!dealerName || !location || !availableCars || !phone) {
            return NextResponse.json(
                { error: 'All fields are required.' },
                { status: 400 }
            );
        }

        const lead = {
            dealerName,
            location,
            availableCars,
            phone,
            type: 'dealer',
            createdAt: new Date(),
        };

        // Try to save to MongoDB
        try {
            const { db } = await connectToDatabase();
            await db.collection('dealer_leads').insertOne(lead);
            console.log('[DEALER LEAD] Saved to database:', lead);
        } catch (dbError) {
            console.log('[DEALER LEAD] Database unavailable. Logging to console:', lead);
            console.error('[DB ERROR]', dbError);
        }

        // Send email notification
        try {
            await sendDealerLeadEmail({ dealerName, location, availableCars, phone });
            console.log('[DEALER LEAD] Email notification sent.');
        } catch (emailError) {
            console.error('[EMAIL ERROR] Failed to send notification:', emailError);
            // Don't fail the request if email fails — lead is already saved
        }

        return NextResponse.json(
            { success: true, message: 'Application submitted successfully.' },
            { status: 201 }
        );
    } catch (error) {
        console.error('[DEALER LEAD ERROR]', error);
        return NextResponse.json(
            { error: 'Failed to process your request.' },
            { status: 500 }
        );
    }
}
