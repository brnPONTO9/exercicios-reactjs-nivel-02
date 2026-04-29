📘 Exercícios ReactJS – Nível 2 (Arrays e Variáveis)

Este projeto contém exercícios práticos em ReactJS com foco em manipulação de arrays, variáveis e renderização dinâmica.

🚀 Como rodar o projeto
npm install
npm run dev

Estrutura igual ao nível 1 — basta substituir os arquivos dentro de src/.

⚠️ Configuração importante (Vite)

O ponto mais crítico do projeto está no arquivo:

vite.config.js

Sem configurar o base, o projeto pode apresentar problemas como:

Imagens não carregando
Scripts quebrando
Caminhos incorretos
Exemplo:
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/nome-do-repositorio/',
})
🧠 Conceitos trabalhados
Acesso a arrays por índice (array[0])
Uso de .length
Soma de valores
Interpolação de strings
Renderização dinâmica com .map()
Uso de index para listas numeradas
📚 Exercícios
1. Array de frutas
const frutas = ["Maçã", "Banana", "Uva"]

Saída:

Primeira fruta: Maçã
2. Mostrar duas frutas

Saída:

Eu gosto de Banana e Uva
3. Array de números
const numeros = [10, 20, 30]

Saída:

Primeiro número: 10
Segundo número: 20
4. Soma de números
const numeros = [5, 10, 15]

Saída:

Resultado da soma: 30
5. Array de nomes
const nomes = ["Ana", "Carlos", "João"]

Saída:

Aluno 1: Ana
Aluno 2: Carlos
Aluno 3: João
6. Cidade favorita
const cidades = ["São Paulo", "Rio", "Curitiba"]

Saída:

Minha cidade favorita é Rio
7. Array de preços
const precos = [10, 25, 40]

Saída:

Preço do produto 1: R$10
Preço do produto 2: R$25
8. Lista de cores
const cores = ["Azul", "Vermelho", "Verde"]

Saída:

Minhas cores favoritas são: Azul, Vermelho e Verde
9. Array de idades
const idades = [18, 21, 30]

Saída:

A soma das duas primeiras idades é: 39
10. Array de jogos
const jogos = ["Minecraft", "FIFA", "GTA"]

Saída:

Meu jogo favorito é GTA
11. Array de comidas
const comidas = ["Pizza", "Hambúrguer", "Sushi"]

Saída:

Hoje eu quero comer Pizza
12. Tamanho do array
const filmes = ["Matrix", "Batman", "Avatar", "Interestelar"]

Saída:

Quantidade de filmes: 4
13. Primeiro e último item
const linguagens = ["JavaScript", "Python", "Java", "C#"]

Saída:

Primeira linguagem: JavaScript
Última linguagem: C#
14. Soma de valores
const valores = [2, 4, 6]

Saída:

Resultado: 12
15. Lista de tarefas
const tarefas = ["Estudar React", "Fazer exercícios", "Praticar código"]

Saída:

Minhas tarefas hoje:
1 - Estudar React
2 - Fazer exercícios
3 - Praticar código
📌 Observações finais
Este nível marca o início da renderização dinâmica com .map()
O uso de arrays é fundamental para aplicações React reais
Ideal para reforçar lógica antes de avançar para componentes mais complexos
