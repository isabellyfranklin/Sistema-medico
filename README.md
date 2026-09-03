# Sistema Médico

O **Sistema Médico** é um painel administrativo pensado para o dia a dia de uma clínica, permitindo visualizar e gerenciar dados de forma prática. O projeto está sendo construído com foco em fundamentos sólidos de front-end: HTML semântico, estilização organizada com SCSS e lógica de interação em TypeScript, sem frameworks.

 **Acesse o projeto:** https://isabellyfranklin.github.io/Sistema-medico/

## Funcionalidades

- Cadastro de médicos
- Cadastro de pacientes
- Agendamento de consultas, com seleção de médicos e pacientes já cadastrados
- Dashboard com resumo de médicos, pacientes e consultas
- Edição e exclusão de registros
- Dados persistidos no localStorage
- Interface responsiva (desktop, tablet e mobile)

## Tecnologias utilizadas

- HTML5
- SCSS / Sass
- TypeScript
- Git e GitHub

## Estrutura do projeto

```
sistema-medico/
├── dist/                    # arquivos TypeScript compilados
├── img/
├── paginas/
│   ├── css/
│   │   └── medico.css
│   ├── consulta.html
│   ├── medico.html
│   └── pacientes.html
├── src/
│   ├── medico.ts             # cadastra, lista e remove médicos
│   ├── paciente.ts           # cadastra, lista e remove pacientes
│   └── consulta.ts           # lê médicos e pacientes do localStorage,
│                              # preenche os selects e salva as consultas
├── index.html
├── package.json
├── style.scss
├── style.css
├── tsconfig.json
└── README.md
```

##  Preview
 
<img width="1362" height="790" alt="image" src="https://github.com/user-attachments/assets/2d483b11-7c17-4621-a5fc-5bd9fb3acf33" />
<img width="1357" height="792" alt="image" src="https://github.com/user-attachments/assets/9a9d4a3c-4814-4c91-80df-cf273e8d6662" />
<img width="1341" height="791" alt="image" src="https://github.com/user-attachments/assets/7bd2303b-f9cf-4da8-ab01-e40f378174b1" />
<img width="1352" height="786" alt="image" src="https://github.com/user-attachments/assets/d9ff0208-ec55-44f4-9899-6356d21e1e4d" />




