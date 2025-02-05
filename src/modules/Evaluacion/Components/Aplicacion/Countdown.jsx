'use client'
import React, { useEffect, useState } from 'react';
import { useEvaluacion } from '../../Context/EvaluacionProvider';

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;

function Countdown({ timestamp, idPregunta, timeLimit }) {
    const TIMESTAMPEND = timestamp * (timestamp < 10000000000 ? 1000 : 1);  // Si está en segundos, convertir a milisegundos
    const { handleCerrarEvaluacion, testParams } = useEvaluacion();
    const [isLoading, setIsLoading] = useState(true);
    const [horas, setHoras] = useState("00");
    const [minutos, setMinutos] = useState("00");
    const [segundos, setSegundos] = useState("00");

    const calculateTimeLeft = () => {
        const now = Date.now();
        const diff = TIMESTAMPEND - now;

        if (diff <= 0) {
            setHoras("00");
            setMinutos("00");
            setSegundos("00");
            if (timeLimit) {
                handleCerrarEvaluacion(testParams.idevaluacion, idPregunta);
            }
        } else {
            const h = Math.floor(diff / HOUR).toString().padStart(2, '0');
            const m = Math.floor((diff % HOUR) / MINUTE).toString().padStart(2, '0');
            const s = Math.floor((diff % MINUTE) / SECOND).toString().padStart(2, '0');
            setHoras(h);
            setMinutos(m);
            setSegundos(s);
        }
    };

    useEffect(() => {
        calculateTimeLeft(); // Calcular inicialmente para evitar retraso
        const timerId = setInterval(calculateTimeLeft, 1000);
        setIsLoading(false);
        return () => clearInterval(timerId);
    }, [timestamp]);

    return (
        isLoading ? <p>Cargando...</p> :
            <div className='gap-1 flex'>
                <span>{horas}</span>:
                <span>{minutos}</span>:
                <span>{segundos}</span>
            </div>
    );
}

export default Countdown;
