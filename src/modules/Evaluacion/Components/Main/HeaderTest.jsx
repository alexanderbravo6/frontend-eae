
import React from 'react'
import Image from 'next/image'
import Countdown from '../Countdown'

import { Progress } from '@nextui-org/react'

function HeaderTest({ data, idPregunta, token }) {
    const porcentaje = Math.round((data?.ultimaPregunta / data?.totalPreguntas) * 100)

    return (
        <>
            {
                data &&
                <div className='lg:max-w-[90%] lg:min-w-[60%] min-w-full rounded-xl shadow-lg flex flex-wrap gap-8  justify-between py-6 px-8'>
                    <div className='flex col-span-2  lg:col-span-3  items-center   gap-3'>
                        <Image src={`/icon-prueba-${data?.svg}.svg`} width={40} height={40} alt="libro icon" />
                        <div>
                            <p className='font-bold text-base normal-case '>
                                {data?.nombrePrueba}
                            </p>
                            <span className='text-base' >{data?.cicloEstudios}</span>
                        </div>
                    </div>
                    <div className=' lg:min-w-80 lg:max-w-80 w-full transform- ' >
                        <div className='flex items-start'>
                            <p className='text-sm text-gray-400 '>Tu progreso</p>
                        </div>
                        <div className='flex justify-between'>
                            <p className='text-[#04C8C8] text-sm font-bold' >
                                Pregunta {data?.ultimaPregunta} de {data?.totalPreguntas}
                            </p>
                            <div className='text-gray-400  text-sm flex gap-1 '>
                                <Image src="/icon-relog.svg" width={15} height={15} alt="libro icon" />
                                <Countdown timestamp={data?.timestampend} token={token} idPregunta={idPregunta} />
                            </div>
                        </div>
                        <div className='mt-2 w-full '>
                            <Progress  size="md" radius="sm"
                                classNames={{
                                    indicator: "bg-teal-400",
                                }}
                                value={porcentaje} />
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default HeaderTest