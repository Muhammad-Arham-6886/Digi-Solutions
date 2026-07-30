import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/db';
import Consultation from '@/models/Consultation';
import { sendLeadNotification } from '@/lib/mail';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, company, preferredDate, preferredTime, topic, notes } = body;

    if (!name || !email || !preferredDate || !preferredTime || !topic) {
      return NextResponse.json(
        { success: false, message: 'All booking fields are required.' },
        { status: 400 }
      );
    }

    try {
      await connectToDatabase();
      await Consultation.create({
        name,
        email,
        company,
        preferredDate,
        preferredTime,
        topic,
        notes,
      });
    } catch (dbErr) {
      console.warn('MongoDB consultation store error:', dbErr);
    }

    await sendLeadNotification({
      name,
      email,
      company,
      service: `Strategy Consultation: ${topic}`,
      message: `Preferred Slot: ${preferredDate} at ${preferredTime}. Notes: ${notes || 'None'}`,
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Strategy consultation booked! Calendar invitation sent to your email.',
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Consultation API Error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error.' },
      { status: 500 }
    );
  }
}
