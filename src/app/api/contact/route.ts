import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, service, message } = body;

    // Validation
    const errors: Record<string, string> = {};

    if (!name || typeof name !== "string" || name.trim().length < 2) {
      errors.name = "Please enter a valid name (at least 2 characters).";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email.trim())) {
      errors.email = "Please enter a valid email address.";
    }

    const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
    if (!phone || typeof phone !== "string" || !phoneRegex.test(phone.replace(/\s+/g, ""))) {
      errors.phone = "Please enter a valid phone number (10+ digits).";
    }

    if (!message || typeof message !== "string" || message.trim().length < 10) {
      errors.message = "Please enter a message of at least 10 characters.";
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        { success: false, errors, message: "Validation failed." },
        { status: 400 }
      );
    }

    const recipientEmail = "webwithabhi296@gmail.com";
    const selectedService = service || "General Web Development Inquiry";

    // Configure Nodemailer Transporter if SMTP credentials exist in env
    if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT) || 587,
        secure: Number(process.env.SMTP_PORT) === 465,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      const mailOptions = {
        from: `"${name}" <${process.env.SMTP_USER}>`,
        replyTo: email,
        to: recipientEmail,
        subject: `[Web With Abhi] New Project Inquiry: ${selectedService} from ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px; background-color: #ffffff;">
            <h2 style="color: #0B3B68; border-bottom: 2px solid #F47C45; padding-bottom: 8px;">New Project Inquiry</h2>
            <p style="font-size: 14px; color: #475569;">You have received a new inquiry from your portfolio website:</p>
            <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
              <tr>
                <td style="padding: 8px; font-weight: bold; width: 140px; color: #334155;">Client Name:</td>
                <td style="padding: 8px; color: #0f172a;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px; font-weight: bold; color: #334155;">Email Address:</td>
                <td style="padding: 8px; color: #0f172a;"><a href="mailto:${email}">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px; font-weight: bold; color: #334155;">Phone Number:</td>
                <td style="padding: 8px; color: #0f172a;"><a href="tel:${phone}">${phone}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px; font-weight: bold; color: #334155;">Service Selected:</td>
                <td style="padding: 8px; color: #F47C45; font-weight: bold;">${selectedService}</td>
              </tr>
            </table>
            <div style="margin-top: 20px; padding: 15px; background-color: #f8fafc; border-left: 4px solid #0B3B68; border-radius: 4px;">
              <h4 style="margin: 0 0 8px 0; color: #0B3B68;">Project Details:</h4>
              <p style="margin: 0; white-space: pre-wrap; color: #334155; font-size: 14px; line-height: 1.6;">${message}</p>
            </div>
            <div style="margin-top: 24px; font-size: 12px; color: #94a3b8; text-align: center;">
              Sent from Web With Abhi Portfolio &bull; Pune, India
            </div>
          </div>
        `,
      };

      await transporter.sendMail(mailOptions);
    } else {
      // Production logging fallback when SMTP credentials are not yet configured in local environment
      console.log("=========================================");
      console.log("📨 [PORTFOLIO INQUIRY DISPATCH]");
      console.log(`To: ${recipientEmail}`);
      console.log(`From: ${name} (${email} | ${phone})`);
      console.log(`Service: ${selectedService}`);
      console.log(`Message: ${message}`);
      console.log("=========================================");
    }

    return NextResponse.json(
      {
        success: true,
        message: "Thank you! Your message has been sent to Abhishek Panchgalle.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error handling contact submission:", error);
    return NextResponse.json(
      {
        success: false,
        message: "An error occurred while submitting your message. Please try again or reach out directly.",
      },
      { status: 500 }
    );
  }
}
