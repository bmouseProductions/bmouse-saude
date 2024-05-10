/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "../../assets/section-8.webp";

import { Botao } from "../../components/Botao";

export const Section8 = () => {
  return (
    <section className="bg-white">
      <div className="m-auto container   py-20 px-5 lg:px-0 ">
      <img src={Image} className="" />
        <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-10">
          <p className="text-2xl ">
            Chega de comprar cursos de marketing de saúde feitos
            por profissionais de saúde, você precisa abandonar a
            linguagem técnica e adotar uma abordagem mais
            acessível.
          </p>

          <p className="w-full max-w-[523px] text-2xl ">
            Afinal, conectar-se com os pacientes exige falar a língua
            deles não a dos profissionais da área. A chave está em
            compreender e atingir o público-alvo de forma
            autêntica e relevante. E nós podemos te ajudar!
          </p>
        </div>

        <div className="mt-7 max-w-[400px] w-full md:w-[60%] lg:w-full xl:w-[100%] 2xl:w-[80%] mx-auto flex items-center justify-center ">
          <Botao style2={false} />
        </div>
      </div>
    </section>
  );
};
