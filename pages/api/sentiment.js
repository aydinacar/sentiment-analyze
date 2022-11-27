// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Sentiment from 'sentiment'

const sentiment = new Sentiment()
export default function handler(req, res) {
  const analysis = sentiment.analyze('Cats are stupid.')
  res.status(200).json({ score: analysis?.score })
}
