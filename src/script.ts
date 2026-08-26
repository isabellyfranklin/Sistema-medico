// ÁREA MEDICA
function salvarFormularioMedico():void {

  const listaTabelaMedico = document.getElementById("medicos-cadastrado") as HTMLTableSectionElement
  const nomeMedico = document.getElementById("nome-medico") as HTMLInputElement
  const crmMedico = document.getElementById("crm") as HTMLInputElement
  const especialidadeMedico = document.getElementById("especialidade-medico") as HTMLSelectElement;
  const telMedico = document.getElementById("telefone-medico") as HTMLInputElement
  const emailMedico = document.getElementById("email-medico") as HTMLInputElement

  const novaLinha = document.createElement("tr")
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
  nomeMedico.value = ""
  crmMedico.value = ""
  especialidadeMedico.value = ""
  telMedico.value = ""
  emailMedico.value = ""


  // salva o médico no localStorage
  const novoMedico = {
    nome: nomeMedico.value,
    crm: crmMedico.value,
    especialidade: especialidadeMedico.value,
    telefone: telMedico.value,
    email: emailMedico.value
  }

  const medicosSalvos = localStorage.getItem("medicos")
  const listaMedicos = medicosSalvos ? JSON.parse(medicosSalvos) : [];
  listaMedicos.push(novoMedico);
  localStorage.setItem("medicos", JSON.stringify(listaMedicos))
}

// REMOVER MEDICO
function limparFormularioMedico():void {

  const listaTabelaMedico = document.getElementById("medicos-cadastrado") as HTMLTableSectionElement;
  const nomeMedico = document.getElementById("nome-medico") as HTMLInputElement
  const crmMedico = document.getElementById("crm") as HTMLInputElement
  const especialidadeMedico = document.getElementById("especialidade-medico") as HTMLSelectElement;
  const telMedico = document.getElementById("telefone-medico") as HTMLInputElement
  const emailMedico = document.getElementById("email-medico") as HTMLInputElement

  nomeMedico.value = ""
  crmMedico.value = ""
  especialidadeMedico.value = ""
  telMedico.value = ""
  emailMedico.value = ""
}

// ATUALIZAR TOTAL DE MEDICO NA TELA INICIAL
function atualizarTotalMedicos(): void {
  const totalAtual = document.querySelectorAll("#medicos-cadastrado tr").length

  const totalSpanMedico = document.getElementById("total-de-medicos-cadastrados") as HTMLSpanElement
  if (totalSpanMedico) {
    totalSpanMedico.textContent = totalAtual.toString()
  }

  localStorage.setItem("total-medicos", totalAtual.toString())
}

//ÁREA PACIENTE
function salvarFormularioPaciente():void {

  const tabelaPaciente = document.getElementById("paciente-cadastrado") as HTMLInputElement
  const nomePaciente = document.getElementById("nome-paciente") as HTMLInputElement
  const cpfPaciente = document.getElementById("cpf-paciente")as HTMLInputElement
  const nasciPaciente = document.getElementById("nasci-paciente")as HTMLInputElement
  const telefonePaciente = document.getElementById("tel-paciente")as HTMLInputElement
  const emailPaciente = document.getElementById("email-paciente")as HTMLInputElement
  const enderecoPaciente = document.getElementById("endereco-paciente")as HTMLInputElement

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
  `
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
  nomePaciente.value = ""
  cpfPaciente.value = ""
  nasciPaciente.value = ""
  telefonePaciente.value = ""
  emailPaciente.value = ""
  enderecoPaciente.value =""
}

function limparFormularioPaciente(){

  const tabelaPaciente = document.getElementById("paciente-cadastrado") as HTMLInputElement
  const nomePaciente = document.getElementById("nome-paciente") as HTMLInputElement
  const cpfPaciente = document.getElementById("cpf-paciente")as HTMLInputElement
  const nasciPaciente = document.getElementById("nasci-paciente")as HTMLInputElement
  const telefonePaciente = document.getElementById("tel-paciente")as HTMLInputElement
  const emailPaciente = document.getElementById("email-paciente")as HTMLInputElement
  const enderecoPaciente = document.getElementById("endereco-paciente")as HTMLInputElement

  nomePaciente.value = ""
  cpfPaciente.value = ""
  nasciPaciente.value = ""
  telefonePaciente.value = ""
  emailPaciente.value = ""
  enderecoPaciente.value =""
}