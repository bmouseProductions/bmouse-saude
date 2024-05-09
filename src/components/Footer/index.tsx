import { Bubble } from "@typebot.io/react";

import Logo from "../../assets/logo.svg";

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
                  href="https://www.facebook.com/bmouseproductions/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#34018e] shadow-xl rounded-full h-[50px] w-[50px] flex items-center justify-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="h-5 fill-white" >
                    <path  d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"/>
                  </svg>
                </a>

                <a
                  href="https://www.instagram.com/bmouseproductions/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#34018e] shadow-xl rounded-full h-[50px] w-[50px] flex items-center justify-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-5 fill-white">
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
                  </svg>
                </a>

                <a
                  href="https://www.youtube.com/@bmouseproductions_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#34018e] shadow-xl rounded-full h-[50px] w-[50px] flex items-center justify-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="w-5 fill-white">
                    <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"/>
                  </svg>
                </a>

                <a
                  href="https://www.linkedin.com/company/bmouse/mycompany/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#34018e] shadow-xl rounded-full h-[50px] w-[50px] flex items-center justify-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-5 fill-white">
                    <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/>
                  </svg>
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
            size: "medium",
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
