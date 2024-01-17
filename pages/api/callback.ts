// pages/api/callback.ts

import { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
  // Handle the request here. You can access the request body with req.body.
  
  // Send a response
  res.status(200).json({ message: 'Callback received' });
};