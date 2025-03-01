import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "quickhealth971@gmail.com",
    pass: process.env.NEXT_PUBLIC_API_KEY,
  },
});

function generateEmailTemplate(name: string, email: string, message: string, mobile: string) {
  const currentDate = new Date().toLocaleDateString();

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Contact Form Submission</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333333;
            max-width: 600px;
            margin: 0 auto;
          }
          .email-container {
            padding: 20px;
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          }
          .header {
            background-color: #4F46E5;
            color: white;
            padding: 20px;
            text-align: center;
            border-radius: 8px 8px 0 0;
            margin: -20px -20px 20px -20px;
          }
          .content {
            padding: 20px 0;
          }
          .field {
            margin-bottom: 20px;
          }
          .field-label {
            font-weight: bold;
            color: #4F46E5;
            margin-bottom: 5px;
          }
          .field-value {
            background-color: #f8f9fa;
            padding: 10px;
            border-radius: 4px;
            border-left: 3px solid #4F46E5;
          }
          .message-box {
            background-color: #f8f9fa;
            padding: 15px;
            border-radius: 4px;
            margin-top: 10px;
            white-space: pre-wrap;
          }
          .footer {
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid #eee;
            font-size: 0.9em;
            color: #666;
            text-align: center;
          }
        </style>
      </head>
      <body>
        <div class="email-container">
          <div class="header">
            <h1 style="margin: 0;">New Contact Form Submission</h1>
          </div>
          
          <div class="content">
            <div class="field">
              <div class="field-label">Date Received:</div>
              <div class="field-value">${currentDate}</div>
            </div>

            <div class="field">
              <div class="field-label">Name:</div>
              <div class="field-value">${name}</div>
            </div>

            <div class="field">
              <div class="field-label">Email:</div>
              <div class="field-value">${email}</div>
            </div>
             <div class="field">
              <div class="field-label">mobile:</div>
              <div class="field-value">${mobile}</div>
            </div>

            <div class="field">
              <div class="field-label">Message:</div>
              <div class="message-box">${message}</div>
            </div>
          </div>

          <div class="footer">
            <p>This is an automated message from your website contact form.</p>
            <p>© ${new Date().getFullYear()} Your Company Name. All rights reserved.</p>
          </div>
        </div>
      </body>
    </html>
  `;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { patientName, email, message, mobile } = body;

    const mailOptions = {
      from: "quickhealth971@gmail.com",
      to: "quickhealth971@gmail.com",
      subject: `New Contact Form Submission from ${patientName}`,
      html: generateEmailTemplate(patientName, email, message, mobile),
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { message: 'Failed to send email' },
      { status: 500 }
    );
  }
}
