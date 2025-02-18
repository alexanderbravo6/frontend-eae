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
    { value: 1, label: 'MASCULINO' },
    { value: 2, label: 'FEMENINO' }
]
export const estadoOptions = [
    { value: 1, label: 'ACTIVO' },
    { value: 0, label: 'INACTIVO' }
]
export const tipoDocumentoOptions = [
    { value: "1", label: "DNI" },
    { value: "2", label: "CARNET DE EXTRANJERÍA" },
]
export const cierreAutomaticoOptions = [
    { value: "1", label: "SI" },
    { value: "0", label: "NO" },
]
export const iconos = [
    { value: 'home', label: 'home' },
    { value: 'person', label: 'person' },
    { value: 'management', label: 'management' },
    { value: 'eyes-config', label: 'eyes-config' },
    { value: 'checklist', label: 'checklist' },
    { value: 'directions', label: 'directions' },
    { value: 'config', label: 'config' },
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