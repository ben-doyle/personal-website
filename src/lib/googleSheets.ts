import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';

export async function appendToSheet(email: string) {
  try {
    // Initialize auth with service account
    const serviceAccountAuth = new JWT({
      email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    // Initialize the sheet
    const doc = new GoogleSpreadsheet(
      process.env.GOOGLE_SHEET_ID!,
      serviceAccountAuth
    );

    await doc.loadInfo();
    
    // Get the first sheet (or you can get by title)
    const sheet = doc.sheetsByIndex[0];

    // Add a row with the email and timestamp (Australian format)
    const now = new Date();
    await sheet.addRow({
      Email: email,
      Timestamp: now.toLocaleString('en-AU', { timeZone: 'Australia/Brisbane' }),
      Date: now.toLocaleDateString('en-AU', { timeZone: 'Australia/Brisbane' }),
      Time: now.toLocaleTimeString('en-AU', { timeZone: 'Australia/Brisbane' }),
    });

    console.log('Successfully added to Google Sheets');
    return { success: true };
  } catch (error) {
    console.error('Error adding to Google Sheets:', error);
    return { success: false, error };
  }
}
