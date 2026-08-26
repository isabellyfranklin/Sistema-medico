"use strict";
// ÁREA MEDICA
function salvarFormularioMedico() {
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
    nomeMedico.value = "";
    crmMedico.value = "";
    especialidadeMedico.value = "";
    telMedico.value = "";
    emailMedico.value = "";
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
function limparFormularioMedico() {
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
//ÁREA PACIENTE
function salvarFormularioPaciente() {
    const tabelaPaciente = document.getElementById("paciente-cadastrado");
    const nomePaciente = document.getElementById("nome-paciente");
    const cpfPaciente = document.getElementById("cpf-paciente");
    const nasciPaciente = document.getElementById("nasci-paciente");
    const telefonePaciente = document.getElementById("tel-paciente");
    const emailPaciente = document.getElementById("email-paciente");
    const enderecoPaciente = document.getElementById("endereco-paciente");
    const novaLinhaPaciente = document.createElement("tr");
    novaLinhaPaciente.innerHTML = `

    <td>${nomePaciente.value}</td>
    <td>${cpfPaciente.value}</td>
    <td>${nasciPaciente.value}</td>
    <td>${telefonePaciente.value}</td>
    <td>${emailPaciente.value}</td>  
    <td>
    <button class="btn-excluir" onclick="this.closest('tr').remove()">
        <img src="../img/icon-trash.svg" alt="Icone excluir">
      </button>
    </td>  
  `;
    tabelaPaciente.appendChild(novaLinhaPaciente);
    //parte de localStorage
    const salvaPaciente = {
        nome: nomePaciente.value,
        cpf: cpfPaciente.value,
        nascimento: nasciPaciente.value,
        telefone: telefonePaciente.value,
        email: emailPaciente.value,
        endereco: enderecoPaciente.value
    };
    const pacientesSalvos = localStorage.getItem("pacientes");
    const listaPaciente = pacientesSalvos ? JSON.parse(pacientesSalvos) : [];
    listaPaciente.push(salvaPaciente);
    localStorage.setItem("pacientes", JSON.stringify(listaPaciente));
    // limpa o formulário depois de salvar
    nomePaciente.value = "";
    cpfPaciente.value = "";
    nasciPaciente.value = "";
    telefonePaciente.value = "";
    emailPaciente.value = "";
    enderecoPaciente.value = "";
}
function limparFormularioPaciente() {
    const tabelaPaciente = document.getElementById("paciente-cadastrado");
    const nomePaciente = document.getElementById("nome-paciente");
    const cpfPaciente = document.getElementById("cpf-paciente");
    const nasciPaciente = document.getElementById("nasci-paciente");
    const telefonePaciente = document.getElementById("tel-paciente");
    const emailPaciente = document.getElementById("email-paciente");
    const enderecoPaciente = document.getElementById("endereco-paciente");
    nomePaciente.value = "";
    cpfPaciente.value = "";
    nasciPaciente.value = "";
    telefonePaciente.value = "";
    emailPaciente.value = "";
    enderecoPaciente.value = "";
}
//# sourceMappingURL=script.js.map