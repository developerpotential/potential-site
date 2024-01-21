"use server";
import "server-only";
import { sendEmail } from "@/lib/mailer";

// this is a server action that is called when the lead-gen form is submitted
// it's gonna take the form data and package it up to email to our team
// we're gonna use nodemailer to send the email
// so we use the sendEmail function from src/lib/mailer.ts

export const handleLeadGenForm = async (formData: FormData) => {
  const formEmail = formData.get("email") as string | "Unknown email";

  const email = "lance@potential.tech"; // this is the email address we're sending to
  const subject = `[Lead Gen] ${formEmail}`; // this is the email subject

  // this is the email content
  const htmlContent = `<p>Hey Lance, you have a new lead!</p>`;
  const textContent = "Hey Lance, you have a new lead!";

  await sendEmail(email, subject, htmlContent, textContent);
};
