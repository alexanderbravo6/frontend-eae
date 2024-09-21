'use client'
import MenuIndex from '@/modules/Menu/Components/MenuIndex'
import Breadcrumb from '@/shared/Components/Breadcrumb'
import TemplateBaseSearch from '@/shared/Components/Templates/TemplateBaseSearch'
import React from 'react'
const itemBreadCrumbs = [
  {
    href: '/',
    name: 'Inicio'
  },
  {
    href: '/seguridad/menu',
    name: 'Menu'
  }
]
function MenuPage() {
  const handleSearch = () => {
    console.log('Buscando...')
  }
  return (
    <>
      <div className='mb-4 w-full px-6 h-10 flex justify-between items-center bg-[#338EF7] rounded-md '>
        <h1 className='text-white font-thin md:text-[1.1rem]  text-[12px] '>GESTIÓN DE MENÚ</h1>
        <h2 className='text-white font-thin md:block hidden text-[1.1rem] '>
          <Breadcrumb items={itemBreadCrumbs} />
        </h2>
      </div>
      <section className='w-full '>

        <TemplateBaseSearch handleSearch={handleSearch} >
          <section className="grid gap-6 mb-6 mt-3  md:grid-cols-2 grid-cols-1 ">
            <div className="col-span-1">
              <label htmlFor="nombre_search" className="block mb-2 text-xs font-medium text-gray-900 dark:text-white">
                NOMBRE
              </label>
              <input type="text" id="nombre_search" className="bg-gray-50 border uppercase border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" />
            </div>
            <div className="col-span-1">
              <label htmlFor="ruta_search" className="block mb-2 text-xs font-medium text-gray-900 dark:text-white">
                RUTA
              </label>
              <input type="text" id="ruta_search" className="bg-gray-50 border uppercase border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" />

            </div>
          </section>
        </TemplateBaseSearch>

        <div className='w-full bg-white mt-5 mb-16   h-auto md:overflow-hidden overflow-scroll  rounded-lg  '>
          <MenuIndex />
        </div>
      </section>
    </>
  )
}

export default MenuPage