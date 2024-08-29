import AuthProvider from "@/shared/Providers/AuthProvider";

export const metadata = {
  title: "Iniciar Sesión",
  description: "Inicio de sesión de sistema de evaluación de aprendizajes de estudiantes de la educación superior pedagógica",

};

export default function SeguridadLayout({ children }) {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  );
}
