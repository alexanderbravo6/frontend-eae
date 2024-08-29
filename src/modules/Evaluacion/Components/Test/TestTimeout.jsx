import React from 'react'
import { Button } from '@nextui-org/react'
import Image from 'next/image'
import Link from 'next/link'
function TestTimeout() {
    return (
        <div className='lg:w-[791px] min-h-[550px] m-auto py-[5%] '>
            <div className='mt-8  rounded-lg shadow-xl p-10 '>

                <Image src="/icon-timeout.png" className='mx-auto' width={150} height={150} alt="Icono success prueba fianliada" />
                <h2 className='text-center font-bold text-xl mt-4'>
                    Tiempo de evaluación cumplido
                </h2>
                <p className='mt-4 text-sm font-extralight mx-8 text-center'>
                    El tiempo de evaluación ha sido cumplido, la dirección de formación inicial docente del Ministerio de Educación agradece tu participación en la EAE.
                </p>
                <div className='w-60 mx-auto'>
                    <Link className='bg-[#04C8C8] justify-center  mt-6  text-white   h-[40px] text-center font-extralight rounded-xl flex items-center text-sm ' href={`/`}>
                        Ir a la página principal
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default TestTimeout