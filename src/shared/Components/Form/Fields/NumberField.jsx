import React from 'react';

const NumberField = ({ min, max, maxLength, minLength, id, label, type = "number", register, value = null, isRequired, error }) => {
    const validationRules = {
        ...(min !== undefined && {
            min: {
                value: min,
                message: `El valor mínimo es ${min}`,
            },
        }),
        ...(max !== undefined && {
            max: {
                value: max,
                message: `El valor máximo es ${max}`,
            },
        }),
        ...(maxLength !== undefined && {
            maxLength: {
                value: maxLength,
                message: `Debe tener como máximo ${maxLength} carácteres`,
            },
        }),
        ...(minLength !== undefined && {
            minLength: {
                value: minLength,
                message: `Debe tener como mínimo ${minLength} carácteres`,
            },
        }),
        ...(type === "number" && {
            pattern: {
                value: /^[0-9]+$/,
                message: "Solo se permiten números",
            },
        }),
        ...(isRequired && {
            required: {
                value: true,
                message: `El campo ${label} es requerido`,
            },
        }),
    };
    return (
        <>

            <label htmlFor={id} className="block uppercase mb-2 text-xs font-medium text-gray-900 dark:text-white">
                {label} {isRequired && <span className="text-red-500">*</span>}
            </label>
            <input
                id={id}
                type={type}
                {...register(`${id}`, validationRules)}
                defaultValue={value}
                className="bg-gray-50 border uppercase border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            {error && <span className="text-red-500  text-xs">{error.message}</span>}

        </>
    );
};

export default NumberField;
