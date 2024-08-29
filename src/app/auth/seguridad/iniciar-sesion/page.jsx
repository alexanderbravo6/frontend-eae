import LoginForm from "@/modules/Auth/Components/LoginForm";
import Image from "next/image";


export default function LoginHome() {
  return (
    <>
      <div className="flex items-center w-full h-full min-h-[640px] ">
        <div className="lg:w-3/5 w-full gap-3  h-full flex flex-col justify-between   ">
          <div className=" overflow-hidden">
            <img src="/LOGO_MINEDU.png" className=" m-5 w-52 " alt="Icono Ministerio de Educación" />
          </div>
          <LoginForm />
        </div>
        <div className="lg:w-2/5 lg:flex h-full hidden  overflow-hidden">
          <img
            className="object-cover w-full   h-full "
            src="/main-eae.png"
            alt="Local Minedu"
          />
        </div>
      </div>
    </>
  );
}

