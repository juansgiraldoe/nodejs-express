import express from 'express';

const router = express.Router();

//request (req) es lo que enviamos (la peticion).
//response (res) es la respuesta por parte de express.
router.get('/', ( req, res ) => {
  res.render('inicio')
});

router.get('/nosotros', ( req, res ) => {
  const viajes = 'Viaje a alemania';
  res.render('nosotros',{
    viajes,
  })
});

export default router;