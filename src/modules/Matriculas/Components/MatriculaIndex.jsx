import React from 'react'
import RegistrarMatriculaModal from './Modals/RegistrarMatriculaModal'
import MatriculaTable from './Tables/MatriculaTable'
import { useMatricula } from '../Providers/MatriculaProvider'
import TemplateSearch from '@/shared/Components/Templates/TemplateSearch'
import CargaMasivaMatriculaModal from './Modals/CargaMasivaMatriculaModal'
import { useUtils } from '@/shared/Hooks/useUtils'


const MatriculaIndex = () => {
    const { formValues, handleCleanSearch, handleSearch, handleInputChange, query, utils } = useMatricula()
    const { ValidarPermisos } = useUtils()
    if (!ValidarPermisos('GESMAT', 'CON')) return null
    return (
        <>
            <div className='mb-5'>
                {
                    ValidarPermisos('GESMAT', 'CON') &&
                    <TemplateSearch handleSearch={handleSearch} handleCleanSearch={handleCleanSearch} >
                        <section className="grid gap-6 mb-6 mt-3 md:grid-cols-3 grid-cols-2">
                            <div className="col-span-1">
                                <label htmlFor="numeroDocumento" className="block mb-2 text-xs font-medium text-gray-900 dark:text-white">
                                    NUMERO DE DOCUMENTO
                                </label>
                                <input
                                    type="text"
                                    id="numeroDocumento"
                                    value={formValues.numeroDocumento}
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
                                    value={formValues.primerApellido}
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
                                    value={formValues.segundoApellido}
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
                            <div className="col-span-1">
                                <label htmlFor="idCiclo" className="block mb-2 text-xs font-medium text-gray-900 dark:text-white">
                                    CICLO
                                </label>
                                <select id="idCiclo"
                                    value={formValues.idCiclo}
                                    onChange={handleInputChange}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    {utils && utils.isLoading ? (
                                        <option value="">Cargando...</option>
                                    ) : (
                                        <>
                                            <option value="">Seleccionar</option>
                                            {
                                                utils?.data?.data?.ciclos.map((item, i) => (
                                                    <option key={i} value={item.id}> {item.descripcion}</option>
                                                ))
                                            }
                                        </>
                                    )
                                    }
                                </select>
                            </div>
                            <div className="col-span-1">
                                <label htmlFor="idPeriodoAcademico" className="block mb-2 text-xs font-medium text-gray-900 dark:text-white">
                                    PERIODO ACADÉMICO
                                </label>
                                <select id="idPeriodoAcademico"
                                    value={formValues.idPeriodoAcademico}
                                    onChange={handleInputChange}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    {utils && utils.isLoading ? (
                                        <option value="">Cargando...</option>
                                    ) : (
                                        <>
                                            <option value="">Seleccionar</option>
                                            {
                                                utils?.data?.data?.periodosAcademicos.map((item, i) => (
                                                    <option key={i} value={item.id}> {item.descripcion}</option>
                                                ))
                                            }
                                        </>
                                    )
                                    }
                                </select>
                            </div>
                        </section>
                    </TemplateSearch>
                }

            </div>
            <section>
                <div className='flex w-full gap-4'>
                    <RegistrarMatriculaModal />
                    <CargaMasivaMatriculaModal />
                </div>
                <MatriculaTable query={query} />
            </section>
        </>
    )
}

export default MatriculaIndex