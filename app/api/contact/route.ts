// import { NextResponse } from "next/server";
// import nodemailer from "nodemailer";

// export async function POST(req: Request) {
//   try {
//     const body = await req.json();
//     const { name, email, subject, message } = body;

//     // 1. Set up Nodemailer
//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//     });

//     // 2. Send the Email
//     await transporter.sendMail({
//       from: process.env.EMAIL_USER,
//       to: process.env.EMAIL_USER,
//       subject: `Portfolio Contact: ${subject}`,
//       html: `
//         <h2>New Contact Message</h2>
//         <p><strong>Name:</strong> ${name}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Subject:</strong> ${subject}</p>
//         <p><strong>Message:</strong></p>
//         <p>${message}</p>
//       `,
//     });

//     // 3. Forward the data to n8n (Server-to-Server call bypasses CORS)
//     // When you deploy to Vercel, change this local URL to your production n8n URL
//     try {
//       await fetch("http://localhost:5678/webhook/contact", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ name, email, subject, message }),
//       });
//     } catch (n8nError) {
//       // Log n8n failure but don't crash the whole route if the email went through successfully
//       console.error("Failed to forward data to n8n:", n8nError);
//     }

//     return NextResponse.json(
//       { message: "Form processed successfully" },
//       { status: 200 }
//     );
//   } catch (error) {
//     console.error(error);
//     return NextResponse.json(
//       { message: "Something went wrong" },
//       { status: 500 }
//     );
//   }
// }

import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    // Direct production forwarding to your live n8n workflow tunnel
    // Using /webhook/ instead of /webhook-test/ for production execution
    const n8nProductionUrl = "https://moody-protozoan-congenial.ngrok-free.dev/webhook/contact";

    const response = await fetch(n8nProductionUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, subject, message }),
    });

    if (!response.ok) {
      throw new Error(`n8n responded with status: ${response.status}`);
    }

    return NextResponse.json(
      { message: "Form processed successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing portfolio contact form:", error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}