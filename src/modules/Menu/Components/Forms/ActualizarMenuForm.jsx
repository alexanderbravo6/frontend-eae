import { ButtonSubmit } from '@/shared/Components/Buttons/ButtonSubmit'
import TemplateAlert from '@/shared/Components/Templates/TemplateAlert'
import { Button, ModalBody, ModalFooter } from '@nextui-org/react'
import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useSWRConfig } from "swr";
import { useMenuService } from "../../Hooks/useMenuService";
import ButtonCloseModal from '@/shared/Components/Buttons/ButtonCloseModal';
import InputField from '@/shared/Components/Form/Fields/InputField';
import SelectField from '@/shared/Components/Form/Fields/SelectField';
import { iconos } from '@/shared/Constants/GlobalConstants';
function ActualizarMenuForm({ row, onClose }) {


    const { register, handleSubmit, setValue, reset, formState: { errors, isSubmitting } } = useForm();
    const { FetchMenusPadres, actualizarMenu } = useMenuService()
    const menus = FetchMenusPadres();
    const { mutate } = useSWRConfig()
    const [errorValidation, setErrorValidation] = useState('');

    const formulario = handleSubmit(async (data) => {

        try {
            const response = await actualizarMenu(row.id, data)

            if (response.success === true) {
                toast.success(response.messages[0])
                onClose()
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
    })
    return (
        <>
            <form onSubmit={formulario} >
                <ModalBody>
                    {
                        errorValidation.length === 0 ? null : (
                            <section>
                                <TemplateAlert message={errorValidation} type={'errorList'} />
                            </section>
                        )
                    }
                    <div className="grid grid-cols-3 gap-4">
                        <div className="col-span-1">
                            <InputField
                                id="nombre"
                                label="nombre"
                                isRequired={true}
                                uppercase={false}
                                value={row.nombre}
                                register={register}
                                error={errors.nombre}
                            />

                        </div>
                        <div className="col-span-1">
                            <InputField
                                id="rutaRelativa"
                                label="ruta relativa"
                                isRequired={true}
                                value={row.rutaRelativa}
                                register={register}
                                error={errors.rutaRelativa}
                            />

                        </div>
                        <div className="col-span-1">
                            <InputField
                                id="descripcion"
                                label="descripción"
                                isRequired={true}
                                register={register}
                                value={row.descripcion}
                                error={errors.descripcion}
                            />

                        </div>
                        <div className="col-span-1">

                            <SelectField
                                id="icono"
                                label="Icono"
                                options={iconos}
                                isLoading={false}
                                value={row.icono}
                                isRequired={true}
                                setValue={setValue}
                                register={register}
                                error={errors.icono}
                            />

                        </div>
                        <div className="col-span-1">
                            <SelectField
                                id="estado"
                                label="estado"
                                options={[
                                    { value: 1, label: "ACTIVO" },
                                    { value: 0, label: "INACTIVO" },
                                ]}
                                value={row.estado}
                                setValue={setValue}
                                isRequired={true}
                                register={register}
                                error={errors.estado}
                            />

                        </div>
                        <div className="col-span-1">

                            <InputField
                                id="codigo"
                                label="codigo interno"
                                isRequired={true}
                                value={row.codigo}
                                register={register}
                                error={errors.codigo}
                            />
                        </div>
                        <div className="col-span-1">
                            <InputField
                                id="orden"
                                label="orden"
                                isRequired={true}
                                value={row.orden}
                                register={register}
                                error={errors.orden}
                            />

                        </div>
                        <div className="col-span-2">
                            <SelectField
                                id="idMenuPadre"
                                label="Menú Padre"
                                options={menus?.data?.data?.map(item => ({
                                    value: item.id,
                                    label: `${item.nombre}`
                                })) || []}
                                isLoading={menus?.isLoading}
                            
                                value={row.idMenuPadre}
                                setValue={setValue}
                                register={register}
                                error={errors.idMenuPadre}
                            />

                        </div>
                    </div>



                </ModalBody>
                <ModalFooter>

                    <ButtonSubmit isSubmitting={isSubmitting} label={"Actualizar"} />
                    <ButtonCloseModal onClose={onClose} />
                </ModalFooter>
            </form>
        </>
    )
}

export default ActualizarMenuForm