

export default function TemplateDeniedPermission() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
            <div className="max-w-md w-full space-y-8">
                <div className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-red-500">
                    <div className="flex items-center space-x-4">
                        <h1 className="text-2xl font-bold text-gray-800">Acceso Denegado</h1>
                    </div>
                    <p className="mt-4 text-gray-600">
                        Lo sentimos, no tienes permiso para acceder a esta página.
                    </p>
                </div>

                <div className="flex flex-col space-y-4">
                    <button
                        className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        onClick={() => window.history.back()}
                    >

                        Volver atrás
                    </button>
                </div>
            </div>
        </div>
    )
}