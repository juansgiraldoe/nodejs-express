import { Viaje } from '../models/Viaje.js';
import { Testimonio } from '../models/Testimonios.js';

const paginaInicio =  ( req, res ) => {

  res.render('inicio', {
    pagina: 'Inicio',
  
  });
};

const paginaNosotros = ( req, res ) => {
  //Pasar variables a las vistas.
  //const viajes = 'Viaje a alemania';
  
  res.render('nosotros',{
    pagina: 'Nosotros'
  
  });
};

const paginaViajes = async ( req, res ) => {
  //Consultar BD
  const viajes = await Viaje.findAll();
  // console.log(viajes);

  res.render('viajes', {
    pagina: 'Próximos viajes',
    viajes,
  });
};

const paginaTestimonios = async ( req, res ) => {
  try {
    const testimonios = await Testimonio.findAll();
    res.render('testimonios', {
      pagina: 'Testimonios',
      testimonios
    });
  } catch (error) {
    console.log(error);
  };
};

//Muestra viaje por su slug.

const paginaDestino = async (req, res ) => {
  
  const { slug } = req.params;

  try {
    const viaje = await Viaje.findOne({ where:{ slug }})
    res.render('destino', {
      pagina: `Informacion del viaje a`,
      viaje,
    })
  } catch (error) {
    console.log(error);
  }


};
export {
  paginaInicio,
  paginaNosotros,
  paginaViajes,
  paginaTestimonios,
  paginaDestino,
};