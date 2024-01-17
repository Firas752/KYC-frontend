import { NextApiRequest, NextApiResponse } from 'next';
import multer from 'multer';
import axios from 'axios';
import FormData from 'form-data';

const upload = multer({ storage: multer.memoryStorage() });

export const config = {
  api: {
    bodyParser: false,
  },
};

interface NextApiRequestWithFile extends NextApiRequest {
  file: any; // Change 'any' to the actual type of the file if known
}

export default async (req: NextApiRequestWithFile, res: NextApiResponse) => {
  upload.single('file')(req as any, res as any, async (err) => {
    // if (err) {
    //   console.error(err);
    //   return res.status(500).json({ error: err.message });
    // }

    const file = req.file;
    const userId = req.body.user_id;
    const publicAccessToken = req.body.publicAccessToken;

    if (!file) {
      return res.status(400).json({ error: 'Please upload a file' });
    }

    if (file || userId || publicAccessToken){
      console.log(file.buffer);
      console.log(file);
      
      console.log(userId);
      console.log(publicAccessToken);
    }

    const formData = new FormData();
    formData.append('files', file.buffer, { filename: file.originalname });
    formData.append('user_id', userId);

    try {
      const response = await axios.post('https://api.onebrick.io/v1/documents/extract', formData, {
        headers: {
          'Content-Type': `multipart/form-data`,
          'Authorization': `Bearer ${publicAccessToken}`
        }
      });

      res.status(200).json(response.data);
    } catch (error:any) {
      // console.log(error.response?.data);
      console.log(error.response?.data.data);
  // console.log(error.response?.status);
  // console.log(error.response?.headers);
  //     console.log(error);
      res.json({ error: 'An error occurred while processing your request.', message: error.message, });
    }
  });
};