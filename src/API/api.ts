/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

export const api = axios.create({
  baseURL: "https://lp-saude.onrender.com",
});

export const Email = async (values: any) => {
  return await api.post("/enviar-email", values);
};