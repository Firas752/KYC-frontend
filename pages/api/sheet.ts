import { NextApiRequest, NextApiResponse } from 'next';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error('SUPABASE_URL and SUPABASE_KEY must be defined');
}

const supabase = createClient(supabaseUrl, supabaseKey);

// export async function writeToSheet(values: string[]): Promise<void> {
//   try {


    // const auth = new google.auth.GoogleAuth({
    //   keyFile: process.env.GOOGLE_APPLICATION_CREDENTIALS,
    //   scopes: ['https://www.googleapis.com/auth/spreadsheets', 'https://www.googleapis.com/auth/drive'],
    // });
  
    // const client = await auth.getClient();
    // const oauth2Client = client as OAuth2Client;

    // const drive = google.drive({ version: 'v3', auth: oauth2Client });
    // const sheets: sheets_v4.Sheets = google.sheets({ version: 'v4', auth: oauth2Client});
  
    // const response = await sheets.spreadsheets.values.append({
    //   spreadsheetId: process.env.SHEET_ID,
    //   range: 'list',
    //   valueInputOption: 'RAW',
    //   insertDataOption: 'INSERT_ROWS',
    //   requestBody: {
    //     values: [values],
    //   },
    // });
    // console.log(response);
//     // console.log('Success');
//   }
//   catch (error) {
//     console.error(error);
//   }
// }



export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const values = req.body.values;

    // Use Supabase client to insert data into your table
    const { data, error } = await supabase
      .from('BPJS')
      .insert([
        { company_name: values[0], latest_salary: values[1], latest_payment_date: values[2], working_month: values[3], status: values[4], total_balance: values[5] },
      ]);

    if (error) {
      console.error(error);
      return res.status(500).json({ message: 'An error occurred' });
    }

    return res.status(200).json({ message: 'Success' });
  } else {
    return res.status(405).json({ message: 'Method not allowed' });
  }
}