// app/api/contact/route.js
import nodemailer from "nodemailer";

// Email validation utility
const validateEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

// Phone validation utility
const validatePhone = (phone) => {
  if (!phone) return true; // Phone is optional
  return /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(
    phone
  );
};

// Name validation utility
const validateName = (name) => {
  return name && name.trim().length >= 2 && name.trim().length <= 50;
};

// Message validation utility
const validateMessage = (message) => {
  return (
    message && message.trim().length >= 10 && message.trim().length <= 2000
  );
};

// Email template generator
const createEmailTemplate = (data, isConfirmation = false) => {
  const { firstname, lastname, email, phone, service, message } = data;

  const baseStyles = `
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #2d3748;
    line-height: 1.6;
    max-width: 600px;
    margin: 0 auto;
  `;

  const headerStyles = `
    background-color: #4f46e5;
    color: white;
    padding: 24px;
    border-radius: 8px 8px 0 0;
    text-align: center;
  `;

  const bodyStyles = `
    background-color: #ffffff;
    padding: 24px;
    border-radius: 0 0 8px 8px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  `;

  const footerStyles = `
    margin-top: 24px;
    padding-top: 16px;
    border-top: 1px solid #e2e8f0;
    font-size: 14px;
    color: #718096;
  `;

  if (isConfirmation) {
    return `
      <div style="${baseStyles}">
        <div style="${headerStyles}">
          <h1 style="margin: 0; font-size: 24px;">Thank You for Contacting Me!</h1>
        </div>
        <div style="${bodyStyles}">
          <p>Dear ${firstname},</p>
          <p>I've received your message regarding <strong>${
            service || "your inquiry"
          }</strong> and will review it shortly.</p>
          <p>Here's a summary of your inquiry:</p>
          
          <div style="background-color: #f8fafc; padding: 16px; border-radius: 4px; margin: 16px 0;">
            <p><strong>Name:</strong> ${firstname} ${lastname}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-line;">${message}</p>
          </div>
          
          <p>I typically respond within 24-48 hours. If your matter is urgent, please reply to this email.</p>
          
          <div style="${footerStyles}">
            <p>Best regards,</p>
            <p><strong>Ayon Bit</strong></p>
            <p>Full-Stack Developer</p>
            <p>Website: <a href="https://ayonbit.me" style="color: #4f46e5;">ayonbit.me</a></p>
          </div>
        </div>
      </div>
    `;
  }

  return `
    <div style="${baseStyles}">
      <div style="${headerStyles}">
        <h1 style="margin: 0; font-size: 24px;">New Contact Form Submission</h1>
      </div>
      <div style="${bodyStyles}">
        <h2 style="margin-top: 0;">Contact Details</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; border-bottom: 1px solid #e2e8f0; width: 120px;"><strong>Name:</strong></td>
            <td style="padding: 8px 0; border-bottom: 1px solid #e2e8f0;">${firstname} ${lastname}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; border-bottom: 1px solid #e2e8f0;"><strong>Email:</strong></td>
            <td style="padding: 8px 0; border-bottom: 1px solid #e2e8f0;">${email}</td>
          </tr>
          ${
            phone
              ? `
          <tr>
            <td style="padding: 8px 0; border-bottom: 1px solid #e2e8f0;"><strong>Phone:</strong></td>
            <td style="padding: 8px 0; border-bottom: 1px solid #e2e8f0;">${phone}</td>
          </tr>
          `
              : ""
          }
          <tr>
            <td style="padding: 8px 0; border-bottom: 1px solid #e2e8f0;"><strong>Service:</strong></td>
            <td style="padding: 8px 0; border-bottom: 1px solid #e2e8f0;">${
              service || "Not specified"
            }</td>
          </tr>
          <tr>
            <td style="padding: 8px 0;"><strong>Message:</strong></td>
            <td style="padding: 8px 0; white-space: pre-line;">${message}</td>
          </tr>
        </table>
        
        <div style="${footerStyles}">
          <p>This message was sent from your website contact form.</p>
        </div>
      </div>
    </div>
  `;
};

export async function POST(req) {
  try {
    const { firstname, lastname, email, phone, service, message } =
      await req.json();

    // Validate all fields
    if (!validateName(firstname)) {
      return new Response(
        JSON.stringify({
          message: "Please enter a valid first name (2-50 characters)",
        }),
        { status: 400 }
      );
    }

    if (!validateName(lastname)) {
      return new Response(
        JSON.stringify({
          message: "Please enter a valid last name (2-50 characters)",
        }),
        { status: 400 }
      );
    }

    if (!validateEmail(email)) {
      return new Response(
        JSON.stringify({ message: "Please enter a valid email address" }),
        { status: 400 }
      );
    }

    if (phone && !validatePhone(phone)) {
      return new Response(
        JSON.stringify({ message: "Please enter a valid phone number" }),
        { status: 400 }
      );
    }

    if (!validateMessage(message)) {
      return new Response(
        JSON.stringify({
          message: "Please enter a message between 10-2000 characters",
        }),
        { status: 400 }
      );
    }

    // Create transporter with improved configuration
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      pool: true,
      rateLimit: 3, // More conservative rate limiting
      maxConnections: 1,
      logger: process.env.NODE_ENV === "development",
      debug: process.env.NODE_ENV === "development",
    });

    // Prepare email data with trimmed values
    const emailData = {
      firstname: firstname.trim(),
      lastname: lastname.trim(),
      email: email.trim(),
      phone: phone ? phone.trim() : null,
      service: service ? service.trim() : null,
      message: message.trim(),
    };

    // Send notification to admin (with error handling)
    await transporter.sendMail({
      from: `"Website Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      replyTo: emailData.email,
      subject: `New Contact: ${emailData.firstname} ${emailData.lastname} - ${
        emailData.service || "General Inquiry"
      }`,
      text: `You have a new contact form submission.\n\nName: ${
        emailData.firstname
      } ${emailData.lastname}\nEmail: ${emailData.email}\nPhone: ${
        emailData.phone || "Not provided"
      }\nService: ${emailData.service || "General Inquiry"}\nMessage: ${
        emailData.message
      }`,
      html: createEmailTemplate(emailData),
      priority: "high",
    });

    // Send confirmation to user (with error handling)
    await transporter.sendMail({
      from: `"Ayon Bit" <${process.env.EMAIL_USER}>`,
      to: emailData.email,
      subject: `Thank you for your message, ${emailData.firstname}!`,
      html: createEmailTemplate(emailData, true),
      priority: "normal",
    });

    return new Response(
      JSON.stringify({
        message: "Your message has been sent successfully!",
        success: true,
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({
        message:
          "An error occurred while sending your message. Please try again later.",
        success: false,
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
