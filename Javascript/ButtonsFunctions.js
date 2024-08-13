function conversor(valor) {
  if (isNaN(minutos) < 61) {
    return "Error: El valor no es un número valido.";
  }
  var minutos = valor / 60;
  var segundos = valor / 3600;

  return minutos
}

function addInfo(form) {
  // console.log(form)

  const cargo = form.cargo;
  const procedimiento = form.procedimiento;
  const proceso = form.proceso;
  const descripcion = form.descripcion;
  const etapa = form.etapa;
  const diasSemana = form.diasSemana;
  const identificador = createId();
  const horasDia = form.horasDia;
  const responsableActividad = form.responsableActividad;
  const nombreManual = form.nombreManual;
  const observaciones = form.observaciones;
  const dependencia = form.dependencia;
  const nivelEmpleo = form.nivelEmpleo;

  datosCualitativos.appendRow([
    identificador,
    dependencia,
    proceso,
    procedimiento,
    nombreManual,
    etapa,
    descripcion,
    nivelEmpleo,
    cargo,
    responsableActividad,
    horasDia,
    diasSemana,
    observaciones,
  ]);

  function createId() {
    let id = 1;
    if (datosCualitativos.getLastRow() === 11) {
      return id;
    }

    const ids = datosCualitativos.getRange(13, 1, datosCualitativos.getLastRow() - 11, 1).getValues().map(id => id[0]);
    // console.log(ids)
    let maxId = 0
    ids.forEach(id => {
      if (id > maxId) {
        maxId = id;
      }
    });
    return maxId + 1;
  }
}

function updateInfo(form) {
  const row = searchRow(form.identificador);
  // console.log(row)
  datosCualitativos.getRange(row, 2, 1, datosCualitativos.getLastColumn() - 1).setValues([[
    form.dependencia,
    form.proceso,
    form.procedimiento,
    form.nombreManual,
    form.etapa,
    form.descripcion,
    form.nivelEmpleo,
    form.cargo,
    form.responsableActividad,
    form.horasDia,
    form.diasSemana,
    form.observaciones,
  ]])
  return "modificado";
}

function updateInfoDetails(form) {
  const row = searchRowDetails(form.idDetails);
  // console.log(form)
  tiemposActividades.getRange(row, 6, 1, 2).setValues([[
    form.averageDetails,
    form.periodicityDetails,
  ]])
  tiemposActividades.getRange(row, 10, 1, 3).setValues([[
    form.minimumTimeDetails,
    form.averageTimeDetails,
    form.maximumTimeDetails,
  ]])
  return "modificado";
}

function searchRowDetails(id) {
  const ids = tiemposActividades.getRange(11, 1, tiemposActividades.getLastRow()-12, lastCol).getValues().map(id => id[0]);
  const index = ids.indexOf(Number(id));
  const row = index + 11
  // console.log(row)
  return row;
}

function searchRow(id) {
  const ids = datosCualitativos.getRange(13, 1, datosCualitativos.getLastRow() - 12, 1).getValues().map(id => id[0]);
  const index = ids.indexOf(Number(id));
  const row = index + 13
  // console.log(row)
  return row;
}

function deleteInfo(id){
  const row = searchRow(id);
  if(id===''){
    return "No existe valor";
  }else{
    datosCualitativos.deleteRow(row);
  }
}