import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const clientId = '5500802e-196c-4f32-92a0-d28ceaf99a19';
  const clientSecret = 'BUChl8HXmNoqKq5B8ukvv0zu23ulvy';

  try {
    const response = await axios.get('https://api.onebrick.io/v1/auth/token', {
      auth: {
        username: clientId,
        password: clientSecret
      }
    });

    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching auth token' });
  }
};