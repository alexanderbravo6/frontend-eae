
import Breadcrumb from '@/shared/Components/Breadcrumbs/Breadcrumb';
import ModuloDashboard from '@/shared/Components/Dashboards/ModuloDashboard';
import ResultadoDashboard from '@/shared/Components/Dashboards/ResultadoDashboard';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
export const metadata = {
  title: "Inicio",
  description: "Sistema de distribución de horas lectivas para IESP/EESP",

};
const itemBreadcrumbs = [
  {
    href: '/gestion',
    name: 'Inicio'
  }
]
export default function InicioPage() {


  return (
    <>
      <div className='mb-4 w-full px-6 h-10 flex justify-between items-center bg-[#338EF7] rounded-md '>
        <h1 className='text-white font-thin  text-[1.1rem] '>INICIO</h1>
        <h2 className='text-white font-thin md:block hidden text-[1.1rem] '><Breadcrumb items={itemBreadcrumbs} /> </h2>
      </div>
      <ModuloDashboard />
      <ResultadoDashboard />
    </>
  )
}
