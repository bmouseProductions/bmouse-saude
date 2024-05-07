interface BotaoProps {
  style2: boolean;
}

export const Botao = ({ style2 }: BotaoProps) => {
  return (
    <a
      href="https://bmouseproductions.com/view/atendimento/"
      target="_blank"
      className={`flex items-center justify-center gap-[5px] text-white text-center uppercase leading-7 px-10 rounded-full w-full !h-[70px] text-2xl xl:text-3xl 2xl:text-4xl font-light shadow-2xl ${
        style2 ? "bg-[#04022a]" : "bg-[#5200cb]"
      }`}
    >
      Entre em <strong className="font-bold">contato</strong>
    </a>
  );
};
