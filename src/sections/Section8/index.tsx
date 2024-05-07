/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "../../assets/section-8.svg";

import { Card, Input, Button, Typography } from "@material-tailwind/react";

import { Textarea } from "@material-tailwind/react";
import { Botao } from "../../components/Botao";
import { useState } from "react";
import { Email } from "../../API/api";

export const Section8 = () => {

  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    areaAtuacao: '', // Mudança aqui
    mensagem: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>, fieldName: string) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };
  


  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      // Chame a função de envio de email passando o formData
      await Email(formData);
      // Limpe os dados do formulário após o envio bem-sucedido
      setFormData({
        nome: '',
        email: '',
        areaAtuacao: '',
        mensagem: '',
      });
    } catch (error) {
      console.error('Erro ao enviar o email', error);
    }
  };

  return (
    <section className="bg-white">
      <div className="m-auto container   py-20 lg:py-32 px-5 lg:px-0 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-10">
          <div className="flex flex-col items-center justify-center gap-5">
            <img src={Image} className="" />

            <div className=" w-full md:w-[60%] lg:w-full xl:w-[100%] 2xl:w-[80%] mx-auto flex items-center justify-center ">
              <Botao style2={false} />
            </div>
          </div>

          <div>
            <Card
              className="bg-[#04022a] flex flex-col items-center justify-center py-10 !text-white"
              shadow={false}
            >
              <Typography variant="h1">Contato</Typography>

              <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 mx-auto">
                <div className="mb-1 flex flex-col gap-6">
                  <Typography variant="h6" className="-mb-3">
                    Seu Nome
                  </Typography>
                  <Input
                    size="lg"
                    placeholder="nome"
                    value={formData.nome}
                    onChange={(e) => handleChange(e, 'nome')}
                    className=" !border-t-blue-gray-200 focus:!border-white"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                    crossOrigin={undefined}
                  />
                  <Typography variant="h6" className="-mb-3">
                    Seu Email
                  </Typography>
                  <Input
                    size="lg"
                    placeholder="email@mail.com"
                    value={formData.email}
                    onChange={(e) => handleChange(e, 'email')}
                    className=" !border-t-blue-gray-200 focus:!border-white"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                    crossOrigin={undefined}
                    
                  />
                  <Typography variant="h6" className="-mb-3">
                    Área de atuação
                  </Typography>
                  <Input
                    size="lg"
                    placeholder="Área de atuação"
                    className=" !border-t-blue-gray-200 focus:!border-white"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                    value={formData.areaAtuacao}
                    onChange={(e) => handleChange(e, 'areaAtuacao')}
                    crossOrigin={undefined}
                  />
                  <Typography variant="h6" className="-mb-3">
                    Mensagem
                  </Typography>
                  <Textarea
                    label="Mensagem"
                    className="focus:border-white"
                    value={formData.mensagem}
                    onChange={(e) => handleChange(e, 'mensagem')}
                  />
                </div>

                <Button className="mt-6 bg-[#5200cb] " onClick={handleSubmit}>Enviar</Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
