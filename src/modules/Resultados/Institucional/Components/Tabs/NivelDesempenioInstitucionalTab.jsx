import NivelDesempenioCard from '@/modules/Resultados/Shared/Cards/NivelDesempenioCard'
import { Tab, Tabs } from '@nextui-org/react'
import React from 'react'

import { useSession } from 'next-auth/react';
import { NivelDesempenioSkeleton } from '@/shared/Components/Skeletons/Skeletons';
import TemplateAlert from '@/shared/Components/Templates/TemplateAlert';
import { useResultadoInstitucionalService } from '../../Hooks/useResultadoInstitucionalService';
import NivelDesempenioInstitucionalCard from '../Cards/NivelDesempenioInstitucionalCard';

function NivelDesempenioInstitucionalTab({ idCiclo, row }) {
    const { data: session } = useSession();

    const { FetchNivelDesempenioInstitucional } = useResultadoInstitucionalService();
    const resultados = FetchNivelDesempenioInstitucional(session?.user?.anio, idCiclo, row.id);
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
                                            <NivelDesempenioInstitucionalCard key={i} data={prueba} />
                                        )) : <TemplateAlert message='No se encontraron resultados dentro de esta prueba' type={"Attention"} />
                                }

                            </section>
                        </Tab>
                    ))
                }




            </Tabs>
        </>
    )
}

export default NivelDesempenioInstitucionalTab