import EnunciadoIndex from '@/modules/Enunciados/Components/EnunciadoIndex'
import Breadcrumb from '@/shared/Components/Breadcrumb'
import React from 'react'
export const metadata = {
    title: "Gestión de Enunciados",
    description: "Gestión de enunciados de la evaluación de aprendizaje de los estudiantes",

};
const itemBreadcrumbs = [
    {
        href: '/administracion/gestion-enunciados',
        name: 'Gestión de Enunciados'
    }
]
function GestionEnunciadosPage() {


    return (
        <>
            <div className='mb-4 w-full px-6 h-10 flex justify-between items-center bg-[#338EF7] rounded-md '>
                <h1 className='text-white font-thin  text-[1.1rem] '>GESTIÓN DE ENUNCIADOS</h1>
                <h2 className='text-white font-thin md:block hidden text-[1.1rem] '><Breadcrumb items={itemBreadcrumbs} /> </h2>

            </div>
            <EnunciadoIndex />
        </>
    )
}

export default GestionEnunciadosPage