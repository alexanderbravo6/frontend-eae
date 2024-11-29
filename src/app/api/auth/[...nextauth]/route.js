
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";


export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            async authorize(credentials) {
                try {

                    const user = {

                        idPersonaRol: Number(credentials?.idPersonaRol),
                        idRol: Number(credentials?.idRol),
                        idSede: Number(credentials?.idSede),
                        anio: Number(credentials?.anio),
                        sede: credentials?.sede,
                        descripcionRol: credentials?.descripcionRol,
                        idInstitucionActiva: Number(credentials?.idInstitucionActiva),
                        // Datos no configurables
                        idPersona: Number(credentials?.idPersona),
                        idUsuario: Number(credentials?.idUsuario),
                        iniciales: credentials?.iniciales,
                        nombreCompleto: credentials?.nombreCompleto,
                        token: credentials?.token,
                        tipoToken: credentials?.tipoToken,
                        estadoProceso: credentials?.estadoProceso,
                    }


                    return user;

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

                token.user.idPersona = session.user.idPersona;
                token.user.anio = session.user.anio;
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