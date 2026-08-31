"use strict";
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
    <button class="btn-excluir" onclick="excluirPaciente(this)">
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
    atualizarTotalPacientes();
    nomePaciente.value = "";
    cpfPaciente.value = "";
    nasciPaciente.value = "";
    telefonePaciente.value = "";
    emailPaciente.value = "";
    enderecoPaciente.value = "";
}
function limparFormularioPaciente() {
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
// EXCLUIR PACIENTE DE VERDADE (tela + localStorage)
function excluirPaciente(botao) {
    const linha = botao.closest("tr");
    const indice = Array.from(linha.parentElement.children).indexOf(linha);
    linha.remove();
    const pacientesSalvos = localStorage.getItem("pacientes");
    const listaPaciente = pacientesSalvos ? JSON.parse(pacientesSalvos) : [];
    listaPaciente.splice(indice, 1);
    localStorage.setItem("pacientes", JSON.stringify(listaPaciente));
    atualizarTotalPacientes();
}
function carregarPacientesSalvos() {
    const tabelaPaciente = document.getElementById("paciente-cadastrado");
    const pacientesSalvos = localStorage.getItem("pacientes");
    const listaPaciente = pacientesSalvos ? JSON.parse(pacientesSalvos) : [];
    listaPaciente.forEach((paciente) => {
        const novaLinha = document.createElement("tr");
        novaLinha.innerHTML = `
      <td>${paciente.nome}</td>
      <td>${paciente.cpf}</td>
      <td>${paciente.nascimento}</td>
      <td>${paciente.telefone}</td>
      <td>${paciente.email}</td>
      <td>
        <button class="btn-excluir" onclick="excluirPaciente(this)">
          <img src="../img/icon-trash.svg" alt="Icone excluir">
        </button>
      </td>
    `;
        tabelaPaciente.appendChild(novaLinha);
    });
    atualizarTotalPacientes();
}
function atualizarTotalPacientes() {
    const totalAtual = document.querySelectorAll("#paciente-cadastrado tr").length;
    const totalSpanPaciente = document.getElementById("total-de-pacientes-cadastrados");
    if (totalSpanPaciente) {
        totalSpanPaciente.textContent = totalAtual.toString();
    }
}
//# sourceMappingURL=paciente.js.map