'use client'

import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { Spinner } from "@nextui-org/react";
function LoginForm() {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
    const [customError, setCustomError] = useState(null);

    const ValidarUsuario = handleSubmit(async (data) => {
        const res = await signIn('credentials', {
            redirect: false,
            usuario: data.usuario,
            clave: data.clave,
        });
        if (res.error) {
            setCustomError(res.error)
        }
    })

    return (
        <>
            <form onSubmit={ValidarUsuario} className="max-w-lg mb-[6%]  gap-5 flex flex-col md:mx-auto mx-[10%] h-[80%] md:w-full w-[80%] items-center justify-center">

                <div className="mb-6 text-left w-full">
                    <h1 className=" font-extralight mb-3 text-3xl text-black"><strong className="font-bold">
                        Sistema de evaluación de los aprendizajes de los estudiantes</strong> de IESP-EESP Públicas
                    </h1>
                    <p className="font-extralight text-[#454545] ">
                        Módulo administrativo
                    </p>

                </div>
                <p className="text-gray-400 text-left w-full">Inicio de sesión</p>
                {
                    customError && (
                        <div className="bg-red-500 text-white p-4 text-left text-xs w-full rounded-lg mb-5">
                            {customError}
                        </div>
                    )
                }
                <div className="mb-5 w-full ">
                    <div className="flex">
                        <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>

                        </span>
                        <input
                            type="usuario"
                            id="usuario"
                            {...register('usuario', {
                                required: {
                                    value: true,
                                    message: 'El nombre de usuario es requerido'
                                }
                            })}
                            className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5 "
                            placeholder="Usuario"
                        />

                    </div>
                    {
                        errors.usuario && (
                            <span className="text-red-500 text-xs">{errors.usuario.message}</span>
                        )
                    }
                </div>

                <div className="mb-5 w-full ">
                    <div className="flex">

                        <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                            </svg>

                        </span>
                        <input
                            type="password"
                            {...register('clave', {
                                required: {
                                    value: true,
                                    message: 'La Contraseña es requerido'
                                }
                            })}
                            id="clave"
                            className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5 "
                            placeholder="Contraseña"
                        />

                    </div>
                    {
                        errors.clave && (
                            <span className="text-red-500 text-xs">{errors.clave.message}</span>
                        )
                    }
                </div>
                {

                    isSubmitting ?
                        <button
                            disabled={isSubmitting}
                            className="w-full disabled:opacity-75  text-white border border-[#006FEE] bg-[#006FEE]  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2    "
                        >
                            <Spinner color="default" size="sm" />
                        </button>
                        :
                        <button
                            disabled={isSubmitting}
                            className="w-full   text-white hover:text-white border border-[#006FEE] bg-[#006FEE] hover:bg-[#338EF7] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2    "
                        >
                            Iniciar Sesión
                        </button>
                }

            </form>
            <footer className="bg-white rounded-lg shadow m-4 h-[10%] md:h-[6%]">
                <div className="w-full mx-auto max-w-screen-xl p-2 md:flex md:items-center md:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center ">© {new Date().getFullYear()} <a href="https://www.minedu.gob.pe/superiorpedagogica/" className="hover:underline">DIFOID</a>
                    </span>
                    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500  sm:mt-0">
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Normativa</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Politica de Privacidad</a>
                        </li>

                    </ul>
                </div>
            </footer>
        </>
    );

}
export default LoginForm