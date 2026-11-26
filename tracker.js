// Vercel serverless endpoint.
// It keeps the upstream JSON fetch server-side so the browser does not depend on CORS.
export default async function handler(req, res) {
  const upstream = 'https://portwatch-vi.xyz/tracker.json';
  try {
    const r = await fetch(upstream, { headers: { 'User-Agent': 'VI-PortWatch-Redesign/1.0' } });
    if (!r.ok) return res.status(502).json({ error: 'Upstream tracker unavailable' });
    const data = await r.json();
    res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate=300');
    res.status(200).json(data);
  } catch {
    res.status(502).json({ error: 'Could not fetch upstream tracker' });
  }
}