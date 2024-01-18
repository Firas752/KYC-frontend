// pages/api/getRedirectRefId.ts

import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { accessToken, userId } = req.body;

  try {
    const response = await axios.post('https://api.onebrick.io/v1/auth/token', {
      accessToken,
      userId,
      redirectUrl: ""
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      }
    });

    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching redirect ref id' });
  }
};