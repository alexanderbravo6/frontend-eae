export const configSWR = {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnMount: true,
    revalidateOnReconnect: false,
    refreshInterval: 0, // Evita la recarga automática
};

export const actionsLinks = [

    {
        name: 'Mi Perfil',
        url: '/gestion/mi-perfil',
        showDivider: false
    },
    {
        name: 'Cambiar Rol',
        url: '/gestion/seguridad/cambiar-rol',
        showDivider: true
    }

]

export const sexoOptions = [
    { value: 'M', label: 'MASCULINO' },
    { value: 'F', label: 'FEMENINO' }
]

export const tipoDocumentoOptions = [
    { value: "1", label: "DNI" },
    { value: "2", label: "CARNET DE EXTRANJERÍA" },
]


export const toolbarSetting = {

    toolbar: [
        [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
        [{ size: [] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' },
        { 'indent': '-1' }, { 'indent': '+1' }],
        ['link', 'image'],
        ['clean']
    ],

}