

const fs = require('fs')

const concesionarias = JSON.parse(fs.readFileSync(__dirname+'../../data/concesionarias.json', 'utf-8'));

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
    }}
//     detalle: function(req, res){
//         let idSucursal = req.params.id;
//         conceVacio.forEach(sucursal =>{
//             if(idSucursal == mostrarSucursales.id){
//                 res.send('Sucursal: '+ arraySuc)
//             }
//         })
//     }
// }


module.exports = sucursalesController
