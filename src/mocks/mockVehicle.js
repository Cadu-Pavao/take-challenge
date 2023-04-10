import { carPhotosgallery } from "../assets/Photos";
/**
 * Needs to add another mock beyond the other, because the first one is incomplete to edit page. I utilze him in de vehicle page :)
 */
export const vehicle = {
  dados: {
    seminovo: true,
    placa: "FAS08ADS",
    renavam: 39209832871,
    marca: "Nissan",
    modelo: "March",
    carroceria: "Hatchback",
    fabricacao: 2013,
    ano_modelo: 2014,
    versao: "S 1.6 16V FLEX 111CV 4x2 4P",
    combustivel: "Etanol/Gasolina",
    cambio: "Manual",
    quilometragem: 70000,
    cor: "Prata",
  },
  acessorios: ["Alarme", "Ar condicionado", "Injeção eletrônica"],
  caracteristicas: ["Dono único", "Bem cuidado"],
  localizacao: {
    estado: "São Paulo",
    cidade: "Ribeirão Preto",
  },
  classificacao: "A",
  condicao: "Excelente",
  tags: ["Particular", "Super Oferta"],
  avaliacao: {
    preco_max: 30900,
    preco_min: 30900,
    faixa_preco_min: 65000,
    faixa_preco_max: 69000,
    faixa_preco_particular: 67500,
  },
  nota_inspecao: "imagem",
  fotos: carPhotosgallery,
  contatos: [
    {
      nome: "Alfa Bravo",
      email: "email@domainname.com",
      telefone: "(16) 99999-9999",
    },
    {
      nome: "Charlie Delta",
      email: "email@domainname.com",
      telefone: "(16) 99999-9999",
    },
    {
      nome: "Echo foxtrot",
      email: "email@domainname.com",
      telefone: "(16) 99999-9999",
    },
  ],
};
