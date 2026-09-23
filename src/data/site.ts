export const site = {
  name: "RS Soluções Digitais",
  shortName: "RS Soluções",
  slogan: "Não é só entrar no Mercado Livre. É entrar com estrutura",
  url: "https://www.rssolucoesdigitais.com.br",
  phone: "+55 34 3333-2525",
  email: "contato@rssolucoesdigitais.com.br",
  whatsapp: "553433332525",
};

export const whatsappLink = (message = "Olá! Quero estruturar minha operação no Mercado Livre com a RS Soluções Digitais.") =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;

export const navItems = [
  { label: "Como funciona", to: "#solucao" },
  { label: "Processo", to: "#processo" },
  { label: "Já vende no ML?", to: "#ja-vende" },
  { label: "Contato", to: "#contato" },
];

export const problemPoints = [
  "Produtos mal estruturados",
  "Informações desorganizadas",
  "Falta de padronização",
  "Dificuldade no controle de estoque",
  "Processos desconectados",
  "Gestão complicada",
  "Dificuldade para organizar marketplace e operação interna",
];

export interface Service {
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    title: "Implantação no Mercado Livre",
    description: "Organização da estrutura necessária para iniciar ou profissionalizar a atuação da empresa no marketplace.",
  },
  {
    title: "Estruturação de Produtos",
    description: "Organização de títulos, descrições, categorias, informações, variações, imagens e demais dados necessários para os anúncios.",
  },
  {
    title: "E-commerce",
    description: "Estruturação da operação digital para que marketplace, produtos e processos funcionem de forma mais organizada.",
  },
  {
    title: "ERP e Gestão",
    description: "Organização das ferramentas e processos utilizados para acompanhar estoque, pedidos, produtos e gestão da operação.",
  },
  {
    title: "Treinamento e Mentoria",
    description: "Orientação para que sua equipe compreenda melhor os processos e consiga acompanhar a operação com mais segurança.",
  },
  {
    title: "Suporte",
    description: "Acompanhamento durante o desenvolvimento e evolução da operação digital.",
  },
];

export const processSteps = [
  {
    title: "Entendemos sua empresa",
    description: "Analisamos como sua operação funciona atualmente e identificamos os pontos que precisam ser estruturados.",
  },
  {
    title: "Organizamos a base",
    description: "Produtos, informações, processos e ferramentas começam a ser preparados para a operação digital.",
  },
  {
    title: "Implantamos a operação",
    description: "A estrutura é organizada para que sua empresa possa atuar no Mercado Livre de forma mais profissional.",
  },
  {
    title: "Preparamos sua equipe",
    description: "Sua equipe recebe orientação para entender melhor os processos e acompanhar a operação.",
  },
  {
    title: "Acompanhamos sua evolução",
    description: "A RS oferece suporte para auxiliar sua empresa durante o desenvolvimento da operação.",
  },
];
