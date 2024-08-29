
import { Button, ModalBody, ModalFooter } from '@nextui-org/react';
import React, { useState } from 'react';
import * as XLSX from 'xlsx';

const MatriculaMasivaForm = ({ onClose }) => {
    const [data, setData] = useState([]);
    const [jsonData, setJsonData] = useState([]);
    const [fileName, setFileName] = useState('');

    const handleFileChange = (event) => {
        const file = event.target.files[0];
 
        setFileName(file.name);

        const reader = new FileReader();
        reader.onload = (e) => {
            const ab = e.target.result;
            const workbook = XLSX.read(ab, { type: 'array' });
            const sheetName = workbook.SheetNames[0];
            const sheet = workbook.Sheets[sheetName];
            const json = XLSX.utils.sheet_to_json(sheet);

            setData(json);

            // Excluir la cabecera (primera fila)
            const header = json[0];
            const body = json.slice(1);
            setJsonData(body);
        };

        reader.readAsArrayBuffer(file);
    };

    const handleSubmit = () => {

    };

    return (
        <>

            <ModalBody>
                <input
                    type="file"
                    accept=".xlsx, .xls"
                    onChange={handleFileChange}
                    className="mb-4 p-2 border border-gray-300 rounded"
                />

                {
                    data.length > 0 && (
                        <>
                            <section>
                                <p className='font-semibold'>Nombre de Archivo: </p> <span>{fileName} </span>
                                <p className='font-semibold'>Cantidad de matriculados: </p> <span> {data.length}</span>
                            </section>
                        </>
                    )
                }

            </ModalBody >
            <ModalFooter>
                <button onClick={handleSubmit} className="z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent data-[pressed=true]:scale-[0.97] outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 px-4 min-w-20 h-10 text-small gap-2 rounded-medium [&>svg]:max-w-[theme(spacing.8)] transition-transform-colors-opacity motion-reduce:transition-none bg-primary text-primary-foreground data-[hover=true]:opacity-hover">
                    Cargar
                </button>
                <Button color="danger" variant="flat" onPress={onClose}   >
                    Cerrar
                </Button>
            </ModalFooter>
        </>

    );
};

export default MatriculaMasivaForm;
