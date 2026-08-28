//ÁREA PACIENTE
function salvarFormularioPaciente(): void {

  const tabelaPaciente = document.getElementById("paciente-cadastrado") as HTMLTableSectionElement
  const nomePaciente = document.getElementById("nome-paciente") as HTMLInputElement
  const cpfPaciente = document.getElementById("cpf-paciente") as HTMLInputElement
  const nasciPaciente = document.getElementById("nasci-paciente") as HTMLInputElement
  const telefonePaciente = document.getElementById("tel-paciente") as HTMLInputElement
  const emailPaciente = document.getElementById("email-paciente") as HTMLInputElement
  const enderecoPaciente = document.getElementById("endereco-paciente") as HTMLInputElement

  const novaLinhaPaciente = document.createElement("tr")
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
  tabelaPaciente.appendChild(novaLinhaPaciente)

  //parte de localStorage
  const salvaPaciente = {
    nome: nomePaciente.value,
    cpf: cpfPaciente.value,
    nascimento: nasciPaciente.value,
    telefone: telefonePaciente.value,
    email: emailPaciente.value,
    endereco: enderecoPaciente.value
  }

  const pacientesSalvos = localStorage.getItem("pacientes")
  const listaPaciente = pacientesSalvos ? JSON.parse(pacientesSalvos) : []
  listaPaciente.push(salvaPaciente);
  localStorage.setItem("pacientes", JSON.stringify(listaPaciente))

  atualizarTotalPacientes(); // ← atualiza o total na própria página

  // limpa o formulário depois de salvar
  nomePaciente.value = ""
  cpfPaciente.value = ""
  nasciPaciente.value = ""
  telefonePaciente.value = ""
  emailPaciente.value = ""
  enderecoPaciente.value = ""
}

function limparFormularioPaciente(): void {

  const nomePaciente = document.getElementById("nome-paciente") as HTMLInputElement
  const cpfPaciente = document.getElementById("cpf-paciente") as HTMLInputElement
  const nasciPaciente = document.getElementById("nasci-paciente") as HTMLInputElement
  const telefonePaciente = document.getElementById("tel-paciente") as HTMLInputElement
  const emailPaciente = document.getElementById("email-paciente") as HTMLInputElement
  const enderecoPaciente = document.getElementById("endereco-paciente") as HTMLInputElement

  nomePaciente.value = ""
  cpfPaciente.value = ""
  nasciPaciente.value = ""
  telefonePaciente.value = ""
  emailPaciente.value = ""
  enderecoPaciente.value = ""
}

function carregarPacientesSalvos(): void {
  const tabelaPaciente = document.getElementById("paciente-cadastrado") as HTMLTableSectionElement
  const pacientesSalvos = localStorage.getItem("pacientes")
  const listaPaciente = pacientesSalvos ? JSON.parse(pacientesSalvos) : []

  listaPaciente.forEach((paciente: any) => {
    const novaLinha = document.createElement("tr");
    novaLinha.innerHTML = `
      <td>${paciente.nome}</td>
      <td>${paciente.cpf}</td>
      <td>${paciente.nascimento}</td>
      <td>${paciente.telefone}</td>
      <td>${paciente.email}</td>
      <td>
        <button class="btn-excluir" onclick="this.closest('tr').remove()">
          <img src="../img/icon-trash.svg" alt="Icone excluir">
        </button>
      </td>
    `;
    tabelaPaciente.appendChild(novaLinha);
  });

  atualizarTotalPacientes();
}

// ATUALIZAR TOTAL DE PACIENTE EM SUA PROPRIA PAGINA 
function atualizarTotalPacientes(): void {
  const totalAtual = document.querySelectorAll("#paciente-cadastrado tr").length

  const totalSpanPaciente = document.getElementById("total-de-pacientes-cadastrados") as HTMLSpanElement
  if (totalSpanPaciente) {
    totalSpanPaciente.textContent = totalAtual.toString()
  }
}

