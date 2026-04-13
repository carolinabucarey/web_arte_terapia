import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { nombre, email, mensaje, telefono } = await request.json();

    if (!nombre || !email || !mensaje) {
      return NextResponse.json({ error: 'Campos requeridos faltantes' }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.log('RESEND_API_KEY not configured. Form data:', { nombre, email, telefono });
      return NextResponse.json({ success: true });
    }

    const resend = new Resend(apiKey);

    // Send notification to Josefina
    await resend.emails.send({
      from: 'Formulario Web <onboarding@resend.dev>',
      to: process.env.NOTIFICATION_EMAIL || 'contacto@artejosefaine.cl',
      subject: `Nuevo mensaje de ${nombre}`,
      html: `
        <h2>Nuevo mensaje desde artejosefaine.cl</h2>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${telefono || 'No proporcionado'}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${mensaje}</p>
      `,
    });

    // Send confirmation to user
    await resend.emails.send({
      from: 'Arte y Terapia Salud <onboarding@resend.dev>',
      to: email,
      subject: 'Recibimos tu mensaje',
      html: `
        <p>Hola ${nombre},</p>
        <p>Gracias por escribirnos. Recibimos tu mensaje y te responderemos pronto.</p>
        <p>Un abrazo creativo,<br>Josefina</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Error al enviar el mensaje' }, { status: 500 });
  }
}
