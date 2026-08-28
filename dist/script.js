"use strict";
// ATUALIZAR TOTAL DE MEDICO
function atualizarTotalMedicosDashboard() {
    const medicosSalvos = localStorage.getItem("medicos");
    const listaMedicos = medicosSalvos ? JSON.parse(medicosSalvos) : [];
    const totalMedicoSpan = document.getElementById("total-medico");
    if (totalMedicoSpan) {
        totalMedicoSpan.textContent = listaMedicos.length.toString();
    }
}
if (document.getElementById("medicos-cadastrado")) {
    carregarMedicosSalvos();
}
atualizarTotalMedicosDashboard();
// ATUALIZAR TOTAL DE PACIENTE
function atualizarTotalPacientesDashboard() {
    const pacientesSalvos = localStorage.getItem("pacientes");
    const listaPacientes = pacientesSalvos ? JSON.parse(pacientesSalvos) : [];
    const totalPacienteSpan = document.getElementById("total-pacientes");
    if (totalPacienteSpan) {
        totalPacienteSpan.textContent = listaPacientes.length.toString();
    }
}
if (document.getElementById("paciente-cadastrado")) {
    carregarPacientesSalvos();
}
atualizarTotalPacientesDashboard();
// ATUALIZAR TOTAL DE CONSULTAS MARCADOS
function carregarProximasConsultas() {
    const consultasSalvas = localStorage.getItem("consultas");
    const listaConsultas = consultasSalvas ? JSON.parse(consultasSalvas) : [];
    const listaProximasConsultas = document.querySelector(".lista-proxima-consultas ul");
    if (!listaProximasConsultas)
        return;
    listaProximasConsultas.innerHTML = "";
    listaConsultas.forEach((consulta) => {
        const item = document.createElement("li");
        item.innerHTML = `
      <h1>${consulta.paciente}</h1>
      <h2>${consulta.medico}</h2>
    `;
        listaProximasConsultas.appendChild(item);
    });
}
function atualizarTotalConsultasDashboard() {
    const consultasSalvas = localStorage.getItem("consultas");
    const listaConsultas = consultasSalvas ? JSON.parse(consultasSalvas) : [];
    const totalConsultasSpan = document.getElementById("total-consultas");
    if (totalConsultasSpan) {
        totalConsultasSpan.textContent = listaConsultas.length.toString();
    }
}
carregarProximasConsultas();
atualizarTotalConsultasDashboard();
//# sourceMappingURL=script.js.map