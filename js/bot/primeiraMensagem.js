import { randomPalavra } from "./utils.js";

const saudacoes = [
    "Olá",
    "Opa",
    "Hello",
    "Hi",
    "E aí"
];

const saudacoes2 = [
    "como vai?",
    "tudo bem?",
    "tranquilo?"
];

export const textoSaudacao = 
`
    ${randomPalavra(saudacoes)}, ${randomPalavra(saudacoes2)} Sou um chatbot desenvolvido para te ajudar com qualquer assunto relacionada a algumas linguagens de programação e alguns frameworks, etc...
`;