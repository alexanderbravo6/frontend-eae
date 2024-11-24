
import { Tab, Tabs } from '@nextui-org/react'
import React from 'react'

import { useSession } from 'next-auth/react';
import { NivelDesempenioSkeleton } from '@/shared/Components/Skeletons';
import TemplateBaseAlert from '@/shared/Components/Templates/TemplateBaseAlert';
import { useResultadoRegionalService } from '../../Hooks/useResultadoRegionalService';
import NivelDesempenioRegionalCard from '../Cards/NivelDesempenioRegionalCard';


function NivelDesempenioRegionalTab({ idCiclo, row }) {
    const { data: session } = useSession();

    const { FetchNivelDesempenioRegional } = useResultadoRegionalService();
    const resultados = FetchNivelDesempenioRegional(session?.user?.anio, idCiclo, row.id);
    if (resultados.isLoading) return <NivelDesempenioSkeleton />
    if (resultados.error) return <div>Error al cargar los datos</div>

    return (
        <>
            <Tabs placement={"start"} color='primary' aria-label="Options">

                {
                    resultados.data?.data?.map((item, index) => (
                        <Tab key={index} title={item.tipoPrueba}>
                            <section className=' flex flex-wrap gap-5'>
                                {
                                    item.pruebas.length > 0 ?
                                        item.pruebas.map((prueba, i) => (
                                            <NivelDesempenioRegionalCard key={i} data={prueba} />
                                        )) : <TemplateBaseAlert message='No se encontraron resultados dentro de esta prueba' type={"Attention"} />
                                }

                            </section>
                        </Tab>
                    ))
                }




            </Tabs>
        </>
    )
}

export default NivelDesempenioRegionalTab