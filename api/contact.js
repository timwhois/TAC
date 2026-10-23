export default function handler(req, res) {
  return res.status(503).json({ error: 'Email delivery is not configured yet.' });
}
