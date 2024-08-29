'use client'
import LoadingErrorCard from '@/shared/Components/LoadingErrorCard'
import { TableSkeleton } from '@/shared/Components/Skeletons'
import TemplateBaseTable from '@/shared/Components/Templates/TemplateBaseTable'
import React from 'react'
import { pruebaConstants } from '../../Constants/PruebaConstants'

const pruebas = {
    error: false,
    isLoading: false,
    data: [
        {
            id: 1,
            nombrePrueba: "PRUEBA DE COMPRENSIÓN LECTORA (PRIMER CICLO)",
            idPrograma: 2,
            idPeriodoAcademico: 1,
            idCiclo: 1,
            ciclo: "PRIMER CICLO",
            fecha: "2024-04-12",
            horaInicio: "08:00",
            horaFin: "16:00",
            duracion: 200,

        }
    ]
}
function PruebaTable() {
    if (pruebas.error) return <LoadingErrorCard />
    if (pruebas.isLoading) return <TableSkeleton />
    return (
        <>
            <TemplateBaseTable datos={pruebas?.data} columns={pruebaConstants} total={pruebas?.data.length} />
        </>
    )
}

export default PruebaTable