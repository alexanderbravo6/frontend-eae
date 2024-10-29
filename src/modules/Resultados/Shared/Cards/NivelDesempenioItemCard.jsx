import { Button, Tooltip } from '@nextui-org/react'
import React from 'react'

function NivelDesempenioItemCard({
    nivel, porcentaje, resumen
}) {
    return (
        <section className="flex w-full items-center font-bold justify-between my-4">
            <div className="flex gap-3 items-center">
                <p>{nivel}</p>
                <Tooltip
                    color={"primary"}
                    content={
                        <div className="px-1 max-w-60 py-2">
                            <div className="text-small font-bold">Resumen:</div>
                            <div className="text-tiny">
                                {resumen}
                            </div>
                        </div>
                    }
                >
                    <Button color="primary" isIconOnly size="sm" variant="bordered">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-eye">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                            <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
                        </svg>
                    </Button>
                </Tooltip>
            </div>
            <div className="fw-bold orange">{porcentaje}%</div>
        </section>
    )
}

export default NivelDesempenioItemCard