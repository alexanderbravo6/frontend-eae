
import Breadcrumb from '@/shared/Components/Breadcrumb';
import Link from 'next/link';
export const metadata = {
  title: "Inicio",
  description: "Sistema de distribución de horas lectivas para IESP/EESP",

};
const itemBreadcrumbs = [
  {
    href: '/home',
    name: 'Inicio'
  }
]
export default function page() {


  return (
    <>

      {/** Inicio - Cabecera para todos las pantallas internas */}
      <div className='mb-4 w-full px-6 h-10 flex justify-between items-center bg-[#338EF7] rounded-md '>
        <h1 className='text-white font-thin  text-[1.1rem] '>INICIO</h1>
        <h2 className='text-white font-thin md:block hidden text-[1.1rem] '><Breadcrumb items={itemBreadcrumbs} /> </h2>

      </div>
      {/** Fin - Cabecera para todos las pantallas internas */}
      <div className='grid md:grid-cols-2 grid-cols-1 gap-2 justify-items-center'>
        <div className="max-w-sm p-6 my-5 bg-white border border-gray-200 rounded-lg shadow ">
          <svg className="w-6 h-6 text-gray-800 " xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M12 6a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm-1.5 8a4 4 0 0 0-4 4c0 1.1.9 2 2 2h7a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-3Zm6.8-3.1a5.5 5.5 0 0 0-2.8-6.3c.6-.4 1.3-.6 2-.6a3.5 3.5 0 0 1 .8 6.9Zm2.2 7.1h.5a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-1.1l-.5.8c1.9 1 3.1 3 3.1 5.2ZM4 7.5a3.5 3.5 0 0 1 5.5-2.9A5.5 5.5 0 0 0 6.7 11 3.5 3.5 0 0 1 4 7.5ZM7.1 12H6a4 4 0 0 0-4 4c0 1.1.9 2 2 2h.5a6 6 0 0 1 3-5.2l-.4-.8Z" clipRule="evenodd" />
          </svg>
          <h5 className="mb-2 text-2xl mt-4 font-semibold tracking-tight text-gray-900 ">Gestión de Pruebas</h5>
          <p className="mb-3 font-normal text-gray-500 ">Módulo para realizar el registro de pruebas y la asignación de las preguntas y opciones correspondientes.. </p>
          <div className="flex gap-3">

            <Link href="/administracion/gestion-pruebas" className="inline-flex items-center text-blue-600 hover:underline">
              Ir al módulo
              <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
              </svg>
            </Link>
          </div>
        </div>
        <div className="max-w-sm p-6 my-5 bg-white border border-gray-200 rounded-lg shadow ">

          <svg className="w-6 h-6 text-gray-800 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 21a9 9 0 1 1 3-17.5m-8 6 4 4L19.3 5M17 14v6m-3-3h6" />
          </svg>
          <h5 className="my-2 text-2xl font-semibold tracking-tight text-gray-900 ">Gestión de Enunciados</h5>
          <p className="mb-3 font-normal text-gray-500 ">En este modulo se realiza el mantenimiento de inhtmlFormación de docentes nombrados.</p>
          <div className="flex gap-3">
            <Link href="#" className="inline-flex items-center text-blue-600 hover:underline">
              Ver manual de usuario
              <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
              </svg>
            </Link>
            <Link href="/distribucion" className="inline-flex items-center text-blue-600 hover:underline">
              Ir al módulo
              <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="max-w-sm p-6 my-5 bg-white border border-gray-200 rounded-lg shadow ">

          <svg className="w-6 h-6 text-gray-800 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 21a9 9 0 1 1 3-17.5m-8 6 4 4L19.3 5M17 14v6m-3-3h6" />
          </svg>
          <h5 className="my-2 text-2xl font-semibold tracking-tight text-gray-900 ">Gestión de Matrículas</h5>
          <p className="mb-3 font-normal text-gray-500 ">En este modulo podrá realizar la carga de matriculas de estudiantes que podrán realizar la evaluación.</p>
          <div className="flex gap-3">

            <Link href="/distribucion" className="inline-flex items-center text-blue-600 hover:underline">
              Ir al módulo
              <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
