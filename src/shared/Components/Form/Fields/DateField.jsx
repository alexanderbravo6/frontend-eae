import React from 'react';

const DateField = ({ id, label, register, isRequired, type, error }) => {
    let max = null;
    let min = null;
    if (type === "max-date-today") { max = new Date().toISOString().split('T')[0]; }
    if (type === "min-date-today") { min = new Date().toISOString().split('T')[0]; }
    return (
        <>
            <label htmlFor={id} className="block uppercase mb-2 text-xs font-medium text-gray-900 dark:text-white">
                {label} {isRequired && <span className="text-red-500">*</span>}
            </label>
            <input
                id={id}
                max={max}
                min={min}
                type={"date"}
                {...register(`${id}`, {
                    required: { value: isRequired, message: `El campo ${label} es requerido` },
                })}

                className="bg-gray-50 border leading-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            {error && <span className="text-red-500 text-xs">{error.message}</span>}
        </>
    );
};

export default DateField;
