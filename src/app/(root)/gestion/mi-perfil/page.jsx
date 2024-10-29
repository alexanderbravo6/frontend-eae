import PerfilForm from '@/modules/Perfil/Components/PerfilForm'
import Breadcrumb from '@/shared/Components/Breadcrumb'
import React from 'react'
const itemBreadCrumbs = [
  {
    href: '/',
    name: 'Inicio'
  },
  {
    href: '/',
    name: 'Seguridad'
  },
  {
    href: '/seguridad/perfil',
    name: 'Perfil'
  }
]
function PerfilPage() {
  return (
    <>
      <div className='mb-4 w-full px-6 h-10 flex justify-between items-center bg-[#338EF7] rounded-md '>
        <h1 className='text-white  md:text-[1.1rem]  text-[12px] '>MI PERFIL</h1>
        <h2 className='text-white  md:block hidden text-[1.1rem] '><Breadcrumb items={itemBreadCrumbs} /> </h2>
      </div>
      <div className='w-full py-6 px-9'>
        <PerfilForm />
      </div>

    </>
  )
}

export default PerfilPage