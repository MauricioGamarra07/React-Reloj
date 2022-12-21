import React, { useEffect, useState } from 'react'

function Reloj() {

    const fecha = new Date();

    const [horas, setHoras] = useState(0);
    const [minutos, setMinutos] = useState(0);
    const [segundos, setSegundos] = useState(0);

    useEffect(() => {
        setHoras(agregarCeros(fecha.getHours()));
    }, [])

    useEffect(() => {
        setMinutos(agregarCeros(fecha.getMinutes()));

        if (minutos == 59) {
            setHoras(horas + 1);
        }

    }, []);

    setTimeout(() => {
        /* console.log(fecha.getSeconds()); */
        setSegundos(agregarCeros(fecha.getSeconds()));

        if (segundos == 59) {
            setMinutos(minutos + 1);
        }

    }, 1000);

    const agregarCeros = n => {
        if (n.toString().length < 2) return "0".concat(n);
        return n;
    }

    return (
        <div>
            <div className="reloj">
                <div className="pantalla">
                    <div className="iconos-top">
                        <i className='bx bxs-battery-low bx-lg'></i>
                        <i className='bx bx-envelope bx-lg'></i>
                    </div>
                    <div className="info">
                        <h1>{horas}</h1>
                        <h1>:</h1>
                        <h1>{minutos}</h1>
                        <h2>{segundos}</h2>
                    </div>
                    <div className="iconos-bottom">
                        <i className='bx bx-phone bx-lg'></i>
                        <i className='bx bxs-alarm bx-lg'></i>
                    </div>
                </div>

                <div className="botones">
                    <div className="boton1"></div>
                    <div className="boton2"></div>
                </div>
            </div>
        </div>
    )
}

export default Reloj