import { Bubble } from "@typebot.io/react";

import Logo from "../../assets/logo.svg";
import Face from "../../assets/face.svg";
import X from "../../assets/x.svg";
import Insta from "../../assets/insta.svg";

export const Footer = () => {
  return (
    <footer className="bg-[#5200cb]">
      <div className="container mx-auto  py-10  px-5 lg:px-0">
        <div className="flex flex-col  gap-10">
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-5">
              <img src={Logo} alt="Bmouse Productions" className="w-[200px]" />
              <p className="lg:text-xl  xl:text-2xl text-left font-light 2xl:leading-7 text-[#F4F4F4] ">
                R. Dr. José Olímpio Borges, 134 - Vila Santa Luzia, <br /> Patos
                de Minas - MG, 38700-080
              </p>
              <ul className="flex gap-3 items-center">
                <a
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#34018e] shadow-xl rounded-full h-[50px] w-[50px] flex items-center justify-center"
                >
                  <img src={Face} />
                </a>
                <a
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#34018e] shadow-xl rounded-full h-[50px] w-[50px] flex items-center justify-center"
                >
                  <img src={X} />
                </a>
                <a
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#34018e] shadow-xl rounded-full h-[50px] w-[50px] flex items-center justify-center"
                >
                  <img src={Insta} />
                </a>
              </ul>
            </div>
            <div></div>
          </div>
          <p className="lg:text-xl  xl:text-2xl text-center mx-auto font-light 2xl:leading-7 text-[#F4F4F4] ">
            BMouse Productions © 2023. Todos os direitos reservados.
          </p>
        </div>
      </div>

      <Bubble
        typebot="bmouse"
        previewMessage={{
          message: "Olá, podemos lhe ajudar?",
          autoShowDelay: 10000,
          avatarUrl:
            "https://s3.typebot.io/public/workspaces/clv2tewr6000hh80cwwlpcfjg/typebots/clv2thip6000112k79mwnke6i/hostAvatar?v=1713359359581",
        }}
        theme={{
          button: {
            backgroundColor: "#FFFFFF",
            customIconSrc:
              "https://s3.typebot.io/public/workspaces/clv2tewr6000hh80cwwlpcfjg/typebots/clv2thip6000112k79mwnke6i/bubble-icon?v=1713895393916",
            size: "large",
          },
          previewMessage: {
            closeButtonBackgroundColor: "#0042DA",
            closeButtonIconColor: "#33ac45",
          },
        }}
      />
    </footer>
  );
};
