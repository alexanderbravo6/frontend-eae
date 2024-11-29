import React from 'react'
import InstitucionTable from './Tables/InstitucionTable'
import TemplateSearch from '@/shared/Components/Templates/TemplateSearch'
import { InstitucionesSelect, RegionesSelect } from '@/shared/Components/Form/Selects'
import { useResultadoInstitucional } from '../Providers/ResultadoInstitucionalProvider'
import { useGlobal } from '@/shared/Providers/GlobalProvider'
import { useUtils } from '@/shared/Hooks/useUtils'

function ResultadoInstitucionalIndex() {

    const { formValues, handleCleanSearch, handleSearch, handleInputChange, query } = useResultadoInstitucional()
    const { ValidarPermisos } = useUtils()

    return (
        <>
            {
                !ValidarPermisos('RESINS', 'CON') ? null : (
                    <div className='mb-5'>
                        <TemplateSearch handleSearch={handleSearch} handleCleanSearch={handleCleanSearch} >
                            <section className="grid gap-6 mb-6 mt-3 md:grid-cols-4 grid-cols-2">
                                <div className="col-span-1">
                                    <label htmlFor="region" className="block mb-2 text-xs font-medium text-gray-900 dark:text-white">
                                        Región
                                    </label>
                                    <RegionesSelect id="idRegion" defaultValue={formValues.idRegion}
                                        onChange={handleInputChange} />
                                </div>
                                <div className="col-span-1">
                                    <label htmlFor="codigoModular" className="block mb-2 text-xs font-medium text-gray-900 dark:text-white">
                                        CÓDIGO MODULAR
                                    </label>
                                    <input
                                        type="text"
                                        id="codigoModular"
                                        defaultValue={formValues.codigoModular}
                                        onChange={handleInputChange}
                                        className="bg-gray-50 border uppercase border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    />
                                </div>
                                <div className="col-span-1">
                                    <label htmlFor="nombre" className="block mb-2 text-xs font-medium text-gray-900 dark:text-white">
                                        NOMBRE DE INSTITUCIÓN
                                    </label>
                                    <input
                                        type="text"
                                        id="nombre"
                                        defaultValue={formValues.nombre}
                                        onChange={handleInputChange}
                                        className="bg-gray-50 border uppercase border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    />
                                </div>

                                <div className="col-span-1">
                                    <label htmlFor="institucion" className="block mb-2 text-xs font-medium text-gray-900 dark:text-white">
                                        INSTITUCIÓN
                                    </label>
                                    <InstitucionesSelect id="idInstitucion" defaultValue={formValues.idInstitucion}
                                        onChange={handleInputChange} />
                                </div>
                            </section>
                        </TemplateSearch>
                    </div>
                )
            }

            <section>
                <InstitucionTable query={query} />
            </section>
        </>

    )
}

export default ResultadoInstitucionalIndex