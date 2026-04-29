# ⚛️ ReactJS Exercises – Nível 2 (Variáveis + Arrays)

Repositório dedicado ao segundo nível de aprendizado em ReactJS, focado intensamente na manipulação de **Arrays** e **Variáveis** dentro de componentes.

## 🛠️ Tecnologias Utilizadas
* **ReactJS** (Vite)
* **JavaScript (ES6+)**
* **CSS3** (Estilização de componentes)

## 📌 Nota Técnica Importante (Vite)
Durante o desenvolvimento, um ponto crítico identificado foi a configuração do `base` no arquivo `vite.config.js`. 
> **Atenção:** Sem o preenchimento correto do `base`, os caminhos para imagens e scripts ficam incorretos após o build, impedindo o carregamento dos assets. Este passo é essencial para garantir que o projeto funcione corretamente em diferentes ambientes de hospedagem.

## 🚀 O que foi explorado neste nível?
Nesta etapa, o foco saiu de variáveis simples para estruturas de dados mais complexas:

- **Acesso Dinâmico:** Manipulação de dados através de índices (`array[i]`).
- **Lógica com .length:** Uso da propriedade para cálculos dinâmicos e identificação do último elemento da lista.
- **Renderização de Listas:** Primeiro contato com o método `.map()` para transformar arrays em elementos JSX, utilizando o `index` para gerar listas numeradas.
- **Operações Aritméticas:** Integração de lógica matemática diretamente na exibição dos dados.

## 📝 Exercícios Implementados
O projeto engloba 15 exercícios práticos que cobrem desde a criação de arrays simples até a renderização de listas de tarefas:

1.  **Arrays de Strings:** Frutas, Nomes, Cidades, Cores, Jogos e Comidas.
2.  **Arrays Numéricos:** Operações de soma e acesso a valores de preços e idades.
3.  **Manipulação de Coleções:** Uso de `.length` para contagem de filmes e identificação de linguagens de programação (primeira e última).
4.  **Componentização de Listas:** Criação de uma mini lista de tarefas numerada dinamicamente.

## 🎨 Diferencial Visual
Para facilitar a organização dos módulos de estudo, este nível utiliza um **Badge Roxo** no header, diferenciando-o visualmente do Nível 1.

## ⚙️ Como rodar o projeto localmente
```bash
# 1. Clone o repositório
git clone [https://github.com/seu-usuario/nome-do-repo.git](https://github.com/seu-usuario/nome-do-repo.git)

# 2. Instale as dependências
npm install

# 3. Inicie o servidor de desenvolvimento
npm run dev
