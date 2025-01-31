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

export const nivelDesempenio = [
    { value: 1, label: 'INICIO' },
    { value: 2, label: 'EN PROCESO' },
    { value: 3, label: 'SATISFACTORIO' }
]
export const sexoOptions = [
    { value: 'M', label: 'MASCULINO' },
    { value: 'F', label: 'FEMENINO' }
]
export const tipoDocumentoOptions = [
    { value: "1", label: "DNI" },
    { value: "2", label: "CARNET DE EXTRANJERÍA" },
]
export const cierreAutomaticoOptions = [
    { value: "1", label: "SI" },
    { value: "0", label: "NO" },
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