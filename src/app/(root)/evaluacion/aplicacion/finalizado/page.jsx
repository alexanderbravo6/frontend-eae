import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function PruebaFinalizadaPage() {
  return (
    <>
      <div className='lg:w-full w-[90%] flex items-center  justify-center h-full  lg:my-0 lg:mx-0 mx-[5%] my-[5%] '>
        <div className='lg:w-[791px] min-h-[550px] m-auto py-[5%] '>

          <Image src="/icon-minedu.svg" className='mx-auto' width={140} height={140} alt="Icono Ministerio de Educación" />

          <div className='mt-8  rounded-lg shadow-xl p-10 '>

            <Image src="/icon-success.svg" className='mx-auto' width={150} height={150} alt="Icono success prueba fianliada" />
            <h2 className='text-center font-bold text-xl mt-4'>
              Tus respuestas han sido registradas
            </h2>
            <p className='mt-4 text-sm font-extralight mx-8 text-center'>
              La dirección de formación inicial docente del Ministerio de Educación agradece tu participación en la EAE.
            </p>
            <div className='w-60 mx-auto'>
              <Link className='bg-[#04C8C8] justify-center  mt-6  text-white   h-[40px] text-center font-extralight rounded-xl flex items-center text-sm ' href={`/evaluacion`}>
                Ir a la página principal
              </Link>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default PruebaFinalizadaPage