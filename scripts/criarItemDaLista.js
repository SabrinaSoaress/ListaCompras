import gerarDiaDaSemana from "./gerarDiasSemana.js";

const inputItem = document.getElementById('input-item');
let contador = 0;

export function criarItemDaLita(nome = '', data = '', isChecked = false) {
    if (nome === "" && inputItem.value === "") {
        alert('Por Favor, insira um item!');
        return;
    }

    const itemDaLista = document.createElement('li');
    const containerItemDaLista = document.createElement('div');
    containerItemDaLista.classList.add('lista-item-container');

    // Criação do checkbox
    const inputCheckbox = document.createElement('input');
    inputCheckbox.type = 'checkbox';
    inputCheckbox.id = 'checkbox-' + contador++;
    inputCheckbox.checked = isChecked;  // Definir o estado do checkbox

    // Criação do botão de exclusão (antes do nome do item)
    const botaoExcluir = document.createElement('button');
    botaoExcluir.innerText = 'X';
    botaoExcluir.classList.add('btn-excluir');
    botaoExcluir.addEventListener('click', function () {
        itemDaLista.remove();  // Remove o item da lista
    });

    // Criação do nome do item
    const nomeItem = document.createElement('p');
    nomeItem.innerText = nome || inputItem.value;  // Usar nome passado ou o valor do input

    // Adiciona o evento para riscar o nome quando o checkbox for marcado/desmarcado
    inputCheckbox.addEventListener('click', function () {
        if (inputCheckbox.checked) {
            nomeItem.style.textDecoration = 'line-through';
        } else {
            nomeItem.style.textDecoration = 'none';
        }
    });

    // Criação da data
    const dataCompleta = data || gerarDiaDaSemana();  // Usar data passada ou gerar nova
    const itemData = document.createElement('p');
    itemData.innerText = dataCompleta;
    itemData.classList.add('texto-data');

    // Montando o item da lista
    containerItemDaLista.appendChild(inputCheckbox);
    containerItemDaLista.appendChild(nomeItem);
    containerItemDaLista.appendChild(botaoExcluir);
    itemDaLista.appendChild(containerItemDaLista);
    itemDaLista.appendChild(itemData);

    return itemDaLista;
}
