'use client'

import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useEffect, useRef, useState } from "react";
import { Button, Spinner } from "@nextui-org/react";
import { EyeFilledIcon, EyeSlashFilledIcon } from "@/shared/Components/Icons";
function LoginForm() {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
    const [customError, setCustomError] = useState(null);
    const [showPassword, setShowPassword] = useState(false)
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
                            type={showPassword ? "text" : "password"}
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
                        <Button
                            type="button"
                            isIconOnly
                            variant="light"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? (
                                <EyeSlashFilledIcon className="h-2 w-2 text-gray-200" />
                            ) : (
                                <EyeFilledIcon className="h-2 w-2 text-gray-200" />
                            )}
                        </Button>

                    </div>
                    {
                        errors.clave && (
                            <span className="text-red-500 text-xs">{errors.clave.message}</span>
                        )
                    }
                </div>
                <div className="flex gap-4">
                    <label htmlFor="captcha" className="sr-only">CAPTCHA</label>
                    <div className="flex items-center space-x-2">
                        <canvas ref={canvasRef} width={150} height={50} className="border border-gray-300 rounded-md" />
                        <button type="button" onClick={generateCaptcha} variant="outline" size="icon" className="flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-refresh">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4" />
                                <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4" />
                            </svg>
                            <span className="sr-only">Actualizar CAPTCHA</span>
                        </button>
                    </div>
                    <div className="flex items-center justify-center">
                        <input
                            id="captcha"
                            type="text"
                            placeholder="Ingresa el CAPTCHA"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            value={userCaptchaInput}
                            onChange={(e) => setUserCaptchaInput(e.target.value)}

                        />
                        <Button
                            type="button"
                            onClick={validateCaptcha}
                            variant="secondary"
                            size="sm"
                          
                        >
                            Validar
                        </Button>
                    </div>
                </div>

                {

                    isSubmitting || !isCaptchaValid ?
                        <span
                            disabled={isSubmitting}
                            className="w-full disabled:bg-[#338EF7]  cursor-no-drop text-white border border-[#006FEE] bg-[#338EF7] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2    "
                        >
                            {
                                !isSubmitting ? 'Iniciando Sesión' : <Spinner color="default" size="sm" />
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