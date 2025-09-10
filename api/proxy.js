module.exports = async (req, res) => {
  try {
    const apiUrl = 'https://skinbattle-ums.skinbattle.gg/affiliate_code_detail/YOSOYKUSH?secret=D4FwiYQ6Z647D';
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      res.status(response.status).json({ error: `API error: ${response.statusText}` });
      return;
    }

    const data = await response.json();

    // Add CORS headers
    res.setHeader('Access-Control-Allow-Origin', 'https://yosoykush.fun');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: `Proxy error: ${error.message}` });
  }
};
