import { Testimonio } from "../models/Testimonios.js";


const guardarTestimonios = async (req, res) => {
  //Validacion
  const {nombre, correo, mensaje} = req.body;

  const errores = [];
  
  if (nombre.trim() === '') {
    errores.push({mensaje:`El nombre no puede ir vacio.`});
  };
  if (correo.trim() === '') {
    errores.push({mensaje:`El correo no puede ir vacio.`});
  };
  if (mensaje.trim() === '') {
    errores.push({mensaje:`El mensaje no puede ir vacio.`});
  };

  if( errores.length > 0 ){
    //Consultar testimonios existentes.
    const testimonios = await Testimonio.findAll();

    //Mostrar errores en la vista.
    res.render('testimonios', {
      pagina: `Testimonios`,
      errores,
      nombre,
      correo,
      mensaje,
      testimonios
    });
  } else {
    //Alcmacenarlo en la base de datos.
    try {
      await Testimonio.create({
        nombre,
        correo,
        mensaje
      });
    } catch (error) {
      console.log(error);
    };
    res.redirect('/testimonios');
  };
};

export {
  guardarTestimonios,
}