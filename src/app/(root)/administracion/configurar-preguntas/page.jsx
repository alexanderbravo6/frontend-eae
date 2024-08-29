
import PreguntaIndex from '@/modules/Pruebas/Components/PreguntaIndex';
import Breadcrumb from '@/shared/Components/Breadcrumb'
import React from 'react'

const itemBreadcrumbs = [
    {
        href: '/administracion/gestion-pruebas',
        name: 'Configurar Preguntas'
    }
]
export const metadata = {
    title: "Configurar Preguntas",
    description: "Gestión de pruebas de la evaluación de aprendizaje de los estudiantes",

};
function ConfiguraPreguntasPage() {
    return (
        <>
            <div className='mb-4 w-full px-6 h-10 flex justify-between items-center bg-[#338EF7] rounded-md '>
                <h1 className='text-white font-thin  text-[1.1rem] '>CONFIGURAR PREGUNTAS</h1>
                <h2 className='text-white font-thin md:block hidden text-[1.1rem] '><Breadcrumb items={itemBreadcrumbs} /> </h2>

            </div>
            <PreguntaIndex />
        </>
    )
}

export default ConfiguraPreguntasPage