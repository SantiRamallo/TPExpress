const fs = require('fs')

const concesionarias = JSON.parse(fs.readFileSync(__dirname+'/data/concesionarias.json', 'utf-8'));
let arrayDir= []
mostrarDireccion = concesionarias.forEach(function(dato){
    arrayDir.push(dato.direccion)
})

let arraySuc = []
mostrarSucursales = concesionarias.forEach(function(dato){
    arraySuc.push(dato.sucursal)
})
let contador = 0
const sucursalesController = function (req, res){
        console.log(arraySuc.forEach(function(contador){
            console.log(arrayDir[contador])
            contador++
        }))
    }


console.log(sucursalesController())