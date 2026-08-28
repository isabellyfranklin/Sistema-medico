"use strict";
// ÁREA CONSULTA
// preenche os selects com médicos e pacientes já cadastrados
function carregarSelects() {
    const medicosSalvos = localStorage.getItem("medicos");
    const listaMedicos = medicosSalvos ? JSON.parse(medicosSalvos) : [];
    const selectMedico = document.getElementById("select-medico");
    listaMedicos.forEach((medico) => {
        const option = document.createElement("option");
        option.value = medico.nome;
        option.textContent = `${medico.nome} - ${medico.especialidade}`;
        selectMedico.appendChild(option);
    });
    const pacientesSalvos = localStorage.getItem("pacientes");
    const listaPacientes = pacientesSalvos ? JSON.parse(pacientesSalvos) : [];
    const selectPaciente = document.getElementById("select-paciente");
    listaPacientes.forEach((paciente) => {
        const option = document.createElement("option");
        option.value = paciente.nome;
        option.textContent = paciente.nome;
        selectPaciente.appendChild(option);
    });
}
function agendarConsulta() {
    const tabelaConsultas = document.getElementById("tconsultas-agendadas");
    const selectMedico = document.getElementById("select-medico");
    const selectPaciente = document.getElementById("select-paciente");
    const dataConsulta = document.getElementById("data-consulta");
    const horarioConsulta = document.getElementById("horario-consulta");
    const obsConsulta = document.getElementById("obs-consulta");
    const novaLinha = document.createElement("tr");
    novaLinha.innerHTML = `
    <td>${selectPaciente.value}</td>
    <td>${selectMedico.value}</td>
    <td>${dataConsulta.value}</td>
    <td>${horarioConsulta.value}</td>
    <td>${obsConsulta.value}</td>
    <td>
      <button class="btn-excluir" onclick="this.closest('tr').remove()">
        <img src="../img/icon-trash.svg" alt="Icone excluir">
      </button>
    </td>
  `;
    tabelaConsultas.appendChild(novaLinha);
    // salva no localStorage
    const novaConsulta = {
        paciente: selectPaciente.value,
        medico: selectMedico.value,
        data: dataConsulta.value,
        horario: horarioConsulta.value,
        observacoes: obsConsulta.value
    };
    const consultasSalvas = localStorage.getItem("consultas");
    const listaConsultas = consultasSalvas ? JSON.parse(consultasSalvas) : [];
    listaConsultas.push(novaConsulta);
    localStorage.setItem("consultas", JSON.stringify(listaConsultas));
    atualizarTotalConsultas();
    // limpa o formulário
    selectMedico.value = "";
    selectPaciente.value = "";
    dataConsulta.value = "";
    horarioConsulta.value = "";
    obsConsulta.value = "";
}
function cancelarConsulta() {
    const selectMedico = document.getElementById("select-medico");
    const selectPaciente = document.getElementById("select-paciente");
    const dataConsulta = document.getElementById("data-consulta");
    const horarioConsulta = document.getElementById("horario-consulta");
    const obsConsulta = document.getElementById("obs-consulta");
    selectMedico.value = "";
    selectPaciente.value = "";
    dataConsulta.value = "";
    horarioConsulta.value = "";
    obsConsulta.value = "";
}
function carregarConsultasSalvas() {
    const tabelaConsultas = document.getElementById("tconsultas-agendadas");
    const consultasSalvas = localStorage.getItem("consultas");
    const listaConsultas = consultasSalvas ? JSON.parse(consultasSalvas) : [];
    listaConsultas.forEach((consulta) => {
        const novaLinha = document.createElement("tr");
        novaLinha.innerHTML = `
      <td>${consulta.paciente}</td>
      <td>${consulta.medico}</td>
      <td>${consulta.data}</td>
      <td>${consulta.horario}</td>
      <td>${consulta.observacoes}</td>
      <td>
        <button class="btn-excluir" onclick="this.closest('tr').remove()">
          <img src="../img/icon-trash.svg" alt="Icone excluir">
        </button>
      </td>
    `;
        tabelaConsultas.appendChild(novaLinha);
    });
    atualizarTotalConsultas();
}
function atualizarTotalConsultas() {
    const totalAtual = document.querySelectorAll("#tconsultas-agendadas tr").length;
    const totalSpan = document.getElementById("total-de-consultas-agendadas");
    if (totalSpan) {
        totalSpan.textContent = totalAtual.toString();
    }
}
// roda só se a página tiver os elementos de consulta
if (document.getElementById("select-medico")) {
    carregarSelects();
    carregarConsultasSalvas();
}
//# sourceMappingURL=consulta.js.map