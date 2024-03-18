import express from 'express';
import { paginaInicio, paginaNosotros, paginaViajes, paginaTestimonios } from '../controllers/paginasController.js';

const router = express.Router();

//request (req) es lo que enviamos (la peticion).
//response (res) es la respuesta por parte de express.

router.get('/', paginaInicio);

router.get('/nosotros', paginaNosotros);

router.get('/viajes', paginaViajes);

router.get('/testimonios', paginaTestimonios);

export default router;