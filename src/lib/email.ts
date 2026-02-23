import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

interface BuyerLeadData {
    fullName: string;
    phone: string;
    carType: string;
    budget: string;
    timeline: string;
}

interface DealerLeadData {
    dealerName: string;
    location: string;
    availableCars: string;
    phone: string;
}

export async function sendBuyerLeadEmail(data: BuyerLeadData) {
    const budgetLabel: Record<string, string> = {
        'under-5m': 'Under 5 Million',
        '5m-10m': '5 - 10 Million',
        '10m-20m': '10 - 20 Million',
        '20m-50m': '20 - 50 Million',
        'above-50m': 'Above 50 Million',
    };

    const timelineLabel: Record<string, string> = {
        'immediately': 'Immediately',
        '1-2-weeks': '1 - 2 Weeks',
        '1-month': 'Within a Month',
        'just-looking': 'Just Exploring',
    };

    const html = `
    <div style="font-family: 'Inter', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f8f9fa; padding: 32px;">
      <div style="background: #1a1a2e; padding: 24px; border-radius: 10px 10px 0 0; text-align: center;">
        <h1 style="color: #ffffff; margin: 0; font-size: 22px; letter-spacing: 0.08em;">VEXON</h1>
        <p style="color: #9ca3af; margin: 8px 0 0; font-size: 13px;">New Buyer Lead</p>
      </div>
      <div style="background: #ffffff; padding: 28px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 10px 10px;">
        <h2 style="color: #1a1a2e; font-size: 18px; margin: 0 0 20px;">A new buyer has submitted a verification request</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #6b7280; font-size: 14px; width: 140px;">Full Name</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #1a1a2e; font-weight: 600; font-size: 14px;">${data.fullName}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #6b7280; font-size: 14px;">Phone (WhatsApp)</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #1a1a2e; font-weight: 600; font-size: 14px;">
              <a href="https://wa.me/${data.phone.replace(/[^0-9]/g, '')}" style="color: #4a6fa5; text-decoration: none;">${data.phone}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #6b7280; font-size: 14px;">Car Type</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #1a1a2e; font-weight: 600; font-size: 14px;">${data.carType}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #6b7280; font-size: 14px;">Budget Range</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #1a1a2e; font-weight: 600; font-size: 14px;">${budgetLabel[data.budget] || data.budget}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #6b7280; font-size: 14px;">Purchase Timeline</td>
            <td style="padding: 10px 0; color: #1a1a2e; font-weight: 600; font-size: 14px;">${timelineLabel[data.timeline] || data.timeline}</td>
          </tr>
        </table>
        <div style="margin-top: 24px; padding: 16px; background: #f0f7ff; border-radius: 8px; border-left: 3px solid #4a6fa5;">
          <p style="margin: 0; font-size: 13px; color: #4a6fa5;">
            <strong>Action needed:</strong> Reach out to this buyer via WhatsApp to begin the verification process.
          </p>
        </div>
      </div>
      <p style="text-align: center; color: #9ca3af; font-size: 11px; margin-top: 16px;">
        This email was sent automatically from the VEXON website.
      </p>
    </div>
  `;

    await transporter.sendMail({
        from: `"VEXON Leads" <${process.env.EMAIL_USER}>`,
        to: process.env.NOTIFICATION_EMAIL || process.env.EMAIL_USER,
        subject: `New Buyer Lead: ${data.fullName} — ${data.carType}`,
        html,
    });
}

export async function sendDealerLeadEmail(data: DealerLeadData) {
    const html = `
    <div style="font-family: 'Inter', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f8f9fa; padding: 32px;">
      <div style="background: #1a1a2e; padding: 24px; border-radius: 10px 10px 0 0; text-align: center;">
        <h1 style="color: #ffffff; margin: 0; font-size: 22px; letter-spacing: 0.08em;">VEXON</h1>
        <p style="color: #9ca3af; margin: 8px 0 0; font-size: 13px;">New Dealer Application</p>
      </div>
      <div style="background: #ffffff; padding: 28px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 10px 10px;">
        <h2 style="color: #1a1a2e; font-size: 18px; margin: 0 0 20px;">A new dealer wants to partner with VEXON</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #6b7280; font-size: 14px; width: 140px;">Dealer Name</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #1a1a2e; font-weight: 600; font-size: 14px;">${data.dealerName}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #6b7280; font-size: 14px;">Location</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #1a1a2e; font-weight: 600; font-size: 14px;">${data.location}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #6b7280; font-size: 14px;">Available Cars</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #1a1a2e; font-weight: 600; font-size: 14px;">${data.availableCars}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #6b7280; font-size: 14px;">Phone Number</td>
            <td style="padding: 10px 0; color: #1a1a2e; font-weight: 600; font-size: 14px;">
              <a href="tel:${data.phone}" style="color: #4a6fa5; text-decoration: none;">${data.phone}</a>
            </td>
          </tr>
        </table>
        <div style="margin-top: 24px; padding: 16px; background: #f0f7ff; border-radius: 8px; border-left: 3px solid #4a6fa5;">
          <p style="margin: 0; font-size: 13px; color: #4a6fa5;">
            <strong>Action needed:</strong> Review this dealer application and schedule a vetting call.
          </p>
        </div>
      </div>
      <p style="text-align: center; color: #9ca3af; font-size: 11px; margin-top: 16px;">
        This email was sent automatically from the VEXON website.
      </p>
    </div>
  `;

    await transporter.sendMail({
        from: `"VEXON Leads" <${process.env.EMAIL_USER}>`,
        to: process.env.NOTIFICATION_EMAIL || process.env.EMAIL_USER,
        subject: `New Dealer Application: ${data.dealerName} — ${data.location}`,
        html,
    });
}
