# ProjectContacts

Um sistema simples de gerenciamento de contatos com autenticação de usuário, desenvolvido com Node.js, Express, EJS e MongoDB.

---

##  Funcionalidades

-  Cadastro de usuário com login e logout.
-  Criação, edição, visualização e exclusão de contatos (CRUD).
-  Feedback via flash messages (sucesso/erro).
-  Redirecionamentos adequados após login, logout ou operações em contatos.

---

##  Tecnologias usadas

- **Node.js** – runtime JavaScript de backend.
- **Express.js** – framework para servidor web.
- **MongoDB** com **Mongoose** – banco de dados e modelagem.
- **EJS** – template engine para views.
- **express-session** – gerenciamento de sessões.
- **connect-flash** – mensagens temporárias para feedback.
- **dotenv** – gerenciamento de variáveis de ambiente.

---

##  Estrutura do projeto

```
project-root/
├── src/
│   ├── controllers/
│   │   ├── contatoController.js
│   │   ├── homeController.js
│   │   └── loginController.js
│   ├── models/
│   │   ├── ContatoModel.js
│   │   ├── HomeModel.js
│   │   └── LoginModel.js
│   ├── middlewares/
│   │   └── middleware.js
│   ├── views/
│   │   ├── includes/ (partials como head, nav, footer)
│   │   ├── index.ejs
│   │   ├── contato.ejs
│   │   ├── login.ejs
│   │   └── login‑logado.ejs
├── public/ (arquivos estáticos: CSS, JS, imagens)
├── server.js (configurações do Express)
├── routes.js (rotas da aplicação)
├── .env (variáveis sensíveis, não comitado)
├── .gitignore
├── package.json
└── README.md
```

---

##  Instalação e execução

1. Faça o clone do repositório:
   ```bash
   git clone https://github.com/Otaaviio/ProjectContacts.git
   cd ProjectContacts
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Crie o arquivo `.env` com as variáveis necessárias (exemplo):
   ```env
   MONGODB_URI=<sua_string_mongodb>
   SESSION_SECRET=<uma_string_secreta>
   ```

4. Execute o projeto:
   ```bash
   npm start
   ```

5. Acesse no navegador:
   ```
   http://localhost:3000
   ```

---

##  Uso

- **Cadastrar usuário**: acesse `/login` para criar uma conta ou logar.
- Após login, você será redirecionado automaticamente para a página inicial.
- Lá, poderá visualizar seus contatos ou cadastrar novos.
- Ao sair (logout), a lista de contatos não será mais exibida até que o usuário faça login novamente.

---

##  Melhorias futuras

-  Validação mais robusta em formulários (cliente e servidor).
-  Autorização para garantir que cada usuário veja apenas seus contatos.
-  Estilização aprimorada com algum framework CSS moderno.
-  Paginação ou busca nos contatos.
-  API REST para integração com front-end separada.

---

##  Contribuição

Contribuições são bem-vindas!  
Para contribuir:
1. Fork do repositório  
2. Crie uma branch com sua feature (`git checkout -b feature/nome-da-feature`)  
3. Faça commit das alterações (`git commit -m "Descrição do commit"`)  
4. Envie para o repositório remoto (`git push origin feature/nome-da-feature`)  
5. Abra um Pull Request.

---

##  Licença

Este projeto está disponível sob a licença MIT. Sinta-se à vontade para usar e adaptar conforme sua necessidade.