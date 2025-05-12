import { textoSaudacao } from "./bot/primeiraMensagem.js";
import { mensagemChat } from "./bot/utils.js";
import { limparMensagem } from "./bot/utils.js";
import { linguagensAndFrameworks } from "./bot/mensagens.js";
import { nadaEncontrado } from "./bot/mensagens.js";
import { randomText } from "./bot/utils.js";


export const mensagemUsuario = document.querySelector("#message-text");
const buttonEnviar = document.querySelector("#message-send");
export const sectionChat = document.querySelector("#section-chat");

let primeiraMensagem = false;

class Chat {
    constructor(mensagem) {
        this.mensagem = mensagem;
        this.verificarMensagem = false;
    }

    mensagemUser() {

        if (this.mensagem.trim() === "" || !this.mensagem) {
            primeiraMensagem = false;
            this.verificarMensagem = true;
            return;
        }

        mensagemChat(this.mensagem, "chat-user");

    }

    mensagemBot() {
        return new Promise((resolve) => {
            setTimeout(() => {

                if (!primeiraMensagem && !this.verificarMensagem) {
                    resolve(mensagemChat(textoSaudacao, "chat-bot"))
                    primeiraMensagem = true;
                    return;
                };

                if (primeiraMensagem) {

                    let encontrado = false;

                    const mensagemSplit = this.mensagem.replaceAll(",", " ").replaceAll("?", " ").trim().toLowerCase().split(" ");
                    // lf -> linguagens And Frameworks
                    linguagensAndFrameworks.filter((lf) => {
                        for (let palavra = 0; palavra < mensagemSplit.length; palavra++) {

                            if (lf.palavrasChaves.includes(mensagemSplit[palavra])) {
                                resolve(mensagemChat(randomText(lf.mensagens), "chat-bot"));
                                encontrado = true;
                                break;
                            }
                        }
                    })

                    if (!encontrado) {
                        resolve(mensagemChat(nadaEncontrado, "chat-bot"))
                    }


                }

            }, 1500)            
        })
    }

};

buttonEnviar.addEventListener("click", () => {

    async function chatBot() {
        const chat = new Chat(mensagemUsuario.value);
        chat.mensagemUser();
        limparMensagem();
        await chat.mensagemBot();
    }

    chatBot();

})

