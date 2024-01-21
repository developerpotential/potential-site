import nodemailer from "nodemailer";

// SMTP configuration
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || "465"),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

// Function to send emails
export const sendEmail = async (
  to: string,
  subject: string,
  html: string,
  text: string
) => {
  // Email options
  const mailOptions = {
    from: "developer@potential.tech",
    to,
    subject,
    html,
    text,
  };

  // Sending email
  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};
