import Saude from "../../assets/img.svg";

import { Botao } from "../../components/Botao";
export const Section1 = () => {
  return (
    <section
      id="home"
      className="flex flex-col lg:flex-row items-center justify-center h-[95vh] lg:py-20 px-5 lg:px-0 lg:min-h-[650px] xl:min-h-[700px] 2xl:min-h-[750px] 
        bg-gradient-to-b lg:bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#610aed] via-[#4601b5] via-35% md:via-10% to-[#04022a] md:to-70%
      "
    >
      <div className="container m-auto flex flex-col lg:flex-row gap-5">
        <div className="w-full xl:w-[40%] mx-auto lg:mx-0 flex flex-col items-center justify-center gap-10 lg:gap-5 lg:justify-evenly lg:items-start ">
          <img
            src={Saude}
            alt="logo bmouse"
            className="lg:w-[90%] 2xl:w-full  mx-auto"
          />
          <p className="lg:text-xl  xl:text-2xl text-center font-light 2xl:leading-7 text-[#F4F4F4] ">
            Busca aumentar o valor da sua consulta? Se livrar da dependência dos
            planos de saúde e planos odontológicos?
          </p>
          <div className=" w-full md:w-[50%] lg:w-[90%] mx-auto flex items-center justify-center ">
            <Botao style2={false} />
          </div>
        </div>
        <div className="w-full xl:w-[60%] my-auto">
          <iframe 
            src="https://www.youtube.com/embed/my0JVqQal3g?si=wJrZOseWw2RicgNQ" 
            title="YouTube video player" 
            className="my-auto w-full h-[200px] lg:w-[550px] lg:h-[280px] xl:w-full xl:h-[450px] rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};
