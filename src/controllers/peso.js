const { response } = require("express");

const pesoControllers = {};

pesoControllers.create = (req, res) => {
  // let obj_body = req.body;

  // if(obj_body.nombre == "Mateo"){

  //     response ['Nombre'] = obj_body.nombre;
  //     response ['Condicion'] = "Cumple";
  // }else{

  //     response ['Nombre'] = obj_body.nombre;
  //     response ['Condicion'] = "No cumple";
  // }

  let array_personas = req.body;

  let pesos = [];
  let objetivos = [];
  let objetivoP = {};
  let perdieronPeso = 0;

  let estado;

  for (let i = 0; i < array_personas.length; i++) {
    const pesoPersonas = array_personas[i];

    let peso_inicial = array_personas[i].peso_inicial;
    let peso_final = array_personas[i].peso_final;

    //     //estado
    if (peso_inicial > peso_final) {
      objetivoP = "cumplido";
      estado = "gano";

      //contador para  los que perdieron peso
      perdieronPeso++;
    } else {
      estado = "perdido";
      objetivoP = "No cumplido";
    }

    obj_pesoActual = {};
    obj_pesoActual["nombre"] = pesoPersonas.nombre;
    obj_pesoActual["objetivo"] = objetivoP;
    obj_pesoActual["estado"] = estado;
    pesos.push(obj_pesoActual);

    

    //calcular peso actual
    let pesoActual = pesoPersonas.peso_inicial - pesoPersonas.peso_final;
    objeto_peso = {};
    objeto_peso["nombre"] = pesoPersonas.nombre;
    objeto_peso["diferencia de peso"] = pesoActual;
    objeto_peso["objetivo"] = pesoPersonas.objetivo;
    objeto_peso["estado"] = estado;
    objetivos.push(objeto_peso);
    
  }

  response["Datos de objetivo"] = pesos;
  response["Datos finales"] = objetivos;
  response["perdieron Peso"] = perdieronPeso;

  res.json(response);
};

module.exports = pesoControllers;
