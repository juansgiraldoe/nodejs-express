import express from 'express';

const router = express.Router();

//request (req) es lo que enviamos (la peticion).
//response (res) es la respuesta por parte de express.
router.get('/', ( req, res ) => {
  res.render('inicio', {
    pagina: 'Inicio',
  })
});

router.get('/nosotros', ( req, res ) => {
  //Pasar variables a las vistas.
  //const viajes = 'Viaje a alemania';
  
  
  res.render('nosotros',{
    pagina: 'Nosotros'
  })
});

router.get('/viajes', ( req, res ) => {
  res.render('viajes', {
    pagina: 'Viajes',
  })
});

router.get('/testimonios', ( req, res ) => {
  res.render('testimonios', {
    pagina: 'Testimonios',
  })
});

export default router;