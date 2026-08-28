#  Sistema Médico (em andamento)
 
Sistema web de gestão para clínicas médicas, desenvolvido com HTML, SCSS e TypeScript. O objetivo é oferecer um dashboard simples e funcional para organizar informações de pacientes, consultas e atendimentos.
 
##  Sobre o projeto
 
O **Sistema Médico** é um painel administrativo pensado para o dia a dia de uma clínica, permitindo visualizar e gerenciar dados de forma prática. O projeto está sendo construído com foco em fundamentos sólidos de front-end: HTML semântico, estilização organizada com SCSS e lógica de interação em TypeScript, sem frameworks.
 
##  Funcionalidades
 
- [ ] Cadastro de pacientes
- [ ] Listagem e busca de pacientes
- [ ] Agendamento de consultas
- [ ] Dashboard com resumo de atendimentos
- [ ] Edição e exclusão de registros
- [ ] Interface responsiva
 
##  Tecnologias utilizadas
 
- HTML5
- SCSS / Sass
- TypeScript
- Git e GitHub

##  Estrutura do projeto
 
```
sistema-medico/
├── dist/
├── img/
├── node_modules/
├── paginas/
│   ├── css/
│   │   └── medico.css
│   ├── consulta.html
│   ├── medico.html
│   └── pacientes.html
├── src/
  medico.ts     → cadastra, lista, remove médicos (dono da chave "medicos")
  paciente.ts   → cadastra, lista, remove pacientes (dono da chave "pacientes")
  consulta.ts   → LÊ "medicos" e "pacientes" do localStorage,
                  usa pra preencher dois <select>,
                  e depois salva a consulta em cima disso (chave "consultas")

├── index.html
├── package.json
├── package-lock.json
├── style.scss
├── style.css
├── style.css.map
├── tsconfig.json
└── README.md
```

##  Preview
 
> Ainda será adicionada uma preview do site.
 
##  Próximos passos
 
- Adicionar validação de formulários
- Persistir dados com localStorage ou back-end
- Melhorar responsividade para mobile
- Refatorar nomenclatura de classes CSS
