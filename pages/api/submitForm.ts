import axios, { AxiosError } from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { institutionId, username, password, redirectRefId, clientid, publicAccessToken } = req.body;

  console.log(clientid, publicAccessToken);
 
  try {
    if (clientid && publicAccessToken) {
    // const response = await axios.post(`https://api.onebrick.io/v1/auth/clientId=${4570}`, {
    const response = await axios.post(`https://api.onebrick.io/v1/auth/100`, {
      institutionId,
      username,
      password,
      redirectRefId
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${publicAccessToken}`
      }
    });

    res.status(200).json(response.data);
  }
  } catch (error:any) {
    console.log(error);
    res.json({ error: 'An error occurred while processing your request.', message: error.message, redirectRefId });
  }
};