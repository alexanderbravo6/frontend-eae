'use client'
import useClienteAxios from '@/shared/Hooks/useClienteAxios';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { toast } from "react-toastify";
import { useEvaluacion } from '../Context/useEvaluacion';

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;


function Countdown({ timestamp, token, idPregunta }) {
    const TIMESTAMPEND = timestamp;
    const { handleCerrarEvaluacion} = useEvaluacion();
    // const TIMESTAMPEND = new Date("2024/03/21 03:00:54").getTime()/1000;
    const [isLoading, setIsLoading] = useState(true);
    const [horas, setHoras] = useState("00");
    const [minutos, setMinutos] = useState("00");
    const [segundos, setSegundos] = useState("00");


    const calculateTimeLeft = async () => {
        const now = new Date().getTime();
        const diff = TIMESTAMPEND * 1000 - now;

        if (diff <= 0) {
            setHoras("00")
            setMinutos("00")
            setSegundos("00")

            handleCerrarEvaluacion(token, idPregunta)

        } else {
            const h = Math.floor(diff / HOUR).toString().padStart(2, '0');
            setHoras(h);
            const m = Math.floor((diff % HOUR) / MINUTE).toString().padStart(2, '0');
            setMinutos(m);
            const s = Math.floor((diff % MINUTE) / SECOND).toString().padStart(2, '0');
            setSegundos(s);
        }

    };

    useEffect(() => {

        const timerId = setInterval(() => {
            calculateTimeLeft()
        }, 1000);
        setIsLoading(false);
        return () => clearInterval(timerId);

    }, []);


    return (


        isLoading ? <p>Cargando...</p> :
            <>
                < div className='gap-1 flex' >
                    <span key={"hour"} >
                        {horas}
                    </span>
                    :
                    <span key={"min"} >
                        {minutos}
                    </span>
                    :
                    <span key={"seconds"} >
                        {segundos}
                    </span>
                </div >
            </>



    );
}

export default Countdown;