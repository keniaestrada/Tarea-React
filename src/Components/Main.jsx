import React from 'react';
import './Main.css';
import fotoUrl from '../Components/foto.png'; // Ruta de la imagen

const Main = () => {
    const datosPersonales = {
        nombre: "Juan Pérez",
        edad: 30,
        ocupacion: "Desarrollador Web",
        correo: "juan@example.com",
        fotoUrl: "https://via.placeholder.com/150",
    };

    return (
        <>
        <br />
            <h1>My presentation</h1>
            <h2>Aprendiendo React</h2>
            <p><small>Yo soy</small></p>
            <div className="tarjeta">
                <img src={fotoUrl} alt="Foto de perfil" />
                <h3>{datosPersonales.nombre}</h3>
                <p>Edad: {datosPersonales.edad}</p>
                <p>Ocupación: {datosPersonales.ocupacion}</p>
                <p>Correo: {datosPersonales.correo}</p>
            </div>
        </>
    );
};

export default Main;
