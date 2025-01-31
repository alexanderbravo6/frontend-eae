import React from 'react'

function TimeField({ id, label, register, value = null, isRequired, error }) {
    return (
        <>
            <label htmlFor={id} className="block uppercase mb-2 text-xs font-medium text-gray-900 dark:text-white">
                {label} {isRequired && <span className="text-red-500">*</span>}
            </label>
            <div className="relative">

                <input type="time"
                    defaultValue={value}
                    {...register(`${id}`, {
                        required: { value: isRequired, message: `El campo ${label} es requerido` },
                    })}

                    id="horaInicio" className="bg-gray-50 border leading-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
            {error && <span className="text-red-500 text-xs">{error.message}</span>}
        </>
    )
}

export default TimeField