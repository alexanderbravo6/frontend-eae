'use client'
import React from 'react'
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import TemplateAlert from '@/shared/Components/Templates/TemplateAlert';
import { toast } from 'react-toastify';

import { Button, Spinner } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import NumberField from '@/shared/Components/Form/Fields/NumberField';
import InputField from '@/shared/Components/Form/Fields/InputField';
import { useAuthService } from '../../Hooks/useAuthService';



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
        const dni = document.getElementById('numeroDocumento').value

        if (dni === '') {
            toast.error('Ingrese un número de documento')
            return
        }
        if (dni.length < 8) {
            toast.error('El número de documento debe tener al menos 8 caracteres')
            return
        }
        //limpiar campos
        setErrorValidation([])
        setValidarEstudiante(true)
        reset()

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
                        Sección de Gestión
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
                            <label htmlFor="numeroDocumento" className="block uppercase mb-2 text-xs font-medium text-gray-900 dark:text-white">NÚMERO DE DOCUMENTO</label>
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

                            estudiante.error ? <p className='text-red-500' >{estudiante?.error?.response?.data?.errors[0]}</p> :
                            estudiante.isLoading ? <Spinner color="default" size="sm" /> :
                                !estudiante?.data ? null :
                                    (
                                        <div className="grid gap-6 mb-6 md:grid-cols-2">
                                            <div>
                                                <label disabled htmlFor="numeroDocumentoDisabled" className="block uppercase mb-2 text-xs font-medium text-gray-900 dark:text-white">NÚMERO DE DOCUMENTO</label>
                                                <input type="text" disabled defaultValue={estudiante?.data?.data?.numeroDocumento} id="numeroDocumentoDisabled" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 disabled:bg-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />

                                            </div>
                                            <div>
                                                <label htmlFor="apellidoPaterno" className="block uppercase mb-2 text-xs font-medium text-gray-900 dark:text-white">APELLIDO PATERNO</label>
                                                <input type="text" defaultValue={estudiante?.data?.data?.apellidoPaterno} disabled id="apellidoPaterno" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 disabled:bg-gray-200 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                            </div>
                                            <div>
                                                <label htmlFor="apellidoMaterno" className="block uppercase mb-2 text-xs font-medium text-gray-900 dark:text-white">APELLIDO MATERNO</label>
                                                <input type="text" disabled defaultValue={estudiante?.data?.data?.apellidoMaterno} id="apellidoMaterno" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 disabled:bg-gray-200 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                            </div>
                                            <div>
                                                <label htmlFor="nombres" className="block uppercase mb-2 text-xs font-medium text-gray-900 dark:text-white">NOMBRES</label>
                                                <input type="text" defaultValue={estudiante?.data?.data?.nombres} disabled id="nombres" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 disabled:bg-gray-200 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                            </div>
                                            <div>
                                                <InputField
                                                    type='email'
                                                    id="correo"
                                                    label="correo"
                                                    isRequired={true}
                                                    uppercase={false}
                                                    register={register}
                                                    error={errors.correo}
                                                />

                                            </div>
                                            <div>
                                                <NumberField
                                                    id="celular"
                                                    label="celular"
                                                    isRequired={true}
                                                    maxLength={9}
                                                    minLength={9}
                                                    register={register}
                                                    error={errors.celular}
                                                />
                                            </div>
                                            <div className='col-span-2' >
                                                <InputField
                                                    type='password'
                                                    id="clave"
                                                    label="contraseña"
                                                    isRequired={true}
                                                    uppercase={false}
                                                    register={register}
                                                    error={errors.clave}
                                                />

                                                <br />
                                                <span className='text-gray-500'>
                                                    La contraseña debe contener como mínimo un caracter especial (@#$%*,-.()/{ }%?¿!), una mayúscula, una minúscula, un número y una longitud entre 8 y 30 caracteres.
                                                </span>

                                            </div>
                                        </div>
                                    )
                    }

                </section>
                <div className="flex gap-3 items-start justify-start w-full
                ">

                    {

                        isSubmitting ?
                            <span
                                disabled={isSubmitting}
                                className="w-full disabled:bg-[#338EF7] max-w-32  cursor-no-drop text-white border border-[#006FEE] bg-[#338EF7] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2    "
                            >
                                {
                                    !isSubmitting ? 'Registrarme' : <Spinner color="default" size="sm" />
                                }

                            </span>
                            :
                            <button
                                disabled={isSubmitting}
                                className="w-full disabled:bg-[#338EF7] max-w-32  text-white hover:text-white border border-[#006FEE] bg-[#006FEE] hover:bg-[#338EF7] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2    "
                            >
                                Registrarme
                            </button>
                    }
                    <a
                        href='/auth/iniciar-sesion'
                        className="w-full disabled:bg-[#dddde0] max-w-32  text-black hover:text-black border border-[#dddde0] bg-[#dddde0] hover:bg-[#dddde0] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2    "
                    >
                        Regresar
                    </a>
                </div>
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

    )

}

export default RegistroEstudianteForm
