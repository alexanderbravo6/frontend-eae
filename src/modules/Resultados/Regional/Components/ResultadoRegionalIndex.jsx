import React from 'react'
import TemplateBaseSearch from '@/shared/Components/Templates/TemplateBaseSearch'
import { RegionesSelect } from '@/shared/Components/Form/Selects'
import { useResultadoRegional } from '../Providers/ResultadoRegionalProvider'
import RegionTable from './Tables/RegionTable'

function ResultadoRegionalIndex() {
    const { formValues, handleCleanSearch, handleSearch, handleInputChange, query } = useResultadoRegional()

    return (
        <>
            <div className='mb-5'>
                <TemplateBaseSearch handleSearch={handleSearch} handleCleanSearch={handleCleanSearch} >
                    <section className="grid gap-6 mb-6 mt-3 md:grid-cols-4 grid-cols-2">
                        <div className="col-span-1">
                            <label htmlFor="region" className="block mb-2 text-xs font-medium text-gray-900 dark:text-white">
                                Región
                            </label>
                            <RegionesSelect id="idRegion" defaultValue={formValues.idRegion}
                                onChange={handleInputChange} />
                        </div>

                    </section>
                </TemplateBaseSearch>
            </div>
            <section>
                <RegionTable query={query} />
            </section>
        </>

    )
}

export default ResultadoRegionalIndex