import express from 'express';
import { paginaInicio, paginaNosotros, paginaViajes, paginaTestimonios, paginaDestino } from '../controllers/paginasController.js';
import { guardarTestimonios } from '../controllers/controllerTestimonios.js';


const router = express.Router();

//request (req) es lo que enviamos (la peticion).
//response (res) es la respuesta por parte de express.

router.get('/', paginaInicio);

router.get('/nosotros', paginaNosotros);

router.get('/viajes', paginaViajes);
router.get('/viajes/:slug', paginaDestino);

router.get('/testimonios', paginaTestimonios);
router.post('/testimonios',guardarTestimonios);

export default router;