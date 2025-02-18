import { ButtonSubmit } from '@/shared/Components/Buttons/ButtonSubmit'
import { Button, Modal, ModalBody, ModalFooter } from '@nextui-org/react'
import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useSWRConfig } from "swr";
import { iconos } from "@/shared/Constants/GlobalConstants";
import TemplateAlert from "@/shared/Components/Templates/TemplateAlert";
import { useMenuService } from '../../Hooks/useMenuService';
import ButtonCloseModal from '@/shared/Components/Buttons/ButtonCloseModal';
import InputField from '@/shared/Components/Form/Fields/InputField';
import SelectField from '@/shared/Components/Form/Fields/SelectField';
import NumberField from '@/shared/Components/Form/Fields/NumberField';
function RegistrarMenuForm({ onClose }) {

    const { mutate } = useSWRConfig()
    const { register, handleSubmit, setValue, reset, formState: { errors, isSubmitting } } = useForm();
    const [errorValidation, setErrorValidation] = useState('');
    const { FetchMenusPadres, registrarMenu } = useMenuService()
    const menus = FetchMenusPadres();
    const formulario = handleSubmit(async (data) => {

        try {
            const response = await registrarMenu(data)
            if (response.success === true) {
                toast.success(response.messages[0])
                onClose()
                reset()
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
                                register={register}
                                error={errors.nombre}
                            />
                        </div>
                        <div className="col-span-1">

                            <InputField
                                id="rutaRelativa"
                                label="ruta relativa"
                                isRequired={true}
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
                                error={errors.descripcion}
                            />
                        </div>
                        <div className="col-span-1">
                            <SelectField
                                id="icono"
                                label="Icono"
                                options={iconos}
                                isLoading={false}
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
                                    { value: "1", label: "ACTIVO" },
                                    { value: "0", label: "INACTIVO" },
                                ]}
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
                                register={register}
                                error={errors.codigo}
                            />
                        </div>
                        <div className="col-span-1">

                            <NumberField
                                id="orden"
                                label="orden"
                                isRequired={true}
                                min={1}
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
                                isRequired={true}
                                setValue={setValue}
                                register={register}
                                error={errors.idMenuPadre}
                            />


                        </div>
                    </div>



                </ModalBody>
                <ModalFooter>
                    <ButtonSubmit isSubmitting={isSubmitting} label={'Registrar'} />
                    <ButtonCloseModal onClose={onClose} />
                </ModalFooter>
            </form >
        </>
    )
}

export default RegistrarMenuForm