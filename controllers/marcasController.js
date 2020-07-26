const fs = require('fs')

const concesionarias = JSON.parse(fs.readFileSync(__dirname+'../../data/concesionarias.json', 'utf-8'));


let arrayMarcas = []
concesionarias.forEach((concesionaria)=>{
    concesionaria.autos.forEach((auto)=>{
        arrayMarcas.push(auto.marca)
    })
})

let arrayAutos = []
let marcasSinRepetir = []

const marcasController = {
    index: function(req, res){
        res.write('Estas son nuestras marcas:\n\n')
        arrayMarcas.forEach((marca) =>{
            if(marcasSinRepetir.indexOf(marca) == -1 ){
                (marcasSinRepetir.push(marca))
                    res.write(marca.toUpperCase() + '\n')
            }
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
            res.write( 'ESTOS SON LOS AUTOS QUE TENEMOS DE LA MARCA: ' + marcaAuto.toUpperCase() + '\n\n')
            autosFiltrados.forEach((auto)=>{
                res.write('AUTO NRO ' + contador + '\n')
                // res.write('MARCA: ' + auto.marca.toUpperCase() + '\n' )
                res.write('MODELO: ' + auto.modelo.toUpperCase() + '\n')
                res.write('AÑO: ' + auto.anio + '\n\n')
                res.write('================\n\n')
                contador++
            })
            res.end()
        }else{
        res.write('No se encontró la marca ' + marcaAuto.toUpperCase() + ' en nuestra base de datos.')
        res.end()
    }
    
    }
}

module.exports = marcasController