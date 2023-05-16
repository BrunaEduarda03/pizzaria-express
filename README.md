
<div align="center"  >       
<img alt="PIZZARIA EXPRESS" src="https://github.com/BrunaEduarda03/pizzaria-express/assets/73250271/813d34a3-0a39-4373-80b0-540cb23ce4a6"  align="center" width="250px" />
</h1> 

       
 
</div>

## :man_technologist: Sobre a aplicação

A aplicação tem como objetivo a criação de um sistema para administradores e atendentes de uma pizzaria como exemplo(ou qualquer restaurante em geral) para uma melhor organização e otimização dos atendimentos devido a grande demanda de clientes.

## 🚀 Tecnologias 
Aplicação completa para pizzaria desenvolvida em 3 camadas(Back-end/Front-end/Mobile).
Esse projeto foi desenvolvido com as seguintes tecnologias:

- **UI/UX**
- Figma

- **Backend**           
  - Express
  - PrismaORM
  - Beekeper
  - PostgreSQL
  - JWT
  - TypeScript
  - Docker
  - Mocha
  - Chai
  - ESLint
  
- **FrontEnd**
  - NextJs
  - TypeScript
  - SCSS
  - Axios
  - Nookies
  - ESLint
  - React-toastify
  - Docker
- **Mobile**
  - React Native com Expo
  - TypeScript
  - AsyncStorage para armazenamento de chaves/valores
   
## 💻 Figma
### Atendente
![Captura de tela de 2023-05-16 14-15-29](https://github.com/BrunaEduarda03/pizzaria-express/assets/73250271/c2ff2773-a07f-44f0-9b84-602747a51cd7)

### Administração
![Captura de tela de 2023-05-16 15-17-35](https://github.com/BrunaEduarda03/pizzaria-express/assets/73250271/005e1134-22a7-4a0e-8177-dbf720abd40b)
 
   
## 💻 DEMO
https://github.com/BrunaEduarda03/pizzaria-express/assets/73250271/526f4ccc-bdb1-46db-b2a6-397e05be7abd


## 🛠️ Como instalar

⚠️ **Atenção**: Você precisa ter o docker e o docker-compose instalados em sua máquina para rodar o projeto.

**#Clonar este repositório**

```
git clone git@github.com:BrunaEduarda03/pizzaria-express.git
```



**#Renomeie o arquivo ".env.example" que está na pasta raiz do projeto para ".env"**

### 🐋 Rodando com Docker

⚠️ **Atenção**: Você precisa ter o docker e o docker-compose instalados em sua máquina para rodar o projeto.

**#Rode o seguinte comando para subir o container (Pode demorar alguns minutos ☕)**[](https://emojipedia.org/pt/café/)

    docker compose up

**#Para executar os testes de cobertura do backend, use os seguintes comandos:**

```

docker exec -it backend /bin/sh
yarn run test:coverage

```

### ‍💻 Rodando sem Docker

⚠️ **Atenção**: Você precisa ter o node instalado em sua máquina para rodar o projeto.

### __Back-end__
Na pasta backend, renomeie o arquivo _.env.local-example_ para _.env.local_<br/>
Informe a URL da API na variável __DATABASE_URL__.<br/>
Informe a palavra secreta da API na variável __JWT_SECRET__<br/>
```bash
# Instale as dependências
$ yarn install

# Para iniciar a aplicação na porta 3333
$ yarn dev
```
### __Front-end__
  Na pasta web, informe o IP da aplicação back-end no arquivo _src/services/api.ts_<br/>
```bash
# Instale as dependências
$ yarn install

# Para iniciar a aplicação na porta 3000
$ yarn dev
```
### __Mobile__
  Na pasta web, informe o IP da aplicação back-end no arquivo _src/services/api.ts_<br/>
```bash
# Instale as dependências
$ yarn install

# Para iniciar a aplicação
$ expo start
```

**#Para executar os testes de cobertura do backend, use os seguintes comandos:**

```
npm run test:coverage

```
### :balance_scale: Licença
Este projeto está licenciado sob a [licença MIT](LICENSE).

#### :speaking_head:  Dúvidas ou feedbacks sobre o projeto!

E-mail: [**brunaduda37@gmail.com**](mailto:brunaduda37@gmail.com)

Linkedin: [Bruna Eduarda](https://www.linkedin.com/in/bruna-eduarda-a06a1b18b/)

---


Desenvolvido por: [Bruna Eduarda](https://www.linkedin.com/in/bruna-eduarda-a06a1b18b/)
