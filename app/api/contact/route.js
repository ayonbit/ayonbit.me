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

    //body
    const body = `
     <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
    <div style="background-color: #f7f7f7; padding: 20px; border-radius: 8px;">
      <h2 style="color: #444;">Hello, ${firstname}</h2>
      <p style="font-size: 16px;">Thank you for reaching out to us! I wanted to let you know that I have received your message and will be reviewing it shortly.</p>
      <p style="font-size: 16px;">I'm dedicated to providing you with the best possible support and will get back to you as soon as possible with the answers you need.</p>
      <p style="font-size: 16px;">If you have any additional information to share or if your inquiry is urgent, feel free to reply to this email, and I’ll prioritize your request.</p>
      <p style="font-size: 16px;">I appreciate your patience and look forward to assisting you.</p>
      <p style="font-size: 16px; font-weight: bold;">Best regards,</p>
      <h3 style="color: #444;">Ayon Bit</h3>
      <p style="font-size: 14px; color: #777;">Full-Stack Developer | Web Development Expert</p>
      <p style="font-size: 14px; color: #777;">Website: <a href="https://ayonbit.me" style="color: #1e90ff;">https://ayonbit.me</a></p>
    </div>
  </div>
  `;
    // Optionally send a reply to the user
    await transporter.sendMail({
      from: `"Ayon Bit" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Thank you for your message!",

      html: body,
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
