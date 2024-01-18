// pages/api/getIncomeGeneral.ts

import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { userAccessToken } = req.body;

  try {
    const response = await axios.get('https://api.onebrick.io/v1/income/general', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${userAccessToken}`
      }
    });

    res.status(200).json(response.data);
  } catch (error:any) {
    console.log(error);
    res.json({ error: 'An error occurred while processing your request.', message: error.message});
  }
};