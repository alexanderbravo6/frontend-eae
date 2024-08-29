import { Poppins } from "next/font/google";
import "./globals.css";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import { EvaluacionProvider } from "@/modules/Evaluacion/Context/useEvaluacion";
const poppins = Poppins({
  weight: ['400', '500', '700'],

  subsets: ['latin']
});


export const metadata = {
  title: "EAE",
  description: "Evaluación de aprendizajes para estudiantes de la educación superior pedagógica",
};

export default function RootLayout({ children }) {

  return (
    <html lang="es">
      <body theme="light" className={poppins.className}>

        {children}
        <ToastContainer />

      </body>
    </html>
  );
}
