import EliminarEvaluacionButton from "../Components/Seguimiento/Buttons/EliminarEvaluacionButton";
import ActualizarEvaluacionModal from "../Components/Seguimiento/Modals/ActualizarEvaluacionModal";
import VerRespuestasModal from "../Components/Seguimiento/Modals/VerRespuestasModal";

export const SeguimientoColumns = [

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
        header: 'CICLO',
        accessorKey: 'descripcionCiclo',
        size: 50
    },
    {
        header: 'PRUEBA',
        accessorKey: 'prueba',
        size: 100
    },
    {
        header: 'FECHA INICIO',
        accessorKey: 'fechaInicio',
        size: 100
    },
    {
        header: 'ESTADO',
        accessorKey: 'descripcionEstado',
        size: 30
    },
    {
        header: 'ACCIONES',
        size: 50,
        cell: ({ row }) => (
            <>
                <div className='flex gap-2  items-center '>
                    <ActualizarEvaluacionModal row={row.original} />
                    <VerRespuestasModal row={row.original} />
                    <EliminarEvaluacionButton row={row.original} />

                </div>
            </>
        ),
    },
]
export const RespuestasColumns = [

    {
        header: 'ESTADO',
        accessorKey: 'estadoRespuesta',
        size: 200
    },
    {
        header: 'OPCIÓN CORRECTA',
        accessorKey: 'opcionCorrecta',
        size: 200
    },

    {
        header: 'OPCIÓN SELECCIONADA',
        accessorKey: 'opcionSeleccionada',
        size: 200
    },
    {
        header: 'VALIDACIÓN',
        accessorKey: 'validezRespuesta',
        size: 100
    },
    {
        header: 'FECHA',
        accessorKey: 'fechaRespuesta',
        size: 100
    },

]