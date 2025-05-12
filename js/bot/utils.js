import { sectionChat } from "../index.js";
import { mensagemUsuario } from "../index.js";

export const randomPalavra = (array) => {
    let random = Math.floor(Math.random() * array.length);
    let palavra = array[random];
    return palavra;
}

export const randomText = (array) => {
    let random = Math.floor(Math.random() * array.length);
    let text = array[random];
    return text
}

export const mensagemChat = (mensagem, tipoChat) => {
    const template = 
    `
        <div class="${tipoChat}">
            <p>${mensagem}</p>
        </div>
    `;

    const parser = new DOMParser();
    const templateHtml = parser.parseFromString(template, "text/html");
    const chat = templateHtml.querySelector("div");
    sectionChat.appendChild(chat);
}

export const limparMensagem = () => {
    mensagemUsuario.value = '';
}