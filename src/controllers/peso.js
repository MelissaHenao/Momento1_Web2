const pesoControllers = {};

pesoControllers.create = (req,res) => {

let pesos = []; 
let objetivoP={}
let perdieronPeso=0
let peso_inicial;
let peso_final;
let estado;

    let array_personas=req.body

    for (let i = 0; i < array_personas.length; i++) {
        const pesoPersonas = array_personas[i];

        //estado
        if(peso_inicial > peso_final ){
            objetivoP="cumplido"
            estado="gano"
            //contador para  los que perdieron peso
            perdieronPeso++


            //almacenar el objetivo y nombre de las personas que cumplieron con el objetivo
            objeto_objetivo={}
            objeto_objetivo['nombre'] = pesoPersonas.nombre
            objeto_objetivo['objetivo'] = objetivoP
        
        }
        else{
            estado="perdio"
            objetivoP="No cumplido"
        }

        //calcular peso actual 
        let pesoActual=(pesoPersonas.peso_inicial - pesoPersonas.peso_final)
        objeto_peso={}
        objeto_peso['nombre']=pesoPersonas.nombre;
        objeto_peso['peso Actual']=pesoActual
        objeto_peso['objetivo'] =pesoPersonas.objetivo
        objeto_peso['estado'] = estado
        pesos.push(objeto_peso) 
        


    }

    response ['peso Actual']=objeto_peso
    responde ['perdieron Peso'] = perdieronPeso
    response ['alcanzaron Objetivo'] = objeto_objetivo
    res.json(response)
}

module.exports = pesoControllers;