import React from 'react'
import TemplateBaseSearch from '@/shared/Components/Templates/TemplateBaseSearch'
import { useResultadoEstudiante } from '../Providers/ResultadoEstudianteProvider'
import ResultadoEstudianteTable from './Tables/ResultadoEstudianteTable'


const ResultadoEstudianteIndex = () => {
    const { formValues, handleCleanSearch, handleSearch, handleInputChange, query, utils } = useResultadoEstudiante()
    return (
        <>
            <div className='mb-5'>
                <TemplateBaseSearch handleSearch={handleSearch} handleCleanSearch={handleCleanSearch} >
                    <section className="grid gap-6 mb-6 mt-3 md:grid-cols-3 grid-cols-2">
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
                            <label htmlFor="idEspecialidad" className="block mb-2 text-xs font-medium text-gray-900 dark:text-white">
                                ESPECIALIDAD
                            </label>
                            <select id="idEspecialidad" value={formValues.idEspecialidad}
                                onChange={handleInputChange}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg block w-full p-2.5  ">
                                {utils && utils.isLoading ? (
                                    <option value="">Cargando...</option>
                                ) : (
                                    <>
                                        <option value="">Seleccionar</option>
                                        {
                                            utils?.data?.data.especialidades.map((item, i) => (
                                                <option key={i} value={item.id}> {item.descripcion}</option>
                                            ))
                                        }
                                    </>
                                )
                                }
                            </select>
                        </div>
                    </section>
                </TemplateBaseSearch>
            </div>
            <section>

                <ResultadoEstudianteTable query={query} />
            </section>
        </>
    )
}

export default ResultadoEstudianteIndex