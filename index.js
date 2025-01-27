//export Nomeada usa {} na importação - exporta multiplas partes
import { criarItemDaLita } from "./scripts/criarItemDaLista.js";
//exportação padrão, não usa {}- exporta uma unica funcionalidade
import verificarListaVazia from "./scripts/verificarListaVazia.js";

const listaDeCompras = document.getElementById('lista-de-compras');
const botaoAdicionar = document.getElementById('adicionar-item');

// Função para salvar os itens da lista no localStorage
function salvarListaNoLocalStorage() {
    const itens = listaDeCompras.querySelectorAll('li');
    const listaArray = [];
    itens.forEach(item => {
        const nomeItem = item.querySelector('p').innerText;
        const itemData = item.querySelector('.texto-data').innerText;
        const itemCheckbox = item.querySelector('input[type="checkbox"]').checked;
        listaArray.push({ nomeItem, itemData, itemCheckbox });
    });
    localStorage.setItem('listaDeCompras', JSON.stringify(listaArray));
}

// Função para carregar a lista do localStorage
function carregarListaDoLocalStorage() {
    const listaSalva = localStorage.getItem('listaDeCompras');
    if (listaSalva) {
        const listaArray = JSON.parse(listaSalva);
        listaArray.forEach(item => {
            const itemDaLista = criarItemDaLita(item.nomeItem, item.itemData, item.itemCheckbox);
            listaDeCompras.appendChild(itemDaLista);
        });
    }
}

botaoAdicionar.addEventListener('click', (evento) => {
    evento.preventDefault();
    const itemDaLista = criarItemDaLita();
    listaDeCompras.appendChild(itemDaLista);
    verificarListaVazia(listaDeCompras);
    salvarListaNoLocalStorage();  // Salva a lista sempre que um item é adicionado
});

carregarListaDoLocalStorage();
verificarListaVazia(listaDeCompras);
