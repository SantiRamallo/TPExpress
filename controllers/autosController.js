const fs = require('fs')

const concesionarias = JSON.parse(fs.readFileSync(__dirname+'../../data/concesionarias.json', 'utf-8'));







const autosController = {
    index: function(req, res){
        concesionarias.forEach((concesionaria)=>{
            concesionaria.autos.forEach((auto)=>{
                res.write('Estos son nuestros autos: ' + concesionaria.auto)
                res.end()
            })
        })
    }
}














module.exports = autosController
