

const fs = require('fs')

const concesionarias = JSON.parse(fs.readFileSync(__dirname+'../../data/concesionarias.json', 'utf-8'));


let arraySucursales = []
concesionarias.forEach(function(sucursal){
    arraySucursales.push(sucursal)
})

let arraySuc = []
mostrarSucursales = concesionarias.forEach(function(dato){
    arraySuc.push(dato.sucursal)
})

let arrayDir= []
mostrarDireccion = concesionarias.forEach(function(dato){
    arrayDir.push(dato.direccion)
})

let arrayTel = []

mostrarTel = concesionarias.forEach(function(dato){
    arrayTel.push(dato.telefono)
})

let conceVacio = []
mostrarConcesionarias = concesionarias.forEach(function(dato){
    conceVacio.push(dato.sucursal)
})

let contador = 0
const sucursalesController = {
    index: (req, res)=>{
        res.send(arraySuc.forEach(function(sucursal){
            res.write('Sucursal: ' + arraySuc[contador] +  '\n\n' +'Direccion: '+  arrayDir[contador]+'\n\n' +'Telefono: ' + arrayTel[contador] + '\n\n' + '----------------------------------------------------------------------------\n\n')
            contador++
       
        }))
        res.end()
    },
    detalle: (req, res)=>{
        let nombreSucursal = req.params.sucursal;
        res.send(arraySucursales.forEach(local =>{
            if(nombreSucursal.toUpperCase() == local.sucursal.toUpperCase()){
                res.write('Sucursal: '+ local.sucursal +  '\n\n  Direccion: ' + local.direccion  + '\n\n') 
                res.write('Cantidad de autos: ' + local.autos.length + '\n\n')
                local.autos.forEach(auto =>{
                    
                    res.write('Marca: ' + auto.marca +'\n')
                    res.write('Modelo: '+ auto.modelo +'\n')
                    res.write('Año: ' + auto.anio + '\n\n')
                })
            }
          
        }))
        
        res.end()
    }
}


module.exports = sucursalesController
