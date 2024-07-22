
import axios from 'axios';

// @ts-ignore
export default async function handler(req, res) {
  const token = process.env.TELEGRAM_BOT_TOKEN
  
  if (!token) throw new Error('TELEGRAM_BOT_TOKEN environment variable not found.')
  if (req.method === 'POST') {
    const { message } = req.body;
    
    try {
      const response = await axios.post(`https://api.telegram.org/bot<${token}>/sendMessage`, {
        text: message,
      });

      res.status(200).json({ status: 'Message sent successfully!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: 'Error sending message' });
    }
  } else {
    res.status(405).json({ status: 'Method not allowed' });
  }
}
