import EliminarMatriculaButton from "../Components/Buttons/EliminarMatriculaButton";
import ActualizarMatriculaModal from "../Components/Modals/ActualizarMatriculaModal";

export const matriculaColumns = [

    {
        header: 'REGIÓN',
        accessorKey: 'region',
        size: 40
    },
    {
        header: 'INSTITUCIÓN',
        accessorKey: 'institucion',
        size: 200
    },
    {
        header: 'N° DOCUMENTO',
        accessorKey: 'numeroDocumento',
        size: 20
    },
    {
        header: 'APELLIDO PATERNO',
        accessorKey: 'primerApellido',
        size: 100
    },
    {
        header: 'APELLIDO MATERNO',
        accessorKey: 'segundoApellido',
        size: 100
    },
    {
        header: 'NOMBRES',
        accessorKey: 'nombres',
        size: 100
    },
    {
        header: 'FECHA DE NACIMIENTO',
        accessorKey: 'fechaNacimiento',
        size: 40
    },
    {
        header: 'ESPECIALIDAD',
        accessorKey: 'especialidad',
        size: 300
    },
    {
        header: 'CICLO',
        accessorKey: 'descripcionCiclo',
        size: 100
    },
    {
        header: 'PERIODO ACADÉMICO',
        accessorKey: 'descripcionPeriodoAcademico',
        size: 100
    },
    {
        header: 'ACCIONES',
        size: 50,
        cell: ({ row }) => (
            <>
                <div className='flex gap-2  items-center '>
                    <ActualizarMatriculaModal row={row.original} />
                    <EliminarMatriculaButton id={row.original.id} />
                </div>
            </>
        ),
    },
]