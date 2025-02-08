export default function handler(req, res) {
    const apiKeys = process.env.API_KEYS.split(","); // Ambil dari env & pisah jadi array
    const randomKey = apiKeys[Math.floor(Math.random() * apiKeys.length)]; // Pilih random

    res.status(200).json({ apiKey: randomKey });
}
