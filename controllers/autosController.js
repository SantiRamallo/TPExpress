const fs = require('fs')

const concesionarias = JSON.parse(fs.readFileSync(__dirname+'../../data/concesionarias.json', 'utf-8'));

let arrayMarcas = []
concesionarias.forEach((concesionaria)=>{
    concesionaria.autos.forEach((auto)=>{
        arrayMarcas.push(auto.marca)
    })
})

let arrayAutos = []





const autosController = {
    index: function(req, res){
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' })
        res.write('ESTOS SON NUESTROS AUTOS:  \n\n')
        concesionarias.forEach((concesionaria)=>{
            concesionaria.autos.forEach((auto)=>{
              
                res.write('MARCA: ' + auto.marca + '\n')
                res.write('MODELO: ' + auto.modelo + '\n')
                res.write('AÑO: ' + auto.anio + '\n')
                res.write('COLOR: ' + auto.color + '\n\n')
                
              
            })
        })
        res.end()
    },
    detalle: function(req, res) {
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' })
        let marcaAuto = req.params.marca
        if( arrayMarcas.includes(marcaAuto)){
            concesionarias.forEach((concesionaria) =>{
                concesionaria.autos.forEach((auto)=>{
                    arrayAutos.push(auto)
                })
            })
    
            let autosFiltrados = arrayAutos.filter(function(auto){
                return auto.marca.toUpperCase() == marcaAuto.toUpperCase()
            })
            let contador = 1
            autosFiltrados.forEach((auto)=>{
                res.write('AUTO NRO ' + contador + '\n')
                res.write('MARCA: ' + auto.marca + '\n' )
                res.write('MODELO: ' + auto.modelo + '\n')
                res.write('AÑO: ' + auto.anio + '\n\n')
                contador++
            })
            res.end()
        }else{
        res.write('No se encontro la marca ' + marcaAuto + ' en nuestra base de datos.')
        res.end()
    }
    
    },
    dato: (req, res) => {
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' })
        let datoInput = req.params.dato
        let marcaInput = req.params.marca
        if(arrayMarcas.includes(marcaInput)){
            if(isNaN(datoInput)){
            
                res.write('esto es un color')
            }
            else{
                res.write('es un numero')
            }
            res.end()
        }
        else{
            res.write('No se encontro la marca ' + marcaInput + ' en nuestra base de datos.')
            res.end()
        }
        
    }
}














module.exports = autosController