const fs = require('fs')

const concesionarias = JSON.parse(fs.readFileSync(__dirname+'../../data/concesionarias.json', 'utf-8'));


let conceVacio = []
mostrarConcesionarias = concesionarias.forEach(function(dato){
    conceVacio.push(dato.sucursal)
})


const homeController = {
    index: (req, res)=>{
        res.send(('BIENVENIDOS A NUESTRA PAGINA!!\n\nEstas son nuestras sucursales: \n\n')+ conceVacio.join('\n\n==========================\n\n'))
    }
}


module.exports = homeController
