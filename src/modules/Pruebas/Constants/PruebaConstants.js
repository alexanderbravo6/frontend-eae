
import DescargarResultadosButton from "../Components/Buttons/DescargarResultadosButton";
import EliminarCortePuntajeButton from "../Components/Buttons/EliminarCortePuntajeButton";
import EliminarDescripcionButton from "../Components/Buttons/EliminarDescripcionButton";
import EliminarPruebaButton from "../Components/Buttons/EliminarPruebaButton";
import PreguntaLink from "../Components/Buttons/PreguntaLink";
import ActualizarPruebaModal from "../Components/Modals/ActualizarPruebaModal";
import CargaMasivaResultadoModal from "../Components/Modals/CargaMasivaResultadoModal";
import ActualizarDescripcionModal from "../Components/Modals/NivelDesempenio/ActualizarDescripcionModal";
import NivelDesempenioIndex from "../Components/NivelDesempenioIndex";


export const pruebaConstants = [

    {
        header: 'Nombre',
        accessorKey: 'nombre',
        size: 300
    },
    {
        header: 'Ciclo',
        accessorKey: 'ciclo',
        size: 30
    },
    {
        header: 'Fecha de Evaluación',
        accessorKey: 'fechaPrueba',
        size: 30
    },
    {
        header: 'Hora de Inicio',
        accessorKey: 'horaInicio',
        size: 30
    },
    {
        header: 'Hora de Fin',
        accessorKey: 'horaFin',
        size: 30
    },
    {
        header: 'ACCIONES',
        size: 50,
        cell: ({ row }) => (
            <>
                <div className='flex gap-2  items-center '>
                    <DescargarResultadosButton id={row.original.id} />
                    <CargaMasivaResultadoModal row={row.original} />
                    <NivelDesempenioIndex row={row.original} />
                    <PreguntaLink id={row.original.id} />
                    <ActualizarPruebaModal row={row.original} />
                    <EliminarPruebaButton id={row.original.id} />
                </div>
            </>
        ),
    },
]

export const cortesPuntajeConstants = [

    {
        header: 'PUNTAJE',
        accessorKey: 'puntaje',
        size: 300
    },
    {
        header: 'ORDEN',
        accessorKey: 'orden',
        size: 30
    },
    {
        header: 'ACCIONES',
        size: 50,
        cell: ({ row }) => (
            <>
                <div className='flex gap-2  items-center '>
                    <EliminarCortePuntajeButton row={row.original} />
                </div>
            </>
        ),
    },
]


export const descripcionNivelDesempenioConstants = [

    {
        header: 'NIVEL',
        accessorKey: 'nombreNivel',
        size: 300
    },

    {
        header: 'ACCIONES',
        size: 50,
        cell: ({ row }) => (
            <>
                <div className='flex gap-2  items-center '>
                    <ActualizarDescripcionModal row={row.original} />
                    <EliminarDescripcionButton row={row.original} />
                </div>
            </>
        ),
    },
]