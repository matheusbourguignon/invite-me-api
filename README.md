## invite-me
- Backend para o projeto da faculdade UNISUAM, que atua como um gerenciador de entrada em eventos.

## Bibliotecas utilizadas

### [Framework NextJS](https://nestjs.com/)

### Motivos de utilizar

O NestJS é um framework de backend para Node.js que tem ganhado cada vez mais popularidade devido à sua arquitetura robusta e conjunto de recursos que facilitam o desenvolvimento de aplicações escaláveis e bem estruturadas.

**Principais vantagens:**

**Baseado em TypeScript:** O NestJS utiliza TypeScript, proporcionando tipagem estática, melhorando a qualidade do código e facilitando a detecção de erros durante o desenvolvimento.

**Arquitetura modular:** Inspirado no Angular, o NestJS adota uma arquitetura modular, promovendo a organização do código em módulos, controladores, serviços e provedores. Isso facilita a manutenção e o teste da aplicação.

**Injeção de dependência:** O framework possui um sistema de injeção de dependência embutido, permitindo que você gerencie as dependências de forma clara e eficiente.

**Suporte a HTTP:** O NestJS oferece suporte nativo para HTTP, facilitando a criação de APIs RESTful.

**Comunidade ativa:** Possui uma comunidade crescente e ativa, o que significa que você encontrará diversos recursos, tutoriais e bibliotecas para auxiliar no desenvolvimento.

**Escalabilidade:** A arquitetura modular e a utilização de padrões de projeto como o CQRS (Command Query Responsibility Segregation) e Event Sourcing permitem construir aplicações altamente escaláveis.

**Testável:** O NestJS facilita a escrita de testes unitários e de integração, garantindo a qualidade do código.

**Extensibilidade:** Permite a utilização de diversas bibliotecas e ferramentas do ecossistema Node.js, oferecendo grande flexibilidade.

**Desenvolvimento rápido:** A estrutura bem definida e os recursos prontos para uso agilizam o desenvolvimento de novas funcionalidades.

**Produtividade:** Com o NestJS, você pode criar aplicações robustas e escaláveis de forma mais rápida e eficiente.

### Bibliotecas

- [NextJS Passaport](https://docs.nestjs.com/recipes/passport)
- [NextJS Config](https://docs.nestjs.com/techniques/configuration)
- [NextJS JWT](https://docs.nestjs.com/security/authentication)

### Ambiente Local

Para a execucao local utilizamos um docker que disponibiliza um postgres.

### Ambiente de PROD

Para o ambiente de PROD, foi utilizado o vercel que permitir o deploy da api e o uso de um banco de dados gratuito.


## Instalacao das dependencias

```bash
$ npm install
```

## Compilar e executar o projeto

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Executar testes

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
