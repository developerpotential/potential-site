"use server";
import "server-only";
import { sendEmail } from "@/lib/mailer";

// this is a server action that is called when the lead-gen form is submitted
// it's gonna take the form data and package it up to email to our team
// we're gonna use nodemailer to send the email
// so we use the sendEmail function from src/lib/mailer.ts

export const handleLeadGenForm = async (formData: FormData) => {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const companyName = formData.get("companyName") as string;
  const note = formData.get("note") as string;

  if (!name || !email) {
    return { errors: "Name and email are required fields." };
  }

  const recipientEmail = "navni@potential.tech"; // this is the email address we're sending to
  const subject = `[Lead Gen] ${email}`; // this is the email subject

  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZoneName: "short",
  };
  const datetime = new Intl.DateTimeFormat("en-US", options).format(new Date());
  // this is the email content
  const htmlContent = `
    <p>New Lead Generation Form Submission:</p>
    <strong>Name:</strong> ${name}<br>
    <strong>Email:</strong> ${email}<br>
    <strong>Company:</strong> ${companyName}<br>
    <strong>Notes:</strong><br>
    ${note}<br>
    --<br>
    This message was sent automatically from the Lead Generation Form page at ${datetime}
  `;
  const textContent = `
    New Lead Generation Form Submission:
    Name: ${name}
    Email: ${email}
    Company: ${companyName}
    Notes: ${note}
    --
    This message was sent automatically from the Lead Generation Form page at ${datetime}
  `;

  try {
    await sendEmail(recipientEmail, subject, htmlContent, textContent);
    return { success: "Email sent successfully." };
  } catch (error) {
    return { errors: "Failed to send email. " + (error as Error).message };
  }
};
