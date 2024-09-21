import EliminarPersonaButton from "../Components/Buttons/EliminarPersonaButton";
import ActualizarPersonaModal from "../Components/Modals/ActualizarPersonaModal";
import AsignarRolModal from "../Components/Modals/Roles/AsignarRolModal";


export const personaColumns = [
    {
        header: 'TIPO DOCUMENTO',
        accessorKey: 'descripcionTipoDocumento',
        size: 30
    },
    {
        header: 'N° DOCUMENTO',
        accessorKey: 'numeroDocumento',
        size: 40
    },
    {
        header: 'APELLIDO PATERNO',
        accessorKey: 'apellidoPaterno',
        size: 200
    },
    {
        header: 'APELLIDO MATERNO',
        accessorKey: 'apellidoMaterno',
        size: 200
    },
    {
        header: 'NOMBRES',
        accessorKey: 'nombres',
        size: 200
    },

    {
        header: 'SEXO',
        accessorKey: 'descripcionSexo',
        size: 30
    },
    {
        header: 'ESTADO',
        accessorKey: 'estado',
        size: 30,
        cell: ({ row }) => (
            <div className={`text-center ${row.original.estado === 1 ? 'text-green-500' : 'text-red-500'}`}>{row.original.estado === 1 ? "ACTIVO" : "INACTIVO"}</div>
        )
    },
    {
        header: 'ACCIONES',
        cell: ({ row }) => (
            <>
                <div className='flex gap-2  items-center '>

                    <ActualizarPersonaModal row={row.original} />
                    <AsignarRolModal row={row.original} />
                    <EliminarPersonaButton row={row.original} />
                </div>
            </>
        ),
    },
]