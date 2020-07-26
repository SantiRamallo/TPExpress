const fs = require('fs')

const concesionarias = JSON.parse(fs.readFileSync(__dirname+'../../data/concesionarias.json', 'utf-8'));







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
    }
}














module.exports = autosController
