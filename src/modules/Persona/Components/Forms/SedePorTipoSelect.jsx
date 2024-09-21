
import { Autocomplete, AutocompleteItem, Button } from '@nextui-org/react'
import React from 'react'

const SedePorTipoSelect = ({ sede, setSede, data, register, selectTipoSede, errors }) => {


    return (
        <>
            <Autocomplete
                label="Sede"
                size={"sm"}
                variant={"bordered"}
                className=" w-full"
                selectedKey={sede}
                onSelectionChange={setSede}
                {...register('idSede', {
                    required: {
                        value: true,
                        message: 'El campo sede es requerido'

                    }
                })}
            >
                {
                    data?.data?.data.filter((sede) => sede.idTipoSede == selectTipoSede)
                        .map((sede) => (
                            <AutocompleteItem key={sede.id}>
                                {sede.nombre}
                            </AutocompleteItem>
                        ))
                }

            </Autocomplete>
            {
                errors.idSede && (
                    <span className="text-red-500 text-xs">{errors.idSede.message}</span>
                )
            }

        </>
    )
}

export default SedePorTipoSelect