import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

const TYPE_LABELS: Record<string, string> = {
  buy: "Купить робота",
  rent: "Арендовать",
  training: "Записаться на обучение",
  consult: "Консультация",
  partner: "Партнёрство / дистрибьюция",
  edu: "Корпоративная программа для вуза/компании",
}

export async function POST(req: NextRequest) {
  try {
    const { name, phone, type, model, message } = await req.json()

    if (!name || !phone) {
      return NextResponse.json({ error: "Имя и телефон обязательны" }, { status: 400 })
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    const typeLabel = TYPE_LABELS[type] || type
    const subject = `[Unitree Alashed] Новая заявка — ${typeLabel} — ${name}`

    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #1e293b; padding: 24px; border-radius: 12px 12px 0 0;">
          <h2 style="color: #fff; margin: 0; font-size: 20px;">Новая заявка с unitree.alashed.kz</h2>
        </div>
        <div style="background: #f8fafc; padding: 24px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 12px 12px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr style="border-bottom: 1px solid #e2e8f0;">
              <td style="padding: 12px 0; color: #64748b; font-size: 14px; width: 140px;">Имя</td>
              <td style="padding: 12px 0; color: #0f172a; font-weight: 600;">${name}</td>
            </tr>
            <tr style="border-bottom: 1px solid #e2e8f0;">
              <td style="padding: 12px 0; color: #64748b; font-size: 14px;">Телефон / WA</td>
              <td style="padding: 12px 0; color: #0f172a; font-weight: 600;">${phone}</td>
            </tr>
            <tr style="border-bottom: 1px solid #e2e8f0;">
              <td style="padding: 12px 0; color: #64748b; font-size: 14px;">Тип запроса</td>
              <td style="padding: 12px 0; color: #2563eb; font-weight: 600;">${typeLabel}</td>
            </tr>
            ${model ? `
            <tr style="border-bottom: 1px solid #e2e8f0;">
              <td style="padding: 12px 0; color: #64748b; font-size: 14px;">Модель</td>
              <td style="padding: 12px 0; color: #0f172a; font-weight: 600;">${model}</td>
            </tr>` : ""}
            ${message ? `
            <tr>
              <td style="padding: 12px 0; color: #64748b; font-size: 14px; vertical-align: top;">Сообщение</td>
              <td style="padding: 12px 0; color: #0f172a;">${message.replace(/\n/g, "<br/>")}</td>
            </tr>` : ""}
          </table>
          <div style="margin-top: 20px; padding: 16px; background: #eff6ff; border-radius: 8px; border-left: 4px solid #2563eb;">
            <p style="margin: 0; font-size: 13px; color: #1e40af;">
              Ответьте клиенту в течение 2 часов. WhatsApp: ${phone}
            </p>
          </div>
        </div>
      </div>
    `

    await transporter.sendMail({
      from: `"Unitree Alashed" <${process.env.SMTP_USER}>`,
      to: ["alash.electronics@gmail.com", "nurdamiron@gmail.com"],
      subject,
      html,
      replyTo: phone.includes("@") ? phone : undefined,
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error("Contact form error:", err)
    return NextResponse.json({ error: "Ошибка отправки" }, { status: 500 })
  }
}
