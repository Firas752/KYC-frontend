// /pages/api/webhook.ts

import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    // Handle the webhook event sent by Brick
    const webhookEvent = req.body;

    // Log the event for debugging
    console.log('Received event:', webhookEvent);

    // TODO: Add your own logic to handle the event

    // Send a 200 response to acknowledge receipt of the event
    res.status(200).send({ received: true });
  } else {
    // If the request method is not POST, return a 405 Method Not Allowed response
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}