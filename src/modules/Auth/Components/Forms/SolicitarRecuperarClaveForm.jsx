'use client'
import React from 'react'
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import TemplateAlert from '@/shared/Components/Templates/TemplateAlert';
import { toast } from 'react-toastify';
import { useAuthService } from '../../Hooks/useAuthService';
import { Button, Spinner } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import InputField from '@/shared/Components/Form/Fields/InputField';



function SolicitarRecuperarClaveForm() {


    const { solicitarRecuperarClave } = useAuthService()
    const router = useRouter()
    const [errorValidation, setErrorValidation] = useState('');

    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();


    const form = handleSubmit(async (data) => {
        try {
            const response = await solicitarRecuperarClave(data)
            if (response.success === true) {
                setErrorValidation([])
                toast.success(response.messages[0])
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
                <p className="text-gray-400 text-left w-full">Recuperar Contraseña</p>

                <section className="mb-5 w-full ">
                    {
                        errorValidation.length === 0 ? null : (
                            <section>
                                <TemplateAlert message={errorValidation} type={'errorList'} />
                            </section>
                        )
                    }
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
                </section>
                <div className="flex gap-3 items-start justify-start w-full">

                    {

                        isSubmitting ?
                            <span
                                disabled={isSubmitting}
                                className="w-full disabled:bg-[#338EF7] max-w-32  cursor-no-drop text-white border border-[#006FEE] bg-[#338EF7] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2    "
                            >
                                {
                                    !isSubmitting ? 'Recuperar' : <Spinner color="default" size="sm" />
                                }

                            </span>
                            :
                            <button
                                disabled={isSubmitting}
                                className="w-full disabled:bg-[#338EF7] max-w-32  text-white hover:text-white border border-[#006FEE] bg-[#006FEE] hover:bg-[#338EF7] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2    "
                            >
                                Recuperar
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

export default SolicitarRecuperarClaveForm
