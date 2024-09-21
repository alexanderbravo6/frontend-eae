
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";


export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            async authorize(credentials) {
                try {
                    // Aquí se debe realizar la petición a la API para validar las credenciales
                    const request = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + '/v1/auth/iniciar-sesion', {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json',
                            "X-Requested-With": "XMLHttpRequest",
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            usuario: credentials?.usuario,
                            clave: credentials?.clave
                        })
                    });
                    const response = await request.json();

                    if (response?.success === true) {

                        //guardar le menu en localstorage

                        const user = {
                            // Datos de sesión configurables
                            'idPersonaRol': response?.data?.acceso.idPersonRol,
                            'idRol': response?.data?.acceso.idRol,
                            'idSede': response?.data?.acceso.idSede,
                            'idPeriodoAcademico': response?.data?.acceso.idPeriodoAcademico,
                            'sede': response?.data?.acceso.sede,
                            'descripcionRol': response?.data?.acceso.descripcionRol,
                            'idInstitucionActiva': response?.data?.acceso.idRol == 2 ? response?.data?.acceso.idSede : 0,
                            // Datos no configurables
                            'idPersona': response?.data?.acceso.idPersona,
                            'idUsuario': response?.data?.acceso.idUsuario,
                            'nombreCompleto': response?.data?.usuario.nombres + " " + response?.data?.usuario.apellidoPaterno,
                            'token': response?.data?.usuario.token,
                            'tipoToken': response?.data?.usuario.tipoToken,
                            'estadoProceso': response?.data?.usuario.estadoProceso,
                        }

                        return user;
                    } else {
                        throw new Error(response?.messages || 'Error al iniciar sesión');
                    }
                } catch (e) {
                    throw new Error(e.message || 'Error al iniciar sesión');
                }
            },
        }),
    ],
    pages: {
        signIn: '/auth/iniciar-sesion',
        signOut: '/auth/iniciar-sesion',
        error: '/auth/iniciar-sesion',
        verifyRequest: '/',
        newUser: null
    },
    session: {
        strategy: "jwt",
        maxAge: 30 * 60 * 6, // Set appropriate session duration (e.g., 30 minutes)
        updateAge: 24 * 60 * 60, // Refresh tokens regularly (e.g., every day)
    },
    callbacks: {
        async jwt({ token, user, trigger, session, request }) {
            if (user) {
                token.user = user;
                token.accessToken = user.token;
            }

            // Verifica si la solicitud proviene de un trigger 'update'
            if (trigger === 'update') {

                token.user.idPeriodoAcademico = session.user.idPeriodoAcademico;
                token.user.idInstitucionActiva = session.user.idInstitucionActiva;
                token.user.idSede = session.user.idSede;
                token.user.descripcionRol = session.user.descripcionRol;
                token.user.sede = session.user.sede;
                token.user.idRol = session.user.idRol;
                token.user.idPersonaRol = session.user.idPersonaRol;
                return token;
            }

            return token;
        },
        async session({ session, token }) {
            session.user = token.user;
            return session;
        }
    }

}
const handler = NextAuth(authOptions);

export {
    handler as GET,
    handler as POST
}