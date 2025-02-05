import React from 'react'
import Image from 'next/image'
import Button from 'next/link'

function TestErrorLanding() {
    return (
        <div className='lg:w-[791px] min-h-[550px] m-auto py-[5%] '>


            <div className='mt-8  rounded-lg shadow-xl p-10 '>

                <Image src="/icon-error.png" className='mx-auto' width={150} height={150} alt="Icono success prueba fianliada" />
                <h2 className='text-center font-bold text-xl mt-4'>
                    Error al generar la Evaluación
                </h2>
                <p className='mt-4 text-sm font-extralight mx-8 text-center'>
                    Ocurrio un error en el servidor al tratar de crear la evaluación, por favor intente nuevamente.
                    <br />

                    Si el error persiste, por favor contacte a soporte técnico.
                </p>
                <div className='w-60 mx-auto'>
                    <Button
                        onClick={() => window.location.reload()}
                        className='bg-[#04C8C8] justify-center  mt-6  text-white   h-[40px] text-center font-extralight rounded-xl flex items-center text-sm ' href={`/`}>
                        Recargar la Pagina
                    </Button>
                </div>

            </div>
        </div>

    )
}

export default TestErrorLanding