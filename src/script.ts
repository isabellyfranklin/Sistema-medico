// MENU 
function clickMenu():void{
    const navBar = document.getElementById("navbar-list")
      navBar?.classList.toggle("ativo")

  }

// ATUALIZAR TOTAL DE MEDICO
function atualizarTotalMedicosDashboard(): void {
  const medicosSalvos = localStorage.getItem("medicos");
  const listaMedicos = medicosSalvos ? JSON.parse(medicosSalvos) : [];

  const totalMedicoSpan = document.getElementById("total-medico") as HTMLSpanElement;
  if (totalMedicoSpan) {
    totalMedicoSpan.textContent = listaMedicos.length.toString();
  }
}

if (document.getElementById("medicos-cadastrado")) {
  carregarMedicosSalvos();
}

atualizarTotalMedicosDashboard();

// ATUALIZAR TOTAL DE PACIENTE
function atualizarTotalPacientesDashboard(): void {
  const pacientesSalvos = localStorage.getItem("pacientes")
  const listaPacientes = pacientesSalvos ? JSON.parse(pacientesSalvos) : []

  const totalPacienteSpan = document.getElementById("total-pacientes") as HTMLSpanElement;
  if (totalPacienteSpan) {
    totalPacienteSpan.textContent = listaPacientes.length.toString()
  }
}

if (document.getElementById("paciente-cadastrado")) {
  carregarPacientesSalvos();
}

atualizarTotalPacientesDashboard();

// ATUALIZAR TOTAL DE CONSULTAS MARCADOS
function carregarProximasConsultas(): void {
  const consultasSalvas = localStorage.getItem("consultas");
  const listaConsultas = consultasSalvas ? JSON.parse(consultasSalvas) : [];

  const listaProximasConsultas = document.querySelector(".lista-proxima-consultas ul") as HTMLUListElement;
  if (!listaProximasConsultas) return;

  listaProximasConsultas.innerHTML = "";

  listaConsultas.forEach((consulta: any) => {
    const item = document.createElement("li");
    item.innerHTML = `
      <h1>${consulta.paciente}</h1>
      <h2>${consulta.medico}</h2>
    `;
    listaProximasConsultas.appendChild(item);
  });
}

function atualizarTotalConsultasDashboard(): void {
  const consultasSalvas = localStorage.getItem("consultas");
  const listaConsultas = consultasSalvas ? JSON.parse(consultasSalvas) : [];

  const totalConsultasSpan = document.getElementById("total-consultas") as HTMLSpanElement;
  if (totalConsultasSpan) {
    totalConsultasSpan.textContent = listaConsultas.length.toString();
  }
}

carregarProximasConsultas();
atualizarTotalConsultasDashboard();