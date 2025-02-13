import { ButtonSubmit } from '@/shared/Components/Buttons/ButtonSubmit'
import { Button, ModalBody, ModalFooter } from '@nextui-org/react'
import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useSWRConfig } from "swr";
import TemplateAlert from "@/shared/Components/Templates/TemplateAlert";
import { useRolFuncionalService } from '../../Hooks/useRolFuncionalService';
import InputField from '@/shared/Components/Form/Fields/InputField';
import SelectField from '@/shared/Components/Form/Fields/SelectField';
import { estadoOptions } from '@/shared/Constants/GlobalConstants';
import ButtonCloseModal from '@/shared/Components/Buttons/ButtonCloseModal';
function RegistrarRolFuncionalForm({ onClose }) {

    const { mutate } = useSWRConfig()
    const { register, handleSubmit, setValue, reset, formState: { errors, isSubmitting } } = useForm();
    const [errorValidation, setErrorValidation] = useState('');
    const { registrarRolFuncional } = useRolFuncionalService()

    const formulario = handleSubmit(async (data) => {

        try {
            const response = await registrarRolFuncional(data)
            if (response.success === true) {
                toast.success(response.messages[0])
                onClose()
                reset()
                mutate('rol_funcional')
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
                    <div className="grid grid-cols-1 gap-4">

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
                            <SelectField
                                id="estado"
                                label="estado"
                                options={estadoOptions}
                                isRequired={true}
                                setValue={setValue}
                                register={register}
                                error={errors.estado}
                            />
                        </div>
                    </div>



                </ModalBody>
                <ModalFooter>


                    <ButtonSubmit isSubmitting={isSubmitting} label={'Registrar'} />
                    <ButtonCloseModal onClose={onClose} />
                </ModalFooter>
            </form>
        </>
    )
}

export default RegistrarRolFuncionalForm