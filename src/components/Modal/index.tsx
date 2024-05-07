import React, { CSSProperties, useEffect, useState } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  link: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, link }) => {
  const [contentHeight, setContentHeight] = useState<string>("80vh");
  const [contentPadding, setContentPadding] = useState<string>("20px");

  useEffect(() => {
    // Atualiza a altura do conteúdo e o padding com base no tamanho da janela ao montar o componente
    updateContentStyles();
    // Adiciona um listener para atualizar a altura do conteúdo quando a janela for redimensionada
    window.addEventListener("resize", updateContentStyles);

    // Remove o listener quando o componente for desmontado
    return () => {
      window.removeEventListener("resize", updateContentStyles);
    };
  }, []);

  const updateContentStyles = () => {
    // Atualiza a altura do conteúdo e o padding com base no tamanho da janela
    const newContentHeight = window.innerWidth <= 768 ? "350px" : "80vh";
    const newContentPadding = window.innerWidth <= 768 ? "10px" : "20px";
    setContentHeight(newContentHeight);
    setContentPadding(newContentPadding);
  };

  const modalStyle: CSSProperties = {
    display: isOpen ? "block" : "none",
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  };

  const contentStyle: CSSProperties = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
    width: "80vw",
    height: contentHeight,
    padding: contentPadding,
    zIndex: 1000,
  };

  return (
    <div style={modalStyle} onClick={onClose} className="!z-50">
      <div
        style={contentStyle}
        onClick={(e) => e.stopPropagation()}
        className="flex flex-col !z-50 !rounded-3xl pt-10"
      >
        <iframe src={link} className="w-full h-full"></iframe>
        <button
          onClick={onClose}
          className="bg-deep-orange-500 p-3 rounded-lg w-[100px] h-[50px]  self-end shadow-2xl"
        >
          Fechar
        </button>
      </div>
    </div>
  );
};

export default Modal;
