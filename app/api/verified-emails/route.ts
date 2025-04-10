// app/api/verified-emails/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { getAuth } from '@clerk/nextjs/server';
import prisma from '@/lib/prisma';
import nodemailer from 'nodemailer'; // Ensure you have nodemailer installed

export async function POST(request: NextRequest) {
  const { userId } = getAuth(request);
  if (!userId) {
    return new NextResponse('Unauthorized', { status: 401 });
  }

  const { email } = await request.json();

  // Generate OTP
  const otp = Math.floor(100000 + Math.random() * 900000).toString();

  // Save email and OTP to the database
  const verifiedEmail = await prisma.verifiedEmail.create({
    data: {
      userId,
      email,
      verified: false,
    },
  });

  // Send OTP via email
  const transporter = nodemailer.createTransport({
    service: 'gmail', // Use your email service
    auth: {
      user: process.env.EMAIL_USER, // Your email
      pass: process.env.EMAIL_PASS, // Your email password
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Your OTP for Email Verification',
    text: `Your OTP is ${otp}. Please verify your email.`,
  };

  await transporter.sendMail(mailOptions);

  return NextResponse.json({ message: 'Verification email sent' });
}