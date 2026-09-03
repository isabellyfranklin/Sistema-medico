function clickMenuConsulta(): void {
    const navBar = document.getElementById("navbar-list")
    navBar?.classList.toggle("ativo")
}

// ÁREA CONSULTA
function carregarSelects(): void {
  const medicosSalvos = localStorage.getItem("medicos")
  const listaMedicos = medicosSalvos ? JSON.parse(medicosSalvos) : []

  const selectMedico = document.getElementById("select-medico") as HTMLSelectElement
  listaMedicos.forEach((medico: any) => {
    const option = document.createElement("option")
    option.value = medico.nome
    option.textContent = `${medico.nome} - ${medico.especialidade}`
    selectMedico.appendChild(option)
  })

  const pacientesSalvos = localStorage.getItem("pacientes")
  const listaPacientes = pacientesSalvos ? JSON.parse(pacientesSalvos) : []

  const selectPaciente = document.getElementById("select-paciente") as HTMLSelectElement
  listaPacientes.forEach((paciente: any) => {
    const option = document.createElement("option")
    option.value = paciente.nome
    option.textContent = paciente.nome
    selectPaciente.appendChild(option)
  });
}

function agendarConsulta(): void {

  const tabelaConsultas = document.getElementById("tconsultas-agendadas") as HTMLTableSectionElement
  const selectMedico = document.getElementById("select-medico") as HTMLSelectElement
  const selectPaciente = document.getElementById("select-paciente") as HTMLSelectElement
  const dataConsulta = document.getElementById("data-consulta") as HTMLInputElement
  const horarioConsulta = document.getElementById("horario-consulta") as HTMLInputElement
  const obsConsulta = document.getElementById("obs-consulta") as HTMLInputElement

  const novaLinha = document.createElement("tr")
  novaLinha.innerHTML = `
    <td>${selectPaciente.value}</td>
    <td>${selectMedico.value}</td>
    <td>${dataConsulta.value}</td>
    <td>${horarioConsulta.value}</td>
    <td>${obsConsulta.value}</td>
    <td>
      <button class="btn-excluir" onclick="excluirConsulta(this)">
        <img src="../img/icon-trash.svg" alt="Icone excluir">
      </button>
    </td>
  `;
  tabelaConsultas.appendChild(novaLinha)

  const novaConsulta = {
    paciente: selectPaciente.value,
    medico: selectMedico.value,
    data: dataConsulta.value,
    horario: horarioConsulta.value,
    observacoes: obsConsulta.value
  }

  const consultasSalvas = localStorage.getItem("consultas")
  const listaConsultas = consultasSalvas ? JSON.parse(consultasSalvas) : []
  listaConsultas.push(novaConsulta)
  localStorage.setItem("consultas", JSON.stringify(listaConsultas))

  atualizarTotalConsultas()

  selectMedico.value = ""
  selectPaciente.value = ""
  dataConsulta.value = ""
  horarioConsulta.value = ""
  obsConsulta.value = ""
}

function cancelarConsulta(): void {

  const selectMedico = document.getElementById("select-medico") as HTMLSelectElement
  const selectPaciente = document.getElementById("select-paciente") as HTMLSelectElement
  const dataConsulta = document.getElementById("data-consulta") as HTMLInputElement
  const horarioConsulta = document.getElementById("horario-consulta") as HTMLInputElement
  const obsConsulta = document.getElementById("obs-consulta") as HTMLInputElement

  selectMedico.value = ""
  selectPaciente.value = ""
  dataConsulta.value = ""
  horarioConsulta.value = ""
  obsConsulta.value = ""
}

// EXCLUIR CONSULTA DE VERDADE (tela + localStorage)
function excluirConsulta(botao: HTMLButtonElement): void {
  const linha = botao.closest("tr") as HTMLTableRowElement;
  const indice = Array.from(linha.parentElement!.children).indexOf(linha);

  linha.remove();

  const consultasSalvas = localStorage.getItem("consultas");
  const listaConsultas = consultasSalvas ? JSON.parse(consultasSalvas) : [];

  listaConsultas.splice(indice, 1);
  localStorage.setItem("consultas", JSON.stringify(listaConsultas));

  atualizarTotalConsultas();
}

function carregarConsultasSalvas(): void {
  const tabelaConsultas = document.getElementById("tconsultas-agendadas") as HTMLTableSectionElement
  const consultasSalvas = localStorage.getItem("consultas")
  const listaConsultas = consultasSalvas ? JSON.parse(consultasSalvas) : []

  listaConsultas.forEach((consulta: any) => {

    const novaLinha = document.createElement("tr")
    novaLinha.innerHTML = `
      <td>${consulta.paciente}</td>
      <td>${consulta.medico}</td>
      <td>${consulta.data}</td>
      <td>${consulta.horario}</td>
      <td>${consulta.observacoes}</td>
      <td>
        <button class="btn-excluir" onclick="excluirConsulta(this)">
          <img src="../img/icon-trash.svg" alt="Icone excluir">
        </button>
      </td>
    `
    tabelaConsultas.appendChild(novaLinha)
  })

  atualizarTotalConsultas()
}

function atualizarTotalConsultas(): void {
  const totalAtual = document.querySelectorAll("#tconsultas-agendadas tr").length

  const totalSpan = document.getElementById("total-de-consultas-agendadas") as HTMLSpanElement
  if (totalSpan) {
    totalSpan.textContent = totalAtual.toString()
  }
}

if (document.getElementById("select-medico")) {
  carregarSelects()
  carregarConsultasSalvas()
}