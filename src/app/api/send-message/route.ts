import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chat_id = process.env.TELEGRAM_CHAT_ID;

  if (!token)
    return NextResponse.json({
      status: "TELEGRAM_BOT_TOKEN environment variable not found.",
    });
  if (!chat_id)
    return NextResponse.json({
      status: "TELEGRAM_CHAT_ID environment variable not found.",
    });

  const { message } = await request.json();

  try {
    const response = await axios.get(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        params: {
          text: message,
          chat_id,
        },
      }
    );

    return NextResponse.json({ status: "Message sent successfully!" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ status: "Error sending message" });
  }
}
