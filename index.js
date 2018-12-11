const express = require('express');
const path = require('path');

const app = express();
//setting
app.set("port",process.env.PORT|| 8080);
//middleware
app.use(express.json());

app.use(express.static(__dirname+'/public'));
app.listen(app.get('port'),()=>{console.log("servidor iniciando ....");})