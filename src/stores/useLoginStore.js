import { create } from "zustand";

export const useLoginStore = create((set) => ({
    id: null,
    nome: '',
    cnpj: '',
    foto_perfil: '',
    data_criacao: '',
    email: '',
    senha: '',
    accessToken: '',

    login: (companyLogin) => set({ ...companyLogin }),
    logout: () => set({
        id: null,
        nome: '',
        cnpj: '',
        telefone: '',
        cidade: '',
        estado: '',
        foto_perfil: '',
        data_criacao: '',
        email: '',
        senha: '',
        accessToken: ''
    }),
    updateCompany: (updatedCompany) => set((state) => ({
        ...state,
        ...updatedCompany
    }))
}));