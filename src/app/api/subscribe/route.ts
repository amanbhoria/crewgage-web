// src/app/api/subscribe/route.ts

import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const { email } = await request.json();

    // Define the email options
    const mailOptions = {
        from: '"Your Name" <your-email@example.com>', // Replace with your sender address
        to: email, // The recipient's email
        subject: 'Subscription Confirmation',
        text: 'Thank you for subscribing to our newsletter!',
        html: '<p>Thank you for subscribing to our newsletter!</p>',
    };

    // Send the email
    try {
        return NextResponse.json({ message: 'Subscription successful' }, { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ message: 'Error sending email' }, { status: 500 });
    }
}
