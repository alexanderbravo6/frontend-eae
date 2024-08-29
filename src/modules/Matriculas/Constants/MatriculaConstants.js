import EliminarMatriculaButton from "../Components/Buttons/EliminarMatriculaButton";
import ActualizarMatriculaModal from "../Components/Modals/ActualizarMatriculaModal";

export const MatriculaConstants = [

    {
        header: 'REGIÓN',
        accessorKey: 'region',
        size: 40
    },
    {
        header: 'INSTITUCIÓN',
        accessorKey: 'institucion',
        size: 100
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
        size: 100
    },
    {
        header: 'ACCIONES',
        size: 50,
        cell: ({ row }) => (
            <>
                <div className='flex gap-2  items-center '>
                    <ActualizarMatriculaModal row={row.original} />
                    <EliminarMatriculaButton row={row.original} />
                </div>
            </>
        ),
    },
]