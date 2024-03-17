//-> (commonjs) === const express = require('express');
import express from 'express';
import router from './routes/index.js';

const app = express();

//Habilitar PUG.
app.set('view engine', 'pug')

//Definir la carpeta publica.
app.use(express.static('public'))

//Agregar router.
app.use('/', router);

//Definir puerto.
const port = process.env.PORT || 4500;

app.listen( port, ()=> {
  console.log( `El servidor esta funcionando  en el puerto ${port}` );
});