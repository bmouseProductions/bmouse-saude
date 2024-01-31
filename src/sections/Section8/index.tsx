/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "../../assets/section-8.svg";

import { Card, Input, Button, Typography } from "@material-tailwind/react";

import { Textarea } from "@material-tailwind/react";
import { Botao } from "../../components/Botao";
import { ChangeEvent, FormEvent, useState } from "react";
import { enviarEmail } from "../../API/api";

export const Section8 = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    areaAtuacao: "", // Mudança aqui
    mensagem: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await enviarEmail(formData);
    } catch (error) {
      console.error("Something is wrong", error);
    }

    console.log(formData)
  };

  return (
    <section className="bg-white">
      <div className="m-auto container   py-20 lg:py-32 px-5 lg:px-0 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-10">
          <div className="flex flex-col items-center justify-center gap-5">
            <img src={Image} className="" />

            <div className=" w-full md:w-[60%] lg:w-full xl:w-[100%] 2xl:w-[80%] mx-auto flex items-center justify-center ">
              <Botao />
            </div>
          </div>

          <div>
            <Card
              className="bg-[#022C5E] flex flex-col items-center justify-center py-10 !text-white"
              shadow={false}
            >
              <Typography variant="h1">Contato</Typography>

              <form
                className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 mx-auto"
                onSubmit={handleSubmit}
              >
                <div className="mb-1 flex flex-col gap-6">
                  <Typography variant="h6" className="-mb-3">
                    Seu Nome
                  </Typography>
                  <Input
                    id="nome"
                    size="lg"
                    placeholder="nome"
                    value={formData.nome}
                    onChange={handleChange}
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
                    id="email"
                    size="lg"
                    placeholder="email@mail.com"
                    value={formData.email}
                    onChange={handleChange}
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
                    id="areaAtuacao"
                    size="lg"
                    placeholder="Área de atuação"
                    className=" !border-t-blue-gray-200 focus:!border-white"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                    value={formData.areaAtuacao}
                    onChange={handleChange}
                    crossOrigin={undefined}
                  />
                  <Typography variant="h6" className="-mb-3">
                    Mensagem
                  </Typography>
                  <Textarea
                    id="mensagem"
                    label="Mensagem"
                    className="focus:border-white"
                    value={formData.mensagem}
                    onChange={handleChange}
                  />
                </div>

                <Button className="mt-6 bg-[#0080FF] " type="submit">
                  Enviar
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
