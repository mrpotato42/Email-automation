function onOpen() {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu('MENÚ EXTRA!')
    .addItem('Abrir formulario', 'openForm')
    .addToUi();
}

function openForm(){
  var contentHTML = HtmlService.createHtmlOutputFromFile('OpenForm').setHeight(50);
  SpreadsheetApp.getUi().showModalDialog(contentHTML, 'Abriendo formulario');
}

function doGet(){
  const html = HtmlService.createTemplateFromFile('Index');
  const output = html.evaluate();
  return output;
}

function include(fileName) {
  return HtmlService.createHtmlOutputFromFile(fileName).getContent();
}

function getContentHTML(id){
  const contentHTML = HtmlService.createHtmlOutputFromFile(id).getContent();
  // console.log(id)
  return contentHTML;
}

function getDataCualitatives(){
  const dataRange = datosCualitativos.getRange(13, 1, datosCualitativos.getLastRow()-12, lastCol);
  const data = dataRange.getDisplayValues();
  return data;
}

function getDataTimeActivity(){
  const dataRange = tiemposActividades.getRange(11, 1, datosCualitativos.getLastRow()-12, lastCol);
  const data = dataRange.getDisplayValues();

  const dataRangePeople = tiemposActividades.getRange(tiemposActividades.getLastRow(), 14);
  const dataPeople = dataRangePeople.getDisplayValues();
  const dataFlatterned = dataPeople.flat();

  data.forEach(data => {
    data.push(dataFlatterned[0]);
  })

  return data;
}