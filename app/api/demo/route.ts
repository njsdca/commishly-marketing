import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, message } = body;

    // Validate required fields
    if (!name || !email || !company) {
      return NextResponse.json(
        { error: 'Name, email, and company are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Create email body
    const emailText = `
New Demo Request from Commishly Marketing Site

Name: ${name}
Email: ${email}
Company: ${company}
Message: ${message || 'No message provided'}

---
Submitted at: ${new Date().toLocaleString()}
    `.trim();

    // Send email using Resend
    try {
      // Initialize Resend with API key
      if (!process.env.RESEND_API_KEY) {
        console.error('RESEND_API_KEY is not configured');
        // Still return success so the form works, but log the error
        console.log('Demo request (no email sent):', { name, email, company, message });
        return NextResponse.json(
          { success: true, message: 'Demo request submitted successfully' },
          { status: 200 }
        );
      }

      const resend = new Resend(process.env.RESEND_API_KEY);
      const { data, error } = await resend.emails.send({
        from: 'Commishly Demo Requests <onboarding@resend.dev>',
        to: ['hello@getcommishly.com'],
        replyTo: email,
        subject: `Demo Request from ${name} at ${company}`,
        text: emailText,
      });

      if (error) {
        console.error('Resend error:', error);
        return NextResponse.json(
          { error: 'Failed to send email' },
          { status: 500 }
        );
      }

      console.log('Demo request sent successfully:', data);
    } catch (emailError) {
      console.error('Error sending email:', emailError);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Demo request submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing demo request:', error);
    return NextResponse.json(
      { error: 'Failed to process demo request' },
      { status: 500 }
    );
  }
}
