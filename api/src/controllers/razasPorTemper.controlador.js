const axios = require("axios");
const { Raza, Temperamento } = require("../db");
const ordenAlfAsc = require("./funciones/ordenar/ordenarAlf");
const {
  ordenarPesoDes,
  ordenarPesoAsc,
} = require("./funciones/ordenar/ordenarPes");
const { obtenerPrincipalRazas } = require("./funciones/razasPrincipal");
const divicionDePagina = require("./funciones/utils/divicionPag");

async function obtenerPorTemperamento(req, res) {
  try {
    let { temper, pag, orden } = req.query;
    temper = temper.toLowerCase();

    let todasRazas = await obtenerPrincipalRazas();
    todasRazas = todasRazas.map((raza) => {
      if (raza.weight[0] === "N") raza.weight = "1";
      return raza;
    });

    if (temper) {
      //filtro las razas que tienen algun temperamento
      let razasConTemp = todasRazas.filter((raza) => {
        if (raza.temperaments) return raza;
      });

      //convierto los temperamentos en un array
      let razas = razasConTemp.filter((raza) => {
        let temperamentoDeRaza = raza.temperaments.toLowerCase().split(", ");
        //si el array de temperamentos incluye la palabra pasada por query, la retorna
        if (temperamentoDeRaza.includes(temper)) return raza;
      });

      if (orden === "1") {
        let ordenarPorPesoDes = await ordenarPesoDes(razas);

        let longitudRazasOrdenadas = razas.length;

        if (pag) {
          let siguientesOcho = await divicionDePagina(ordenarPorPesoDes, pag);

          return res.json({
            data: siguientesOcho,
            longitud: longitudRazasOrdenadas,
          });
        }

        let primerosOcho = await ordenarPorPesoDes.slice(0, 8);
        res.json({
          data: primerosOcho,
          longitud: longitudRazasOrdenadas,
        });
      }

      if (orden === "2") {
        let ordenarPorPesoAsc = await ordenarPesoAsc(razas);

        let longitudRazasOrdenadas = ordenarPorPesoAsc.length;

        if (pag) {
          let siguientesOcho = await divicionDePagina(ordenarPorPesoAsc, pag);

          return res.json({
            data: siguientesOcho,
            longitud: longitudRazasOrdenadas,
          });
        }
        let primerosOcho = await ordenarPorPesoAsc.slice(0, 8);
        res.json({
          data: primerosOcho,
          longitud: longitudRazasOrdenadas,
        });
      }

      if (orden === "4") {
        let ordenarPorPesoAsc = await ordenAlfAsc(razas);

        let longitudRazasOrdenadas = ordenarPorPesoAsc.length;

        if (pag) {
          let siguientesOcho = await divicionDePagina(ordenarPorPesoAsc, pag);

          return res.json({
            data: siguientesOcho,
            longitud: longitudRazasOrdenadas,
          });
        }
        let primerosOcho = await ordenarPorPesoAsc.slice(0, 8);
        res.json({
          data: primerosOcho,
          longitud: longitudRazasOrdenadas,
        });
      }

      //longitud del array de temperamentos que matchean
      let longitudDeArray = razas.length;
      //si se pasa una pagina, se divide segun la pagina
      if (pag) {
        let siguientesOcho = await divicionDePagina(razas, pag);

        return res.json({
          data: siguientesOcho,
          longitud: longitudDeArray,
        });
      }
      //divide las 8 primeras razas que matchearon con la busqueda
      let primerosOcho = await razas.slice(0, 8);

      res.json({
        data: primerosOcho,
        longitud: longitudDeArray,
      });
    }
  } catch (err) {
    console.log(err);
  }
}

module.exports = obtenerPorTemperamento;