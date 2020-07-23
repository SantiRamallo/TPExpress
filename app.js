const express = require('express')

const app = express();

app.listen(3030, () => console.log('Server levantado en puerto 3030'));

let rutasPrincipal = require('./routes/home')
// let rutasAutos = require('./routes/autos')
// let rutasMarcas = require('./routes/marcas')
let rutasSucursales = require('./routes/sucursales')


app.use('/', rutasPrincipal)
// app.use('/autos', rutasAutos)
// app.use('/marcas', rutasMarcas)
app.use('/sucursales', rutasSucursales)


app.get('*', (req, res) => {
	res.status(404).send('404 Pagina no encontrada!. <br> ¡Houston, poseemos problemas!');
});
