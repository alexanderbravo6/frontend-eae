
'use client'
import { Skeleton } from '@nextui-org/react';
import React, { useState } from 'react';
import Select from 'react-select'
const SelectField = ({ id, label, register, isRequired, options = [], error, isLoading = false, setValue }) => {

    return (

        <>
            <label htmlFor={id} className="block mb-2 uppercase text-xs font-medium text-gray-900 dark:text-white">
                {label} {isRequired && <span className="text-red-500">*</span>}
            </label>
            {
                isLoading ? <Skeleton height="40px" /> :
                    <Select
                        options={options}

                        onChange={(selectedOption) => {
                            // Actualizamos el valor del formulario con setValue
                            setValue(id, selectedOption ? selectedOption.value : null, {
                                shouldValidate: true, // Valida el campo inmediatamente
                                shouldDirty: true,   // Marca el campo como modificado
                            });
                        }}
                    />
            }

            <input type="text" hidden id={id}
                {...register(`${id}`, {
                    required: { value: isRequired, message: `El campo ${label} es requerido` },
                })} />
            {
                error && (
                    <span className="text-red-500 text-xs">{error.message}</span>
                )
            }
        </>

    );
};

export default SelectField;
