import express from 'express';

const router = express.Router();

//request (req) es lo que enviamos (la peticion).
//response (res) es la respuesta por parte de express.
router.get('/', ( req, res ) => {
  res.send('Inicio.')
});

router.get('/nosotros', ( req, res ) => {
  res.render('nosotros')
});

export default router;