

const fs = require('fs')

const concesionarias = JSON.parse(fs.readFileSync(__dirname+'../../data/concesionarias.json', 'utf-8'));


let arraySucursales = []
concesionarias.forEach(function(sucursal){
    arraySucursales.push(sucursal)
})

const sucursalesController = {
    index: (req, res)=>{
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' })
        res.send(arraySucursales.forEach(function(local){
            res.write('Sucursal: ' + local.sucursal.toUpperCase() +  '\n\n' +'Direccion: '+  local.direccion+'\n\n' +'Telefono: ' + local.telefono + '\n\n' + '=============================================================================================\n\n')
       
        }))
        res.end()
    },
    detalle: (req, res)=>{
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' })
        let nombreSucursal = req.params.sucursal;
        arraySucursales.forEach(local =>{
            if(nombreSucursal.toUpperCase() == local.sucursal.toUpperCase()){
                res.write('Sucursal: '+ local.sucursal.toUpperCase() +  '\n\nDireccion: ' + local.direccion  + '\n') 
                res.write('Telefono: '+ local.telefono + '\n\n')
                res.write('Cantidad de autos: ' + local.autos.length + '\n\n')
                local.autos.forEach(auto =>{
                    
                    res.write('Marca: ' + auto.marca.toUpperCase() +'\n')
                    res.write('Modelo: '+ auto.modelo.toUpperCase() +'\n')
                    res.write('Año: ' + auto.anio + '\n\n' + '===================================================================================\n\n')
                })
                res.end()
            }
                
        })
        res.end('No encontramos la sucursal '+ nombreSucursal.toUpperCase())
    }
}


module.exports = sucursalesController
