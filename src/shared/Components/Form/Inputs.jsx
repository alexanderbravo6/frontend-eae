
import { useSession } from 'next-auth/react'
import React, { useState } from 'react'
import { EyeFilledIcon, EyeSlashFilledIcon } from '../Icons'

export const ProgramasInput = ({ value, setValue }) => {
    const { data: session } = useSession()
    const programas = FetchProgramasByInstitucion(session?.user?.idInstitucionActiva)

    return (
        <>
            <label htmlFor="programas" className="block mb-2 text-xs font-medium text-gray-900 ">PROGRAMAS</label>
            <select id="programas" defaultValue={value}
                onChange={(e) => setValue(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg block w-full p-2.5  ">
                {programas && programas.isLoading ? (
                    <option value="0">Cargando...</option>
                ) : (
                    <>
                        <option value="0">Seleccionar</option>
                        {
                            programas?.data?.data.map(programa => (
                                <option key={programa.ID} value={programa.ID}> {programa.Programa}</option>
                            ))
                        }
                    </>
                )
                }
            </select>
        </>
    )
}
export const PassworInput = ({ value, register }) => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => setIsVisible(!isVisible);

    return (
        <>
            <div className='flex gap-3'>
                <input type={isVisible ? "text" : "password"}
                    {...register('clave', {

                        required: {
                            value: true,
                            message: 'El campo contraseña es requerido'
                        },
                    })}
                    id="contraseña" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" defaultValue={value} placeholder="*********" required />
                <button className="focus:outline-none" type="button" onClick={toggleVisibility} aria-label="toggle password visibility">
                    {isVisible ? (
                        <EyeSlashFilledIcon />
                    ) : (
                        <EyeFilledIcon />
                    )}
                </button>
            </div>
        </>
    )
}
export const CargosInput = ({ value, setValue }) => {
    return (
        <>
            <label htmlFor="ciclos" className="block mb-2 text-xs font-medium text-gray-900 ">CICLO</label>
            <select id="ciclos" defaultValue={value}
                onChange={(e) => setValue(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg block w-full p-2.5  ">
                <option value="0">Seleccionar</option>
                {
                    Ciclos.map(ciclo => (
                        <option key={ciclo.id} value={ciclo.id}> {ciclo.nombre}</option>
                    ))
                }
            </select>
        </>
    )
}
