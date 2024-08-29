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
        url: '/administracion',
        showDivider: false
    }
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