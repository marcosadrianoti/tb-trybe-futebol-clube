# Projeto Trybe Futebol Clube! :soccer:
Projeto desenvolvido por mim durante o curso de Desenvolvimento Web na Trybe. Divulgado aqui como portfólio de aprendizado.

<details>
<summary><strong>Objetivos do projeto:</strong></summary>
 
OBS: Front-end já disponível no projeto.
  * Construir um back-end `dockerizado` utilizando modelagem de dados através do `Sequelize`.
  * Verificar se eu era capaz de:
    * Aplicar o método `TDD`.
    * Utilizar `docker-compose`.
</details>
<details>
<summary><strong> Requisitos do projeto:</strong></summary>

  * Desenvolva em `/app/backend/src/database` nas pastas correspondentes, uma migration e um model para a tabela de times
  * Desenvolva testes que cubram no mínimo 5 por cento dos arquivos em `/app/backend/src`, com um mínimo de 7 linhas cobertas
  * Desenvolva o endpoint `/teams` no back-end de forma que ele possa retornar todos os times corretamente
  * Desenvolva testes que cubram no mínimo 10 por cento dos arquivos em `/app/backend/src`, com um mínimo de 19 linhas cobertas
  * Desenvolva o endpoint `/teams/:id` no back-end de forma que ele possa retornar dados de um time específico
  * Desenvolva em `/app/backend/src/database` nas pastas correspondentes, uma migration e um model para a tabela de pessoas usuárias
  * Desenvolva testes que cubram no mínimo 15 por cento dos arquivos em `/app/backend/src`, com um mínimo de 25 linhas cobertas
  * Desenvolva o endpoint `/login` no back-end de maneira que ele permita o acesso com dados válidos no front-end
  * Desenvolva testes que cubram no mínimo 20 por cento dos arquivos em `/app/backend/src`, com um mínimo de 35 linhas cobertas
  * Desenvolva o endpoint `/login` no back-end de maneira que ele não permita o acesso com um email não cadastrado ou senha incorreta no front-end
  * Desenvolva testes que cubram no mínimo 30 por cento dos arquivos em `/app/backend/src`, com um mínimo de 45 linhas cobertas
  * Desenvolva um middleware de validação para o `token`, verificando se ele é válido, e desenvolva o endpoint `/login/role` no back-end de maneira que ele retorne os dados corretamente no front-end
  * Desenvolva em `/app/backend/src/database` nas pastas correspondentes, uma migration e um model para a tabela de partidas
  * Desenvolva testes que cubram no mínimo 45 por cento dos arquivos em `/app/backend/src`, com um mínimo de 70 linhas cobertas
  * Desenvolva o endpoint `/matches` de forma que os dados apareçam corretamente na tela de partidas no front-end
  * Desenvolva o endpoint `/matches` de forma que seja possível filtrar somente as partidas em andamento, e também filtrar somente as partidas finalizadas, na tela de partidas do front-end
  * Desenvolva o endpoint `/matches/:id/finish` de modo que seja possível finalizar uma partida no banco de dados
  * Desenvolva o endpoint `/matches/:id` de forma que seja possível atualizar partidas em andamento
  * Desenvolva testes que cubram no mínimo 60 por cento dos arquivos em `/app/backend/src`, com um mínimo de 80 linhas cobertas
  * Desenvolva o endpoint `/matches` de modo que seja possível cadastrar uma nova partida em andamento no banco de dados
  * Desenvolva o endpoint `/matches` de forma que não seja possível inserir uma partida com times iguais nem com um time que não existe na tabela de times
  * Desenvolva o endpoint `/leaderboard/home` de forma que retorne as informações do desempenho dos times da casa com as seguintes propriedades: `name`, `totalPoints`, `totalGames`, `totalVictories`, `totalDraws`, `totalLosses`, `goalsFavor` e `goalsOwn`
  * Desenvolva o endpoint `/leaderboard/home` de forma que seja possível filtrar as classificações dos times da casa na tela de classificação do front-end com os dados iniciais do banco de dados, incluindo as propriedades `goalsBalance` e `efficiency`, além das propriedades do requisito anterior
  * Desenvolva o endpoint `/leaderboard/home` de forma que seja possível filtrar as classificações dos times da casa na tela de classificação do front-end, e atualizar a tabela ao inserir a partida Corinthians 2 X 1 Internacional
  * Desenvolva o endpoint `/leaderboard/away` de forma que retorne as informações do desempenho dos times visitantes com as seguintes propriedades: `name`, `totalPoints`, `totalGames`, `totalVictories`, `totalDraws`, `totalLosses`, `goalsFavor` e `goalsOwn`
  * Desenvolva o endpoint `/leaderboard/away`, de forma que seja possível filtrar as classificações dos times quando visitantes na tela de classificação do front-end, com os dados iniciais do banco de dados, incluindo as propriedades `goalsBalance` e `efficiency`, além das propriedades do requisito anterior
  * Desenvolva o endpoint `/leaderboard/away` de forma que seja possível filtrar a classificações dos times quando visitantes na tela de classificação do frontend e ao inserir a partida Corinthians 2 X 1 Internacional a tabela será atualizada
  * Desenvolva o endpoint `/leaderboard` de forma que seja possível filtrar a classificação geral dos times na tela de classificação do front-end com os dados iniciais do banco de dados.
</details>
  
## Rodando o projeto localmente

Para rodar o projeto em sua máquina, abra seu terminal, crie um diretório no local de sua preferência com o comando `mkdir` e acesse o diretório criado com o comando `cd`:

```bash
mkdir meu-diretorio &&
cd meu-diretorio
```

Clone o projeto com o comando `git clone`:

```bash
git clone git@github.com:marcosadrianoti/tb-trybes-and-dragons.git
```

Acesse o diretório do projeto com o comando `cd`:

```bash
cd tb-trybes-and-dragons
```

Instale as dependências executando:

```bash
npm install
```

Com o Docker instalado em sua máquina, execute:

```bash
npm run compose:up
```

Execute a aplicação:

```bash
npm run start
```

Para exercutar os teste:

```bash
npm run test
```
