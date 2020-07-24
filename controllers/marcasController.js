const fs = require('fs')

const concesionarias = JSON.parse(fs.readFileSync(__dirname+'../../data/concesionarias.json', 'utf-8'));


let arrayMarcas = []

let marcasSinRepetir = []
const marcasController = {
   index: (req, res) => {
      res.write('Estas son nuestras marcas:\n\n')
    concesionarias.forEach((concesionaria)=>{
        concesionaria.autos.forEach((auto)=>{
           arrayMarcas.push(auto.marca)
      
        
        })
        arrayMarcas.forEach((marca) =>{
         if(marcasSinRepetir.indexOf(marca) == -1 ){
            (marcasSinRepetir.push(marca))
            res.write(marca.toUpperCase() + '\n')
            
   }
     
        })
    })
    
    res.end()
   }
 
}

module.exports = marcasController
   
