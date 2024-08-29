import React from 'react'

function LoadingErrorCard() {
    return (
        <section className='w-full  flex items-center justify-center ' >
            <div className='mt-5 rounded-lg shadow-lg p-7 text-center'>
                <h2 className='font-bold text-gray-500 ' >Atención!</h2>
                <p className='font-extralight text-gray-400' >
                    No se encontraron datos.
                </p>
            </div>
        </section>
    )
}

export default LoadingErrorCard