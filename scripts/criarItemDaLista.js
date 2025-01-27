//exportação padrão, não usa {}- exporta uma unica funcionalidade
import gerarDiaDaSemana from "./gerarDiasSemana.js";

const inputItem = document.getElementById('input-item');
let contador = 0;

export function criarItemDaLita() {

    if (inputItem.value === "") {
        alert('Por Favor, insira um item!');
        return;
    }

    const itemDaLista = document.createElement('li');
    const containerItemDaLista = document.createElement('div');
    containerItemDaLista.classList.add('lista-item-container');
    const inputCheckbox = document.createElement('input');
    inputCheckbox.type = 'checkbox';
    inputCheckbox.id = 'checkbox-' + contador++;
    const nomeItem = document.createElement('p');
    nomeItem.innerText = inputItem.value;

    inputCheckbox.addEventListener('click', function() {
        if(inputCheckbox.checked) {
            nomeItem.style.textDecoration = 'line-through';
            }else {
                nomeItem.style.textDecoration = 'none';
            }
    })

    containerItemDaLista.appendChild(inputCheckbox);
    containerItemDaLista.appendChild(nomeItem);
    
    itemDaLista.appendChild(containerItemDaLista);

    const dataCompleta = gerarDiaDaSemana();

    const itemData = document.createElement('p');
    itemData.innerText = dataCompleta;
    itemData.classList.add('texto-data');
    itemDaLista.appendChild(itemData);

    return itemDaLista;
}