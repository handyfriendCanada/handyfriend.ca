
import axios from 'axios';

// @ts-ignore
export default async function handler(req, res) {
  const token = process.env.TELEGRAM_BOT_TOKEN
  const chat_id = process.env.TELEGRAM_CHAT_ID
  
  if (!token)  res.status(500).json({ status: 'TELEGRAM_BOT_TOKEN environment variable not found.' })
  if (!chat_id) res.status(500).json({ status: 'TELEGRAM_CHAT_ID environment variable not found.' })
  if (req.method === 'POST') {
    const { message } = req.body;
    
    try {
      const response = await axios.get(`https://api.telegram.org/bot${token}/sendMessage`, {
        params: {
          text: message,
          chat_id,
        }
      })

      res.status(200).json({ status: 'Message sent successfully!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: 'Error sending message' });
    }
  } else {
    res.status(405).json({ status: 'Method not allowed' });
  }
}
