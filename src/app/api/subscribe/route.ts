// src/app/api/subscribe/route.ts

import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    const { email } = await request.json();

    // Create a Nodemailer transporter using SMTP
    const transporter = nodemailer.createTransport({
        host: 'smtp.example.com', // Replace with your SMTP server
        port: 587, // Replace with your SMTP server port
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'your-email@example.com', // Replace with your SMTP username
            pass: 'your-email-password', // Replace with your SMTP password
        },
    });

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
        await transporter.sendMail(mailOptions);
        return NextResponse.json({ message: 'Subscription successful' }, { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ message: 'Error sending email' }, { status: 500 });
    }
}
