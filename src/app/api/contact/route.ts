import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/db';
import Lead from '@/models/Lead';
import { sendLeadNotification } from '@/lib/mail';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, company, service, budget, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: 'Name, email, and project message are required.' },
        { status: 400 }
      );
    }

    // Try MongoDB storage (falls back cleanly if DB not running)
    let leadId = null;
    try {
      await connectToDatabase();
      const newLead = await Lead.create({
        name,
        email,
        phone,
        company,
        service,
        budget,
        message,
      });
      leadId = newLead._id;
    } catch (dbErr) {
      console.warn('MongoDB storage skipped or failed:', dbErr);
    }

    // Send email notification via Nodemailer
    await sendLeadNotification({
      name,
      email,
      phone,
      company,
      service,
      budget,
      message,
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you! Your project inquiry has been received. Our team will contact you within 24 hours.',
        leadId,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Contact API Error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error processing request.' },
      { status: 500 }
    );
  }
}
