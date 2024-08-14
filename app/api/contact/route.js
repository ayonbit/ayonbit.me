import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { firstname, lastname, email, phone, service, message } =
      await req.json();

    // Create a transporter
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Send email
    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_TO,
      subject: `New contact form submission from ${firstname} ${lastname}`,
      text: `Name: ${firstname} ${lastname}\nEmail: ${email}\nPhone: ${phone}\nService: ${service}\nMessage: ${message}`,
      html: `<p>Name: ${firstname} ${lastname}</p><p>Email: ${email}</p><p>Phone: ${phone}</p><p>Service: ${service}</p><p>Message: ${message}</p>`,
    });

    // Optionally send a reply to the user
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thank you for your message!",
      text: "We have received your message and will get back to you shortly.",
      html: "<p>We have received your message and will get back to you shortly.</p>",
    });

    return new Response(
      JSON.stringify({ message: "Email sent successfully!" }),
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ message: "Error sending email." }), {
      status: 500,
    });
  }
}
