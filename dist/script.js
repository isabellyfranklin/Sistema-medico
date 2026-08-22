"use strict";
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
    <td><button class="btn-excluir"><img src="../img/icon-trash.svg" alt="Icone excluir"></button></td>
  `;
    listaTabelaMedico.appendChild(novaLinha);
}
//# sourceMappingURL=script.js.map