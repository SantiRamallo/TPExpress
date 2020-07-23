

const fs = require('fs')

const concesionarias = JSON.parse(fs.readFileSync(__dirname+'../../data/concesionarias.json', 'utf-8'));


let arraySucursales = []
concesionarias.forEach(function(sucursal){
    arraySucursales.push(sucursal)
})

const sucursalesController = {
    index: (req, res)=>{
        res.send(arraySucursales.forEach(function(local){
            res.write('Sucursal: ' + local.sucursal +  '\n\n' +'Direccion: '+  local.direccion+'\n\n' +'Telefono: ' + local.telefono + '\n\n' + '----------------------------------------------------------------------------\n\n')
       
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
