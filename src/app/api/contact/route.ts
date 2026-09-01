import { NextRequest, NextResponse } from "next/server";
import { contactSchema } from "@/lib/validation/contactSchema";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Server-side Zod validation
    const validation = contactSchema.safeParse(body);
    if (!validation.success) {
      const fieldErrors: Record<string, string> = {};
      validation.error.issues.forEach((err) => {
        const fieldName = err.path.join(".");
        if (fieldName && !fieldErrors[fieldName]) {
          fieldErrors[fieldName] = err.message;
        }
      });

      return NextResponse.json(
        {
          success: false,
          errors: fieldErrors,
          message: "Please correct the errors in the form before submitting.",
        },
        { status: 400 }
      );
    }

    const { name, countryCode, mobile, email, purpose, projectDetails } = validation.data;

    const recipientEmail = process.env.CONTACT_EMAIL || "webwithabhi296@gmail.com";
    const fullPhone = `${countryCode || "+91"} ${mobile}`;

    // Ensure required environment variables are present for production email delivery
    if (!process.env.RESEND_API_KEY) {
      console.warn("RESEND_API_KEY not configured. Submission received in simulated mode:", {
        name,
        phone: fullPhone,
        email: email || "N/A",
        purpose,
      });

      return NextResponse.json(
        {
          success: true,
          message: "Thank you! Your inquiry has been received. Abhishek will get in touch with you shortly.",
        },
        { status: 200 }
      );
    }

    const emailBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
        <h2 style="color: #0B3B68; border-bottom: 2px solid #F47C45; padding-bottom: 12px; margin-top: 0;">New Inquiry: ${purpose}</h2>
        <p style="font-size: 14px; color: #475569;">You have received a new inquiry from your Web With Abhi portfolio website:</p>
        <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
          <tr>
            <td style="padding: 10px; font-weight: bold; width: 140px; color: #334155; border-bottom: 1px solid #f1f5f9;">Name:</td>
            <td style="padding: 10px; color: #0f172a; border-bottom: 1px solid #f1f5f9;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 10px; font-weight: bold; color: #334155; border-bottom: 1px solid #f1f5f9;">Mobile Number:</td>
            <td style="padding: 10px; color: #0f172a; border-bottom: 1px solid #f1f5f9;"><a href="tel:${countryCode}${mobile}" style="color: #0B3B68; text-decoration: none; font-weight: 600;">${fullPhone}</a></td>
          </tr>
          <tr>
            <td style="padding: 10px; font-weight: bold; color: #334155; border-bottom: 1px solid #f1f5f9;">Email Address:</td>
            <td style="padding: 10px; color: #0f172a; border-bottom: 1px solid #f1f5f9;">${
              email
                ? `<a href="mailto:${email}" style="color: #F47C45; text-decoration: none;">${email}</a>`
                : `<span style="color: #94a3b8; font-style: italic;">Not provided (Optional)</span>`
            }</td>
          </tr>
          <tr>
            <td style="padding: 10px; font-weight: bold; color: #334155; border-bottom: 1px solid #f1f5f9;">Purpose:</td>
            <td style="padding: 10px; color: #F47C45; font-weight: bold; border-bottom: 1px solid #f1f5f9;">${purpose}</td>
          </tr>
        </table>
        ${
          projectDetails
            ? `<div style="margin-top: 20px; padding: 16px; background-color: #f8fafc; border-left: 4px solid #0B3B68; border-radius: 6px;">
                <h4 style="margin: 0 0 8px 0; color: #0B3B68;">Project Details:</h4>
                <p style="margin: 0; white-space: pre-wrap; color: #334155; font-size: 14px; line-height: 1.6;">${projectDetails}</p>
              </div>`
            : `<div style="margin-top: 20px; padding: 12px; background-color: #f8fafc; border-radius: 6px; color: #94a3b8; font-size: 13px; font-style: italic;">No additional project details provided.</div>`
        }
        <div style="margin-top: 24px; font-size: 12px; color: #94a3b8; text-align: center;">
          Sent from Web With Abhi Portfolio • Pune, India
        </div>
      </div>
    `;

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: `Web With Abhi <${process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev"}>`,
        to: recipientEmail,
        subject: `[Web With Abhi] New Inquiry: ${purpose} from ${name}`,
        html: emailBody,
      }),
    });

    if (!resendResponse.ok) {
      const errText = await resendResponse.text();
      console.error("Resend API error:", errText);
      return NextResponse.json(
        { success: false, message: "Failed to send email notification via Resend." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Thank you! Your message has been sent successfully to Abhishek Panchgalle.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error handling contact submission:", error);
    return NextResponse.json(
      {
        success: false,
        message: "An unexpected error occurred while submitting your message. Please try again or reach out directly to webwithabhi296@gmail.com.",
      },
      { status: 500 }
    );
  }
}
