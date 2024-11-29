import React, { useState } from "react";
import { CheckboxGroup, Checkbox, Button } from "@nextui-org/react";
import { useRolFuncionalService } from "../../Hooks/useRolFuncionalService";
import TemplateAlert from "@/shared/Components/Templates/TemplateAlert";
import { toast } from "react-toastify";

export default function AsignarPermisoForm({ menu, rolFuncional }) {
  const acciones = menu.acciones;
  const { asignarPermisos } = useRolFuncionalService();
  const [errorValidation, setErrorValidation] = useState('');
  const accionesChecked = acciones
    .filter((accion) => accion.existePermiso === true)
    .map((accion) => accion.id);

  const [selected, setSelected] = useState(accionesChecked);

  const handleGuardar = async () => {
    const request = {
      idMenu: menu.id,
      acciones: selected,
    }
    try {
      const response = await asignarPermisos(rolFuncional, request)

      if (response.success === true) {
        toast.success(response.messages[0])

        mutate('menu')
        mutate('menus_padres')
      } else {
        if (response.errors) {
          const nuevosErrores = Object.values(response.errors).flat();
          setErrorValidation(nuevosErrores)
        }
        if (response.validations) {
          const nuevosErrores = Object.values(response.validations).flat();
          setErrorValidation(nuevosErrores)
        }
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="flex flex-col gap-3">
      {
        errorValidation.length === 0 ? null : (
          <section>
            <TemplateAlert message={errorValidation} type={'errorList'} />
          </section>
        )
      }
      <CheckboxGroup
        label="Seleccione las acciones"
        color="warning"
        value={selected}
        onChange={setSelected}
      >
        {acciones.map((accion) => (
          <Checkbox key={accion.id} value={accion.id}>
            {accion.nombre}
          </Checkbox>
        ))}
      </CheckboxGroup>
      <Button color="primary" className="max-w-8" onClick={handleGuardar} >
        Guardar
      </Button>
    </div>
  );
}
