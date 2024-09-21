import { Roboto } from "next/font/google";
import "./globals.css";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import AuthProvider from "@/shared/Providers/AuthProvider";
const roboto = Roboto({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ['latin']
});

export const metadata = {
  title: "EAE",
  description: "Evaluación de aprendizajes para estudiantes de la educación superior pedagógica",
};

export default function RootLayout({ children }) {

  return (
    <html lang="es">
      <body theme="light" className={roboto.className}>
        <AuthProvider>
          {children}
          <ToastContainer />
        </AuthProvider>
      </body>
    </html>
  );
}
