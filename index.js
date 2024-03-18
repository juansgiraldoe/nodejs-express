//-> (commonjs) === const express = require('express');
import express from 'express';
import router from './routes/index.js';
import db from './config/db.js';


const app = express();

//Conectar la base de datos.
db.authenticate()
  .then(() => console.log('Base de datos conectada'))
  .catch(error => console.log(error))

//Habilitar PUG.
app.set('view engine', 'pug');

app.use((req, res, next)=>{
  //Obtener el año actual.
  const year = new Date ();
  res.locals.actualYear = year.getFullYear();
  
  res.locals.siteName = 'Travel Agency'
  
  next();
})

//Definir la carpeta publica.
app.use(express.static('public'));

//Agregar router.
app.use('/', router);

//Definir puerto.
const port = process.env.PORT || 4500;

app.listen( port, ()=> {
  console.log( `El servidor esta funcionando  en el puerto ${port}` );
});