// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Sentiment from 'sentiment'

const sentiment = new Sentiment()
export default function handler(req, res) {
  if (req.method === 'POST') {
    const analysis = sentiment.analyze(req.body.text)
    res.status(200).json({ score: analysis?.score })
  } else {
    res.status(400).json({ message: 'Invalid Request' })
  }
}
