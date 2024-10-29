import IniciarSesionForm from "@/modules/Auth/Components/IniciarSesionForm";


export default function IniciarSesionPage() {
  return (
    <>
      <div className="flex items-center w-full h-full min-h-[640px] ">
        <div className="lg:w-3/5 w-full gap-3  h-full flex flex-col justify-between   ">
          <div >
            <img src="/LOGO_MINEDU.png" className=" m-5 w-40 lg:w-52 " alt="Icono Ministerio de Educación" />
          </div>
          <IniciarSesionForm />
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

