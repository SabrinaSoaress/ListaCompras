//export Nomeada usa {} na importação - exporta multiplas partes
import { criarItemDaLita } from "./scripts/criarItemDaLista.js";

const listaDeCompras = document.getElementById('lista-de-compras');
const botaoAdicionar = document.getElementById('adicionar-item');


botaoAdicionar.addEventListener('click', (evento) => {
    evento.preventDefault();
    const itemDaLista = criarItemDaLita();
    listaDeCompras.appendChild(itemDaLista);
    verificarListaVazia();

})

const mensagemListaVazia = document.querySelector('.mensagem-lista-vazia');

function verificarListaVazia () {
    const itensDaLista = listaDeCompras.querySelectorAll('li');
    if(itensDaLista.length === 0 ) {
        mensagemListaVazia.style.display = 'block'
    }else {
        mensagemListaVazia.style.display = 'none'
    }
}