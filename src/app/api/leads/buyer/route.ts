import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import { sendBuyerLeadEmail } from '@/lib/email';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { fullName, phone, carType, budget, timeline } = body;

        // Validate required fields
        if (!fullName || !phone || !carType || !budget || !timeline) {
            return NextResponse.json(
                { error: 'All fields are required.' },
                { status: 400 }
            );
        }

        const lead = {
            fullName,
            phone,
            carType,
            budget,
            timeline,
            type: 'buyer',
            createdAt: new Date(),
        };

        // Try to save to MongoDB
        try {
            const { db } = await connectToDatabase();
            await db.collection('buyer_leads').insertOne(lead);
            console.log('[BUYER LEAD] Saved to database:', lead);
        } catch (dbError) {
            console.log('[BUYER LEAD] Database unavailable. Logging to console:', lead);
            console.error('[DB ERROR]', dbError);
        }

        // Send email notification
        try {
            await sendBuyerLeadEmail({ fullName, phone, carType, budget, timeline });
            console.log('[BUYER LEAD] Email notification sent.');
        } catch (emailError) {
            console.error('[EMAIL ERROR] Failed to send notification:', emailError);
            // Don't fail the request if email fails — lead is already saved
        }

        return NextResponse.json(
            { success: true, message: 'Lead submitted successfully.' },
            { status: 201 }
        );
    } catch (error) {
        console.error('[BUYER LEAD ERROR]', error);
        return NextResponse.json(
            { error: 'Failed to process your request.' },
            { status: 500 }
        );
    }
}
