'use client'
import IndexMenu from '@/modules/Menu/Components/IndexMenu'
import Breadcrumb from '@/shared/Components/Breadcrumbs/Breadcrumb'
import TemplateDeniedPermission from '@/shared/Components/Templates/TemplateDeniedPermission'
import TemplateSearch from '@/shared/Components/Templates/TemplateSearch'
import { useGlobal } from '@/shared/Providers/GlobalProvider'
import React from 'react'
const itemBreadCrumbs = [

  {
    href: '/mantenimiento/menu',
    name: 'Menu'
  }
]
function MenuPage() {
  const { accesoActual } = useGlobal();
  const accesoPermitido = accesoActual[0]?.menus.filter(permiso => permiso?.codigo === "GESMEN").length > 0;
  if (!accesoPermitido) { return <TemplateDeniedPermission /> }

  return (
    <>
      <div className='mb-4 w-full px-6 h-10 flex justify-between items-center bg-[#338EF7] rounded-md '>
        <h1 className='text-white font-thin md:text-[1.1rem]  text-[12px] '>GESTIÓN DE MENÚ</h1>
        <h2 className='text-white font-thin md:block hidden text-[1.1rem] '>
          <Breadcrumb items={itemBreadCrumbs} />
        </h2>
      </div>
      <section className='w-full '>



        <div className='w-full bg-white mt-5 mb-16   h-auto md:overflow-hidden overflow-scroll  rounded-lg  '>
          <IndexMenu />
        </div>
      </section>
    </>
  )
}

export default MenuPage