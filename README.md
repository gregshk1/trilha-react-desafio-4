Objetivo
Criar uma tela de login funcional, com validação de formulário e estilo moderno e centralizado.

Implementação da Validação
Utilizei o React Hook Form para controle do formulário e validação dos campos.

Os campos do formulário são:

Email: validado para garantir que seja obrigatório e que o formato seja um e-mail válido.

Senha: validada para ser obrigatória e com comprimento mínimo de 6 caracteres.

A função handleSubmit do React Hook Form foi usada para controlar o envio do formulário.

Mensagens de erro específicas são exibidas para cada campo quando a validação falha.

A validação ocorre no front-end, melhorando a experiência do usuário antes do envio ao servidor.

Estilização
Usamos styled-components para criar componentes estilizados que compõem o layout do formulário.

O formulário foi centralizado na tela usando flexbox (display: flex; justify-content: center; align-items: center; height: 100vh;).

Aplicamos um fundo degradê suave para o container principal para um visual moderno.

O formulário possui:

Fundo branco com cantos arredondados e sombra leve para destacar da página.

Inputs com bordas arredondadas e mudança de cor na borda ao focar, melhorando a usabilidade.

Texto centralizado no título para melhor apresentação.

O layout é responsivo, limitando a largura máxima do formulário para manter legibilidade.

Tecnologias e Ferramentas
React (com TypeScript)

React Hook Form (validação do formulário)

styled-components (estilização modular e reutilizável)

TypeScript para tipagem estática e maior segurança no desenvolvimento
![unknown_2025 05 15-11 50_1](https://github.com/user-attachments/assets/67211527-c12d-46f2-a76a-90835f1a69f6)



