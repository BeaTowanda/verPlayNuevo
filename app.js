
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
   
app.listen (3030,()=>console.log("servidor Funcionando ") )