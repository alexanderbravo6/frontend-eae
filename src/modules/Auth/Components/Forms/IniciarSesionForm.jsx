'use client'

import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useEffect, useRef, useState } from "react";
import { Button, Spinner } from "@nextui-org/react";
import { EyeFilledIcon, EyeSlashFilledIcon } from "@/shared/Components/Icons";
import Link from "next/link";
import TemplateAlert from "@/shared/Components/Templates/TemplateAlert";
function IniciarSesionForm() {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
    const [customError, setCustomError] = useState(null);
    const [showPassword, setShowPassword] = useState(false)
    const [errorValidation, setErrorValidation] = useState('');
    const [captchaText, setCaptchaText] = useState('')
    const [userCaptchaInput, setUserCaptchaInput] = useState('')
    const [isCaptchaValid, setIsCaptchaValid] = useState(false)
    const canvasRef = useRef(null)
    useEffect(() => {
        generateCaptcha()
    }, [])

    const generateCaptcha = () => {

        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        if (ctx) {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            ctx.font = 'italic 24px Arial'
            ctx.fillStyle = '#333'
            ctx.textBaseline = 'middle'
            ctx.textAlign = 'center'
            const newCaptcha = Math.random().toString(36).substring(2, 8)
            setCaptchaText(newCaptcha)

            // Add some noise
            for (let i = 0; i < 50; i++) {
                ctx.fillStyle = `rgba(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255},0.5)`
                ctx.fillRect(Math.random() * canvas.width, Math.random() * canvas.height, 2, 2)
            }

            // Draw the text with a slight rotation for each character
            newCaptcha.split('').forEach((char, index) => {
                ctx.save()
                ctx.translate(20 + index * 20, canvas.height / 2)
                ctx.rotate((Math.random() - 0.5) * 0.4)
                ctx.fillStyle = `hsl(${Math.random() * 360}, 70%, 50%)`
                ctx.fillText(char, 0, 0)
                ctx.restore()
            })
        }

    }

    const validateCaptcha = () => {
        if (userCaptchaInput.toLowerCase() === captchaText.toLowerCase()) {
            setIsCaptchaValid(true)
        } else {
            setIsCaptchaValid(false)
            generateCaptcha()
            setUserCaptchaInput('')
        }
    }
    const ValidarUsuario = handleSubmit(async (data) => {

        try {

            const request = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + '/v1/auth/iniciar-sesion', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    "X-Requested-With": "XMLHttpRequest",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    usuario: data?.usuario,
                    clave: data?.clave
                })
            });
            const response = await request.json();

            if (response?.success === true) {


                const res = await signIn('credentials', {
                    redirect: false,
                    idPersonaRol: response?.data?.defecto.idPersonRol,
                    idRol: response?.data?.defecto.idRol,
                    idSede: response?.data?.defecto.idSede,
                    anio: response?.data?.defecto.anio,
                    sede: response?.data?.defecto.sede,
                    descripcionRol: response?.data?.defecto.descripcionRol,
                    idInstitucionActiva: response?.data?.defecto.idRol == 3 ? response?.data?.defecto.idSede : 0,
                    // Datos no configurables
                    iniciales: response?.data?.usuario.iniciales,
                    idPersona: response?.data?.usuario.idPersona,
                    idUsuario: response?.data?.usuario.id,
                    nombreCompleto: response?.data?.usuario.nombres + " " + response?.data?.usuario.apellidoPaterno,
                    token: response?.data?.usuario.token,
                    tipoToken: response?.data?.usuario.tipoToken,
                    estadoProceso: response?.data?.usuario.estadoProceso,
                });

                if (res?.error) {
                    setErrorValidation(res?.error)
                }


            } else {

                if (response.errors) {
                    const nuevosErrores = Object.values(response.errors).flat();
                    setErrorValidation(nuevosErrores)
                }
                if (response.validations) {
                    const nuevosErrores = Object.values(response.validations).flat();
                    setErrorValidation(nuevosErrores)
                }
            }
        } catch (e) {
            console.log(e.message || 'Error al iniciar sesión')
        }

    })

    return (
        <>


            <form onSubmit={ValidarUsuario} className="max-w-lg mb-[6%]  gap-5 flex flex-col md:mx-auto mx-[10%] h-[80%] md:w-full w-[80%] items-center justify-center">

                <div className="mb-6 text-left w-full">
                    <h1 className=" font-extralight mb-3 text-xl md:text-3xl  text-black">
                        <strong className="font-bold">
                            Sistema de evaluación de los aprendizajes de los estudiantes
                        </strong> de IESP-EESP Públicas
                    </h1>
                    <p className="font-extralight text-[#454545] ">
                        Sección de Gestión
                    </p>

                </div>
                <p className="text-gray-400 text-left w-full">Inicio de sesión</p>
                {
                    errorValidation.length === 0 ? null : (
                        <section className="w-full">
                            <TemplateAlert message={errorValidation} type={'Error'} />
                        </section>
                    )
                }
                <section className="mb-5 w-full ">
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
                </section>

                <section className="mb-5 w-full ">
                    <div className="flex">

                        <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                            </svg>

                        </span>
                        <div className="relative w-full">
                            <input
                                type={showPassword ? 'text' : 'password'}
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
                            <button
                                type="button"
                                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? (
                                    <svg className="h-5 w-5 text-gray-400 hover:text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                                    </svg>
                                ) : (
                                    <svg className="h-5 w-5 text-gray-400 hover:text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                    {
                        errors.clave && (
                            <span className="text-red-500 text-xs">{errors.clave.message}</span>
                        )
                    }
                </section>
                <section className="w-full justify-between flex flex-row">
                    <Link href={`registro-estudiante`} className="text-[#338ef7] text-left font-bold" >
                        Registrarme como estudiante
                    </Link>
                    <Link href={`recuperar-clave`} className="text-[#338ef7] text-left font-bold" >
                        ¿Olvidaste tu contraseña?
                    </Link>
                </section>
                <section className="flex  w-full md:flex-nowrap flex-wrap gap-4">
                    <div >
                        <label htmlFor="captcha" className="sr-only">CAPTCHA</label>
                        <div className="flex items-center ">
                            <canvas ref={canvasRef} width={150} height={50} className="border border-gray-300 rounded-md" />
                        </div>
                    </div>

                    <div className="flex w-full items-center gap-3 justify-center">
                        <div className="relative w-full">
                            <input
                                id="captcha"
                                type="text"
                                placeholder="Ingresa el CAPTCHA"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                value={userCaptchaInput}
                                onChange={(e) => setUserCaptchaInput(e.target.value)}
                            />
                            <button type="button" onClick={
                                () => {
                                    setIsCaptchaValid(false)
                                    generateCaptcha()
                                    setUserCaptchaInput('')

                                }

                            } title="Actualizar Captcha" className="absolute inset-y-0 right-0 pr-3 flex items-center text-blue-400 hover:text-blue-600">
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-rotate-2">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M15 4.55a8 8 0 0 0 -6 14.9m0 -4.45v5h-5" />
                                    <path d="M18.37 7.16l0 .01" />
                                    <path d="M13 19.94l0 .01" />
                                    <path d="M16.84 18.37l0 .01" />
                                    <path d="M19.37 15.1l0 .01" />
                                    <path d="M19.94 11l0 .01" />
                                </svg>
                            </button>
                        </div>
                        <Button
                            variant="ghost"
                            onClick={validateCaptcha}
                            color="primary"
                            size="md"
                        >
                            Validar
                        </Button>
                    </div>
                </section>

                {

                    isSubmitting || !isCaptchaValid ?
                        <span
                            disabled={isSubmitting}
                            className="w-full disabled:bg-[#338EF7]  cursor-no-drop text-white border border-[#006FEE] bg-[#338EF7] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2    "
                        >
                            {
                                !isSubmitting ? 'Iniciar Sesión' : <Spinner color="default" size="sm" />
                            }

                        </span>
                        :
                        <button
                            disabled={isSubmitting}
                            className="w-full disabled:bg-[#338EF7]  text-white hover:text-white border border-[#006FEE] bg-[#006FEE] hover:bg-[#338EF7] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2    "
                        >
                            Iniciar Sesión
                        </button>
                }
            </form>
            <footer className="bg-white rounded-lg shadow m-4 h-[10%] md:h-[6%]">
                <div className="w-full mx-auto h-full max-w-screen-xl p-2 md:flex md:items-center md:justify-between">
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
export default IniciarSesionForm