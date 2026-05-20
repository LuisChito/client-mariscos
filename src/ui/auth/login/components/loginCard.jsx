import React from 'react'
import './loginCard.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const LoginCard = () => {
  // Creamos estados para guardar a los usuarios
  const [usuario, setUsuario] =  useState('');
  const [password, setPassword] = useState('');
  // Redirrecionmiento cuando sí sale bien el login 
  const navigate = useNavigate();

  const iniciarSesion = async () => {
    try {
      const respuesta = await fetch('http://localhost:3001/loginAuth', {
        method: 'POST',
        headers: {'Content-Type': 'application/json',},
        body: JSON.stringify({ usuario, password }), // Enviamos los datos 
      });
      const datos = await respuesta.json();
      if (respuesta.ok) {
        const datosGuardar = {
        id: datos.id,
        usuario: datos.usuario
      };
        // Aqui guardamos el perfil si el inicio de sesion es exitoso
        localStorage.setItem('user_session', JSON.stringify(datosGuardar));
        console.log('Inicio de sesion exitoso');
        navigate('/admin/dashboard');
      }
      else{
        console.log('Inicio de sesion fallido');
        navigate('/login');
      }
    } catch (error) {
      console.error('Error de conexion: ', error);
      alert('Error del servidor');
    }
  };

  return (
    <div className='contenedor-login'>
      <p className='txt'>Inicia sesión</p>
      <form>
        <label htmlFor="username">Usuario: </label>
        <input 
          type="text" 
          id="usuario" 
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)} // Actualiza el estado de usuario
        />
        <br />
        <label htmlFor="password">Contraseña: </label>
        <input 
          type="password" 
          id="password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)} // Actualiza el estado de la contraseñá
        />
      </form>
      <p className="info">Dale click a la imagen para iniciar sesión</p>
      <img src="/imgs/favicon.png" alt="Logo" className="logo" onClick={iniciarSesion} />
    </div>
  )
}

export default LoginCard
