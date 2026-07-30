import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/db';
import Subscriber from '@/models/Subscriber';

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { success: false, message: 'Valid business email is required.' },
        { status: 400 }
      );
    }

    try {
      await connectToDatabase();
      await Subscriber.create({ email });
    } catch (dbErr: any) {
      if (dbErr.code === 11000) {
        return NextResponse.json(
          { success: true, message: 'You are already subscribed!' },
          { status: 200 }
        );
      }
      console.warn('Subscriber DB error:', dbErr);
    }

    return NextResponse.json(
      { success: true, message: 'Subscribed successfully!' },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: 'Subscription request failed.' },
      { status: 500 }
    );
  }
}
