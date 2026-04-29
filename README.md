# ReactJS Exercises – Nível 2 (Variáveis + Arrays)

Este repositório contém uma série de 15 exercícios práticos focados na manipulação de **Arrays** e **Variáveis** utilizando ReactJS. O objetivo é fortalecer os fundamentos de lógica de programação dentro do ecossistema React.

## ⚠️ Dica Técnica Crucial: Vite Config
O passo da propriedade `base` no arquivo `vite.config.js` é o que mais gera erros em builds. **Sem ele, as imagens e scripts não carregam**, pois os caminhos tornam-se incorretos. Certifique-se de configurar a base adequadamente para o seu ambiente de deploy.

## 🚀 Conceitos Praticados
Neste nível, exploramos como o React lida com estruturas de dados JavaScript:

* **Acesso por índice:** Uso de `array[0]`, `array[1]` e `array[array.length - 1]` para buscar dados.
* **Propriedade `.length`:** Utilizada para contar itens (Exercícios 12 e 13).
* **Método `.map()`:** Primeiro contato com a renderização dinâmica usando o `index` para gerar listas numeradas (Exercício 15).
* **Identidade Visual:** O badge do header foi alterado para **roxo** para diferenciar visualmente do Nível 1.

## 📝 Lista de Exercícios Concluídos

1.  **Array de Frutas:** Criar array e mostrar a primeira fruta.
2.  **Duas Frutas:** Mostrar "Eu gosto de Banana e Uva" usando índices.
3.  **Array de Números:** Mostrar o primeiro e segundo número da lista.
4.  **Soma de Array:** Calcular e mostrar a soma (ex: 5 + 10 + 15 = 30).
5.  **Lista de Alunos:** Exibir nomes formatados como Aluno 1, 2 e 3.
6.  **Cidade Favorita:** Selecionar um item específico de uma lista de cidades.
7.  **Array de Preços:** Exibir valores formatados com "R$".
8.  **Lista de Cores:** Mostrar múltiplas cores em uma única frase.
9.  **Soma de Idades:** Somar especificamente as duas primeiras idades do array.
10. **Jogos:** Mostrar jogo favorito a partir de uma lista.
11. **Comidas:** Expressar uma escolha de refeição baseada no array.
12. **Tamanho do Array:** Usar `.length` para mostrar a quantidade de filmes.
13. **Primeiro e Último:** Mostrar dinamicamente o início e o fim da lista de linguagens.
14. **Soma de Três:** Realizar a soma de três valores numéricos.
15. **Mini Lista de Tarefas:** Renderização de uma lista completa e numerada.

## 🛠️ Como Executar o Projeto

Para rodar qualquer um dos exercícios acima:

1.  Certifique-se de que a estrutura base do Vite está pronta.
2.  Substitua os arquivos necessários na pasta `src/`.
3.  No terminal, execute:
    ```bash
    npm run dev
    ```

---
*Desenvolvido como parte do cronograma de estudos de ReactJS.*
