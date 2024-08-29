
import React from 'react'
import RegistrarMatriculaModal from './Modals/RegistrarMatriculaModal'
import MatriculaTable from './Tables/MatriculaTable'
import MatriculaMasivaModal from './Modals/MatriculaMasivaModal'

const MatriculaIndex = () => {
    return (
        <section>
            <div className='flex w-full gap-4'>
                <RegistrarMatriculaModal />
                <MatriculaMasivaModal />
            </div>
            <MatriculaTable />
        </section>
    )
}

export default MatriculaIndex