
function gerarDiaDaSemana () {
    const diaDaSemana = new Date().toLocaleDateString('pt-BR', {weekday: 'long'});
    const data = new Date().toLocaleDateString('pt-BR');
    const horario = new Date().toLocaleTimeString('pt-BR', {hour: 'numeric', minute: 'numeric'});
    const dataCompleta = `${diaDaSemana} (${data}) ás ${horario}`;
    return dataCompleta
}

export default gerarDiaDaSemana;