"use strict";
// ÁREA MEDICA
function salvarMedico() {
    const listaTabelaMedico = document.getElementById("medicos-cadastrado");
    const nomeMedico = document.getElementById("nome-medico");
    const crmMedico = document.getElementById("crm");
    const especialidadeMedico = document.getElementById("especialidade-medico");
    const telMedico = document.getElementById("telefone-medico");
    const emailMedico = document.getElementById("email-medico");
    const novaLinha = document.createElement("tr");
    novaLinha.innerHTML = `
    <td>${nomeMedico.value}</td>
    <td>${crmMedico.value}</td>
    <td>${especialidadeMedico.value}</td>
    <td>${telMedico.value}</td>
    <td>${emailMedico.value}</td>
    <td> 
    <button
     class="btn-excluir"
     onclick="this.closest('tr').remove()"
     ><img src="../img/icon-trash.svg" alt="Icone excluir">
     </button>
     </td>
  `;
    atualizarTotalMedicos();
    listaTabelaMedico.appendChild(novaLinha);
    // salva o médico no localStorage
    const novoMedico = {
        nome: nomeMedico.value,
        crm: crmMedico.value,
        especialidade: especialidadeMedico.value,
        telefone: telMedico.value,
        email: emailMedico.value
    };
    const medicosSalvos = localStorage.getItem("medicos");
    const listaMedicos = medicosSalvos ? JSON.parse(medicosSalvos) : [];
    listaMedicos.push(novoMedico);
    localStorage.setItem("medicos", JSON.stringify(listaMedicos));
}
// REMOVER MEDICO
function removerMedico() {
    const listaTabelaMedico = document.getElementById("medicos-cadastrado");
    const nomeMedico = document.getElementById("nome-medico");
    const crmMedico = document.getElementById("crm");
    const especialidadeMedico = document.getElementById("especialidade-medico");
    const telMedico = document.getElementById("telefone-medico");
    const emailMedico = document.getElementById("email-medico");
    nomeMedico.value = "";
    crmMedico.value = "";
    especialidadeMedico.value = "";
    telMedico.value = "";
    emailMedico.value = "";
}
// ATUALIZAR TOTAL DE MEDICO NA TELA INICIAL
function atualizarTotalMedicos() {
    const totalAtual = document.querySelectorAll("#medicos-cadastrado tr").length;
    const totalSpanMedico = document.getElementById("total-de-medicos-cadastrados");
    if (totalSpanMedico) {
        totalSpanMedico.textContent = totalAtual.toString();
    }
    localStorage.setItem("total-medicos", totalAtual.toString());
}
function salvaConsulta() {
}
//# sourceMappingURL=script.js.map