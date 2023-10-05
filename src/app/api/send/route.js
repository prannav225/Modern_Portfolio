import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req, res) {
  const { body } = req;
  const { email, subject, message } = body;
  
  try {
    const data = await resend.emails.send({
      from: process.env.FORM_EMAIL,
      to: email,
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>Thank you for contacting us!</p>
          <p>{message}</p>
        </>
      ),
    });

    console.log("Data to send:", data);
    return NextResponse.json(data);
  } catch (error) {
    console.error("Email sending failed:", error);
    return NextResponse.json(
      { error: "Email sending failed", details: error.message },
      { status: 500 }
    );
  }
}
