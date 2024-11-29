import { usePruebaService } from '@/modules/Pruebas/Hooks/usePruebaService'
import LoadingSpinner from '@/shared/Components/Loaders/LoadingSpinner';
import TemplateAlert from '@/shared/Components/Templates/TemplateAlert';
import { useSession } from 'next-auth/react';
import React, { useState } from 'react'
import PromedioRegionalBar from './Charts/PromedioRegionalBar';

function PromedioRegional({ idCiclo }) {
    const { data: session } = useSession();
    const [idPrueba, setIdPrueba] = useState(null);
    const { FetchPruebas } = usePruebaService();
    const pruebas = FetchPruebas(session?.user.anio);
    if (pruebas?.isLoading) return <LoadingSpinner />
    if (pruebas?.error) return <TemplateAlert type="error" message="Error al cargar las pruebas" />

    if (pruebas?.data?.data?.filter((prueba) => prueba.idCiclo === idCiclo).length == 0) return <TemplateAlert type="Attention" message="No hay pruebas registradas" />
    return (
        <>
            <section>
                <label htmlFor="pruebas" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Selecciona Prueba:</label>
                <select id="pruebas"
                    onClick={(e) => setIdPrueba(e.target.value)}
                    className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block max-w-7xl p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value="">Seleccionar</option>
                    {
                        pruebas.isLoading ? (
                            <option>Cargando...</option>
                        ) : pruebas.error ? (
                            <option>Error al cargar las pruebas</option>
                        ) : (
                            pruebas?.data?.data?.filter((prueba) => prueba.idCiclo === idCiclo)
                                .map((prueba) => (
                                    <option key={prueba.id} value={prueba.id}>
                                        {prueba.nombre}
                                    </option>
                                ))
                        )
                    }
                </select>
            </section>
            <section className='mt-6 px-10'>
                <PromedioRegionalBar
                    idPrueba={idPrueba}
                />
            </section>

        </>
    )
}

export default PromedioRegional