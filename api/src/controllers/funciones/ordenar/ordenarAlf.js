//ordena el array de razas ingresada por parametro

async function ordenAlfAsc(razasAsc) {
  let orden = razasAsc.sort((a, b) => {
    let nombreA = a.name.toLowerCase();
    let nombreB = b.name.toLowerCase();

    if (nombreB < nombreA) {
      return -1;
    }

    if (nombreB > nombreA) {
      return 1;
    }
    return 0;
  });
  return orden;
}

module.exports = ordenAlfAsc;
