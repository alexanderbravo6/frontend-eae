'use client'
import LoadingErrorCard from '@/shared/Components/LoadingErrorCard'
import { TableSkeleton } from '@/shared/Components/Skeletons'
import TemplateBaseTable from '@/shared/Components/Templates/TemplateBaseTable'
import React from 'react'
import { MatriculaConstants } from '../../Constants/MatriculaConstants'


const matriculas = {
    error: false,
    isLoading: false,
    data: [
        {
            id: 1,
            region: "LIMA METROPOLITANA",
            institucion: "IEP SAN JUAN BAUTISTA",
            primerApellido: "MOSCOL",
            numeroDocumento: "12345678",
            segundoApellido: "BRAVO",
            nombres: "BRYAN",
            fechaNacimiento: "2024-04-12",
            especialidad: "EDUCACIÓN INICIAL",
            idCiclo: 1,
            fechaNacimiento: "2024-04-12",
            descripcionPeriodoAcademico: "2024-I",
            idPeriodoAcademico: 1,
            tipoDocumento: 1,
            idInstitucion: 1,
            idEspecialidad: 1

        }
    ]
}
function MatriculaTable() {
    if (matriculas.error) return <LoadingErrorCard />
    if (matriculas.isLoading) return <TableSkeleton />
    return (
        <>
            <TemplateBaseTable datos={matriculas?.data} columns={MatriculaConstants} total={matriculas?.data.length} />
        </>
    )
}

export default MatriculaTable