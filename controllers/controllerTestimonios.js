const guardarTestimonios = (req, res) => {
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

  console.log(errores);

};

export {
  guardarTestimonios,
}