/* GOOGLE APPS SCRIPT EXAMPLE
Use this only if you want suggestions to save into Google Sheets.
1. Create a Google Sheet.
2. Go to Extensions > Apps Script.
3. Paste this code.
4. Deploy > New deployment > Web app.
5. Execute as: Me. Who has access: Anyone.
6. Copy the Web App URL into assets/js/main.js as GOOGLE_SCRIPT_URL.
*/
const SHEET_NAME="Suggestions";
function doPost(e){const sheet=SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);const data=JSON.parse(e.postData.contents);sheet.appendRow([new Date(),data.fullName,data.email,data.suggestion]);return ContentService.createTextOutput(JSON.stringify({status:"success"})).setMimeType(ContentService.MimeType.JSON);}
