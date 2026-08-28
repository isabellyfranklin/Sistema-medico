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
  listaTabelaMedico.appendChild(novaLinha);

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

  atualizarTotalMedicos();

 //para limpar
  nomeMedico.value = ""
  crmMedico.value = ""
  especialidadeMedico.value = ""
  telMedico.value = ""
  emailMedico.value = ""

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

function carregarMedicosSalvos(): void {
  const listaTabelaMedico = document.getElementById("medicos-cadastrado") as HTMLTableSectionElement;
  const medicosSalvos = localStorage.getItem("medicos");
  const listaMedicos = medicosSalvos ? JSON.parse(medicosSalvos) : [];

  listaMedicos.forEach((medico: any) => {
    const novaLinha = document.createElement("tr");
    novaLinha.innerHTML = `
      <td>${medico.nome}</td>
      <td>${medico.crm}</td>
      <td>${medico.especialidade}</td>
      <td>${medico.telefone}</td>
      <td>${medico.email}</td>
      <td>
        <button class="btn-excluir" onclick="this.closest('tr').remove()">
          <img src="../img/icon-trash.svg" alt="Icone excluir">
        </button>
      </td>
    `;
    listaTabelaMedico.appendChild(novaLinha);
  });

  atualizarTotalMedicos();
}

// só roda essa função se a página atual tiver a tabela de médico
if (document.getElementById("medicos-cadastrado")) {
  carregarMedicosSalvos();
}

// ATUALIZAR TOTAL DE MEDICO NA PRÓPRIA PAGINA
function atualizarTotalMedicos(): void {
  const totalAtual = document.querySelectorAll("#medicos-cadastrado tr").length;

  const totalSpanMedico = document.getElementById("total-de-medicos-cadastrados") as HTMLSpanElement;
  if (totalSpanMedico) {
    totalSpanMedico.textContent = totalAtual.toString();
  }

  localStorage.setItem("total-medicos", totalAtual.toString());
}

