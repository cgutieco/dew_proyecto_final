import { useForm } from 'react-hook-form';
import './Contacto.css'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  Nombres: yup.string().min(2,"Ingrese sus nombres"),
  Apellidos: yup.string().min(2,"Ingrese sus apellidos"),
  telefono: yup.string().min(9,"Ingrese su numero"),
  mensaje: yup.string().min(4,"Ingrese su mensaje"),
}); 

const Contacto = () => {

  const {register,handleSubmit,formState:{errors}} =useForm({resolver:yupResolver(schema)});

  const onData = (data) => {
    
    console.log(data);
    
  }


  return (
    <div className="contenedor-contacto">

      <h1 className="titulo-contacto">CONTÁCTANOS</h1>

      <form className="formulario-contacto" onSubmit={handleSubmit(onData)}>

        <div className="campo-fila">
          <input  placeholder={errors.Nombres?.message || "Nombres"}
          className="campo-texto"{...register("Nombres")}
/>
          
          <input  placeholder={errors.Apellidos?.message || "Apellidos"} 
          className="campo-texto" {...register("Apellidos")}/> 

        </div>
        
        <input type='email' placeholder="correo"
        className="campo-texto" {...register("correo")}/>

        <input placeholder={errors.telefono?.message || "telefono"} 
        className="campo-texto"  {...register("telefono")}/>

        <textarea placeholder={errors.mensaje?.message || "mensaje"} 
        className="campo-mensaje" {...register("mensaje")}></textarea>

        <button className="boton-enviar">ENVIAR</button>

      </form>

    </div>
  );
};

export default Contacto;