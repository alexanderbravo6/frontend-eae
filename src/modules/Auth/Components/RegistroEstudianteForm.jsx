'use client'
import React from 'react'
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import TemplateAlert from '@/shared/Components/Templates/TemplateAlert';
import { toast } from 'react-toastify';
import { useAuthService } from '../Hooks/useAuthService';
import { Button, Spinner } from '@nextui-org/react';
import { useRouter } from 'next/navigation';



function RegistroEstudianteForm() {


    const { registrarEstudiante, ValidarEstudiante } = useAuthService()
    const router = useRouter()
    const [errorValidation, setErrorValidation] = useState('');
    const [numeroDocumento, setNumeroDocumento] = useState('');
    const { register, handleSubmit, getValues, setValue, reset, formState: { errors, isSubmitting } } = useForm();
    const [validarEstudiante, setValidarEstudiante] = useState(false)
    const estudiante = ValidarEstudiante(numeroDocumento)
    const clearFields = () => {
        setErrorValidation([])
        setValidarEstudiante(false)
        setNumeroDocumento('')
 
        reset()
    }
    const validateStudent = async () => {
        //limpiar campos
        setErrorValidation([])
        setValidarEstudiante(true)
        reset()
        const dni = document.getElementById('numeroDocumento').value
        setNumeroDocumento(dni)

    }
    const form = handleSubmit(async (data) => {
        const request = {
            ...data,
            numeroDocumento: numeroDocumento
        }

        try {
            const response = await registrarEstudiante(request)
            if (response.success === true) {
                setErrorValidation([])
                clearFields()
                toast.success("Estudiante registrado correctamente")
                router.push('/auth/iniciar-sesion')
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
        } catch (error) {
            console.log(error)
        }
    })
    return (
        <>
            <form onSubmit={form} className="max-w-2xl mb-[6%]  gap-5 flex flex-col md:mx-auto mx-[10%] h-[80%] md:w-full w-[50%] items-center justify-center">

                <div className="mb-6 text-left w-full">
                    <h1 className=" font-extralight mb-3 text-xl md:text-3xl text-black">
                        <strong className="font-bold">
                            Sistema de evaluación de los aprendizajes de los estudiantes
                        </strong> de IESP-EESP Públicas
                    </h1>
                    <p className="font-extralight text-[#454545] ">
                        Módulo administrativo
                    </p>
                </div>
                <p className="text-gray-400 text-left w-full">Formulario de registro</p>

                <section className="mb-5 w-full ">
                    {
                        errorValidation.length === 0 ? null : (
                            <section>
                                <TemplateAlert message={errorValidation} type={'errorList'} />
                            </section>
                        )
                    }
                    <div className="grid gap-6 mb-6 items-end md:grid-cols-2">
                        <div>
                            <label htmlFor="numeroDocumento" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">NÚMERO DE DOCUMENTO</label>
                            <input type="text" disabled={validarEstudiante} id="numeroDocumento" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 disabled:bg-gray-300  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </div>
                        <div className='flex gap-3'>
                            <Button onClick={validateStudent} color="primary">
                                Validar
                            </Button>
                            <Button onClick={clearFields} color="danger">
                                Limpiar
                            </Button>
                        </div>
                    </div>
                    {
                        estudiante &&

                            estudiante.error ? <p className='text-red-500' > El estudiante no cuenta con alguna participación en la EAE.</p> :
                            estudiante.isLoading ? <Spinner color="default" size="sm" /> :
                                !estudiante?.data ? null :
                                    (
                                        <div className="grid gap-6 mb-6 md:grid-cols-2">
                                            <div>
                                                <label disabled htmlFor="numeroDocumentoDisabled" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">NÚMERO DE DOCUMENTO</label>
                                                <input type="text" disabled defaultValue={estudiante?.data?.data?.numeroDocumento} id="numeroDocumentoDisabled" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />

                                            </div>
                                            <div>
                                                <label htmlFor="apellidoPaterno" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">APELLIDO PATERNO</label>
                                                <input type="text" defaultValue={estudiante?.data?.data?.apellidoPaterno} disabled id="apellidoPaterno" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                            </div>
                                            <div>
                                                <label htmlFor="apellidoMaterno" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">APELLIDO MATERNO</label>
                                                <input type="text" disabled defaultValue={estudiante?.data?.data?.apellidoMaterno} id="apellidoMaterno" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                            </div>
                                            <div>
                                                <label htmlFor="nombres" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">NOMBRES</label>
                                                <input type="text" defaultValue={estudiante?.data?.data?.nombres} disabled id="nombres" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                            </div>
                                            <div>
                                                <label htmlFor="correo" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">CORREO</label>
                                                <input type="email"
                                                    {...register('correo', {
                                                        required: {
                                                            value: true,
                                                            message: 'El campo correo es requerido'
                                                        },
                                                    })}
                                                    id="correo" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                                {
                                                    errors.correo && (
                                                        <span className="text-red-500 text-xs">{errors.correo.message}</span>
                                                    )
                                                }
                                            </div>
                                            <div>
                                                <label htmlFor="celular" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">CELULAR</label>
                                                <input
                                                    {...register('celular', {
                                                        required: {
                                                            value: true,
                                                            message: 'El campo celular es requerido'
                                                        },
                                                        maxLength: {
                                                            value: 9,
                                                            message: 'El campo celular debe tener 9 dígitos'
                                                        }
                                                    })}
                                                    type="number" id="celular" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                                {
                                                    errors.celular && (
                                                        <span className="text-red-500 text-xs">{errors.celular.message}</span>
                                                    )
                                                }
                                            </div>
                                            <div className='col-span-2' >
                                                <label htmlFor="clave" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">CONTRASEÑA</label>
                                                <input type="password"
                                                    {...register('clave', {
                                                        required: {
                                                            value: true,
                                                            message: 'El campo contraseña es requerido'
                                                        },
                                                    })}
                                                    id="clave" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />

                                                {
                                                    errors.clave && (
                                                        <span className="text-red-500 text-xs">{errors.clave.message}</span>
                                                    )
                                                }
                                                <br />
                                                <span className='text-gray-500'>
                                                    La contraseña debe contener como mínimo un caracter especial (@#$%*,-.()/{ }%?¿!), una mayúscula, una minúscula, un número y una longitud entre 8 y 30 caracteres.
                                                </span>

                                            </div>
                                        </div>
                                    )
                    }

                </section>

                {

                    isSubmitting ?
                        <span
                            disabled={isSubmitting}
                            className="w-full disabled:bg-[#338EF7]  cursor-no-drop text-white border border-[#006FEE] bg-[#338EF7] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2    "
                        >
                            {
                                !isSubmitting ? 'Registrarme' : <Spinner color="default" size="sm" />
                            }

                        </span>
                        :
                        <button
                            disabled={isSubmitting}
                            className="w-full disabled:bg-[#338EF7]  text-white hover:text-white border border-[#006FEE] bg-[#006FEE] hover:bg-[#338EF7] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2    "
                        >
                            Registrarme
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

    )

}

export default RegistroEstudianteForm
