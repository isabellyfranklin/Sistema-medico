function salvarMedico():void {

  const listaTabelaMedico = document.getElementById("medicos-cadastrado") as HTMLTableSectionElement;
  const nomeMedico = document.getElementById("nome-medico") as HTMLInputElement;
  const crmMedico = document.getElementById("crm") as HTMLInputElement;
  const especialidadeMedico = document.getElementById("especialidade-medico") as HTMLSelectElement;
  const telMedico = document.getElementById("telefone-medico") as HTMLInputElement;
  const emailMedico = document.getElementById("email-medico") as HTMLInputElement;

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