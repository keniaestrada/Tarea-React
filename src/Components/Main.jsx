import React from 'react';
import './Main.css';

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
            <h1>My best pet</h1>
            <h2>Aprendiendo React</h2>
            <p><small>Help</small></p>
            <div className="tarjeta">
                <img src={datosPersonales.fotoUrl} alt="Foto de perfil" />
                <h3>{datosPersonales.nombre}</h3>
                <p>Edad: {datosPersonales.edad}</p>
                <p>Ocupación: {datosPersonales.ocupacion}</p>
                <p>Correo: {datosPersonales.correo}</p>
            </div>
        </>
    );
};

export default Main;
