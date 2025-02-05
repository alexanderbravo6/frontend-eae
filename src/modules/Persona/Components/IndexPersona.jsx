import React, { useState } from 'react'

import RegistrarPersonaModal from './Modals/RegistrarPersonaModal'
import PersonaTabla from './Tables/PersonaTable'
import { personaColumns } from '../Constants/PersonaConstants'
import TemplateSearch from '@/shared/Components/Templates/TemplateSearch'
import { usePersona } from '../Providers/PersonaProvider'


const IndexPersona = () => {

    const { formValues, handleCleanSearch, handleSearch, handleInputChange, query } = usePersona()

    return (
        <>
            <div className='mb-5'>
                <TemplateSearch handleSearch={handleSearch} handleCleanSearch={handleCleanSearch} >
                    <section className="grid gap-6 mb-6 mt-3 md:grid-cols-4 grid-cols-2">
                        <div className="col-span-1">
                            <label htmlFor="numeroDocumento" className="block mb-2 text-xs font-medium text-gray-900 dark:text-white">
                                NUMERO DE DOCUMENTO
                            </label>
                            <input
                                type="text"
                                id="numeroDocumento"
                                defaultValue={formValues.numeroDocumento}
                                onChange={handleInputChange}
                                className="bg-gray-50 border uppercase border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            />
                        </div>
                        <div className="col-span-1">
                            <label htmlFor="primerApellido" className="block mb-2 text-xs font-medium text-gray-900 dark:text-white">
                                APELLIDO PATERNO
                            </label>
                            <input
                                type="text"
                                id="primerApellido"
                                defaultValue={formValues.primerApellido}
                                onChange={handleInputChange}
                                className="bg-gray-50 border uppercase border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            />
                        </div>
                        <div className="col-span-1">
                            <label htmlFor="segundoApellido" className="block mb-2 text-xs font-medium text-gray-900 dark:text-white">
                                APELLIDO MATERNO
                            </label>
                            <input
                                type="text"
                                id="segundoApellido"
                                defaultValue={formValues.segundoApellido}
                                onChange={handleInputChange}
                                className="bg-gray-50 border uppercase border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            />
                        </div>
                        <div className="col-span-1">
                            <label htmlFor="nombres" className="block mb-2 text-xs font-medium text-gray-900 dark:text-white">
                                NOMBRES
                            </label>
                            <input
                                type="text"
                                id="nombres"
                                defaultValue={formValues.nombres}
                                onChange={handleInputChange}
                                className="bg-gray-50 border uppercase border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            />
                        </div>
                    </section>
                </TemplateSearch>
            </div>
            <section>
                <RegistrarPersonaModal />
                <PersonaTabla columns={personaColumns} query={query} />
            </section>

        </>
    )
}

export default IndexPersona