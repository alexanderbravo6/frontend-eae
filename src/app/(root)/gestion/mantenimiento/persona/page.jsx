'use client'


import IndexPersona from '@/modules/Persona/Components/IndexPersona'
import Breadcrumb from '@/shared/Components/Breadcrumbs/Breadcrumb'
import TemplateDeniedPermission from '@/shared/Components/Templates/TemplateDeniedPermission'
import { useGlobal } from '@/shared/Providers/GlobalProvider'
import React from 'react'
const itemBreadCrumbs = [

  {
    href: '/mantenimiento/persona',
    name: 'Persona'
  }
]
function PersonaPage() {
  const { accesoActual } = useGlobal();
  const accesoPermitido = accesoActual[0]?.menus.filter(permiso => permiso?.codigo === "GESPER").length > 0;
  if (!accesoPermitido) { return <TemplateDeniedPermission /> }

  return (
    <>
      <div className='mb-4 w-full px-6 h-10 flex justify-between items-center bg-[#338EF7] rounded-md '>
        <h1 className='text-white font-thin md:text-[1.1rem]  text-[12px] '>GESTIÓN DE PERSONAS</h1>
        <h2 className='text-white font-thin md:block hidden text-[1.1rem] '>
          <Breadcrumb items={itemBreadCrumbs} />
        </h2>
      </div>
      <section className='w-full '>

        <div className='w-full bg-white mt-5 mb-16   h-auto md:overflow-hidden overflow-scroll  rounded-lg  '>
          <IndexPersona />
        </div>
      </section>
    </>
  )
}

export default PersonaPage