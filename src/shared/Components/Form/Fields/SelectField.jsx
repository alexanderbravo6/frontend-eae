import { Autocomplete, AutocompleteItem } from "@nextui-org/react";
import React from "react";

const SelectField = ({
    type = "simple",
    id,
    label,
    options = [],
    value,
    isLoading = false,
    isRequired = false,
    setValue,
    isDisabled,
    register,
    error,
}) => {
    const onSelectionChange = (selectedKey) => {
        type === "simple" ? setValue(id, selectedKey) : setValue(selectedKey)
    }


    return (
        <div className="w-full">
            <label htmlFor={id} className="block mb-2 uppercase text-xs font-medium text-gray-900 dark:text-white">
                {label} {isRequired && <span className="text-red-500">*</span>}
            </label>
            <Autocomplete
                label={""}
                size="md"
                variant="bordered"
                className="w-full uppercase"
                labelPlacement="outside"
                isLoading={isLoading}
                isDisabled={isDisabled}
                placeholder="SELECCIONAR"
                defaultSelectedKey={`${value}`}
                onSelectionChange={onSelectionChange}
                isRequired
            >
                {options.map(({ value, label }) => (
                    <AutocompleteItem key={value}>
                        {label}
                    </AutocompleteItem>
                ))}
            </Autocomplete>
            <input type="text" hidden id={id}
                defaultValue={value}
                {...register(`${id}`, {
                    required: { value: isRequired, message: `El campo ${label} es requerido` },
                })} />
            {
                error && (
                    <span className="text-red-500 text-xs">{error.message}</span>
                )
            }


        </div>
    );
};

export default SelectField;
