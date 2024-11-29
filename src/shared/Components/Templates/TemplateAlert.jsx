import React from 'react'

function TemplateAlert({ message, type }) {
    return (
        <>
            {
                type === 'Error' ? (
                    <div className="bg-red-100 border-l-4 mb-5 border-red-500 text-xs text-red-700 p-4" role="alert">
                        <p className="font-bold mb-3">Corregir los siguientes errores:</p>
                        <p>{message}.</p>
                    </div >
                ) : null
            }
            {

                type === 'errorList' ? (

                    <>
                    
                        <div className="bg-red-100 border-l-4 mb-5 border-red-500 text-xs text-red-700 p-4" role="alert">
                            <p className="font-bold mb-3">Corregir los siguientes errores:</p>

                            <ol className='list-decimal ml-4  '>

                                {message &&
                                    message?.map((error, index) => (
                                        <li className='mb-1' key={index}>{error}</li>
                                    ))
                                }
                            </ol>

                        </div >
                    </>



                ) : null
            }
            {
                type === 'Attention' ? (
                    <div className="bg-orange-100 border-l-4 mb-5 border-orange-500 text-xs text-orange-700 p-4" role="alert">
                        <p className="font-bold">Atención:</p>
                        <p>{message}.</p>
                    </div >
                ) : null
            }
            {
                type === 'Success' ? (

                    <div className="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">
                        <div className="flex">
                            <div className="py-1"><svg className="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" /></svg></div>
                            <div>
                                <p className="text-sm font-bold">Atención:</p>
                                <p className="text-xs">{message}.</p>
                            </div>
                        </div>
                    </div>
                ) : null
            }
            {
                type === 'Info' ? (

                    <div className="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">
                        <div className="flex">
                            <div className="py-1"><svg className="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" /></svg></div>
                            <div>
                                <p className="font-bold">Atención:</p>
                                <p className="text-xs">{message} </p>
                            </div>
                        </div>
                    </div>
                ) : null
            }

        </>
    )
}

export default TemplateAlert