/** Sheets names */
const SHEET1 = 'Datos cualitativos';
const SHEET2 = 'Tiempos Actividades';

/** Sheets instances */
const datosCualitativos = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET1);
const tiemposActividades = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET2);

var lastRow = datosCualitativos.getLastRow();
var lastCol = datosCualitativos.getLastColumn();
