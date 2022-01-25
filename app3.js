
/*const express = require ("express")
const app = express()
=== lo de arriba lo copié abajo para nuevo formato */

/*app.get('/', (req, res) => {
    res.send('¡Hola mundo!');
   });
app.listen(3000, () =>
    console.log('Servidor corriendo') )*/
 /*app.get('/', (req, res) => {
        res.send('¡Hola mundo!');
       });
app.listen(3001, () =>
        console.log ("Levantando un servidor con Express"))
app.get ("./home",function(req,resp) { res.send("Hola, estamos en el HOme ")} )*/

const express = require ("express")
let app = express ()
const path = require("path")

/*app.get('/', (req, res) => {
    res.send('Holita');
})*/
app.use(express.static(path.resolve(__dirname, './public')))
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname,"./views/index.html"))})
app.get('/geekCompra', (req, res) => {
        res.sendFile(path.resolve(__dirname,"./views/geekCompra.html"))})
   
app.listen (3031,()=>console.log("servidor Funcionando ") )