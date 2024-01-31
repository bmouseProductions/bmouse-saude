import axios from "axios";

export const api = axios.create({
  baseURL: "https://lp-saude.onrender.com",
});

interface propsFormData {
  nome: string;
  email: string;
  areaAtuacao: string;
  mensagem: string;
}

export const enviarEmail = async (formData: propsFormData) => {
  const { nome, email, areaAtuacao, mensagem,} = formData;

  const formDataToSend = new FormData();
  formDataToSend.append("nome", nome);
  formDataToSend.append("email", email);
  formDataToSend.append("areaAtuacao", areaAtuacao);
  formDataToSend.append("mensagem", mensagem);

  try {
    const response = await api.post("/send", formDataToSend, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    if (response.status === 200) {
      window.alert("Email enviado com sucesso!");
    } else {
      window.alert("Falha ao enviar o email. Por favor, tente novamente.");
    }

    return response;
  } catch (error) {
    console.error("Erro ao enviar o email:", error);
    window.alert("Falha ao enviar o email. Por favor, tente novamente.");
    throw error;
  }
};
