import { useState } from 'react'
import './App.css'

// ─── Exercício 1 ───
function Ex01() {
  const frutas = ["Maçã", "Banana", "Uva"]
  return <p>Primeira fruta: <span className="val">{frutas[0]}</span></p>
}

// ─── Exercício 2 ───
function Ex02() {
  const frutas = ["Maçã", "Banana", "Uva"]
  return <p>Eu gosto de <span className="val">{frutas[1]}</span> e <span className="val">{frutas[2]}</span></p>
}

// ─── Exercício 3 ───
function Ex03() {
  const numeros = [10, 20, 30]
  return (
    <div>
      <p>Primeiro número: <span className="val">{numeros[0]}</span></p>
      <p>Segundo número: <span className="val">{numeros[1]}</span></p>
    </div>
  )
}

// ─── Exercício 4 ───
function Ex04() {
  const numeros = [5, 10, 15]
  return (
    <div>
      <p className="explain">
        <span className="var">numeros</span> = [<span className="val">{numeros[0]}</span>, <span className="val">{numeros[1]}</span>, <span className="val">{numeros[2]}</span>]
        <span className="op"> → </span>
        <span className="val">{numeros[0]}</span> + <span className="val">{numeros[1]}</span> + <span className="val">{numeros[2]}</span>
        <span className="op"> = </span>
        <span className="result">{numeros[0] + numeros[1] + numeros[2]}</span>
      </p>
      <p>Resultado da soma: <span className="val">{numeros[0] + numeros[1] + numeros[2]}</span></p>
    </div>
  )
}

// ─── Exercício 5 ───
function Ex05() {
  const nomes = ["Ana", "Carlos", "João"]
  return (
    <div>
      <p>Aluno 1: <span className="val">{nomes[0]}</span></p>
      <p>Aluno 2: <span className="val">{nomes[1]}</span></p>
      <p>Aluno 3: <span className="val">{nomes[2]}</span></p>
    </div>
  )
}

// ─── Exercício 6 ───
function Ex06() {
  const cidades = ["São Paulo", "Rio", "Curitiba"]
  return <p>Minha cidade favorita é <span className="val">{cidades[1]}</span></p>
}

// ─── Exercício 7 ───
function Ex07() {
  const precos = [10, 25, 40]
  return (
    <div>
      <p>Preço do produto 1: R$<span className="val">{precos[0]}</span></p>
      <p>Preço do produto 2: R$<span className="val">{precos[1]}</span></p>
    </div>
  )
}

// ─── Exercício 8 ───
function Ex08() {
  const cores = ["Azul", "Vermelho", "Verde"]
  return (
    <p>
      Minhas cores favoritas são: <span className="val">{cores[0]}</span>, <span className="val">{cores[1]}</span> e <span className="val">{cores[2]}</span>
    </p>
  )
}

// ─── Exercício 9 ───
function Ex09() {
  const idades = [18, 21, 30]
  return (
    <div>
      <p className="explain">
        <span className="var">idades</span>[0] = <span className="val">{idades[0]}</span>
        <span className="op"> + </span>
        <span className="var">idades</span>[1] = <span className="val">{idades[1]}</span>
        <span className="op"> = </span>
        <span className="result">{idades[0] + idades[1]}</span>
      </p>
      <p>A soma das duas primeiras idades é: <span className="val">{idades[0] + idades[1]}</span></p>
    </div>
  )
}

// ─── Exercício 10 ───
function Ex10() {
  const jogos = ["Minecraft", "FIFA", "GTA"]
  return <p>Meu jogo favorito é <span className="val">{jogos[2]}</span></p>
}

// ─── Exercício 11 ───
function Ex11() {
  const comidas = ["Pizza", "Hambúrguer", "Sushi"]
  return <p>Hoje eu quero comer <span className="val">{comidas[0]}</span></p>
}

// ─── Exercício 12 ───
function Ex12() {
  const filmes = ["Matrix", "Batman", "Avatar", "Interestelar"]
  return (
    <div>
      <p className="explain">
        <span className="var">filmes</span>.length
        <span className="op"> → </span>
        conta quantos itens tem no array
        <span className="op"> = </span>
        <span className="result">{filmes.length}</span>
      </p>
      <p>Quantidade de filmes: <span className="val">{filmes.length}</span></p>
    </div>
  )
}

// ─── Exercício 13 ───
function Ex13() {
  const linguagens = ["JavaScript", "Python", "Java", "C#"]
  return (
    <div>
      <p className="explain">
        <span className="var">linguagens</span>[0] = primeiro
        <span className="op"> | </span>
        <span className="var">linguagens</span>[linguagens.length - 1] = último
      </p>
      <p>Primeira linguagem: <span className="val">{linguagens[0]}</span></p>
      <p>Última linguagem: <span className="val">{linguagens[linguagens.length - 1]}</span></p>
    </div>
  )
}

// ─── Exercício 14 ───
function Ex14() {
  const valores = [2, 4, 6]
  return (
    <div>
      <p className="explain">
        <span className="val">{valores[0]}</span>
        <span className="op"> + </span>
        <span className="val">{valores[1]}</span>
        <span className="op"> + </span>
        <span className="val">{valores[2]}</span>
        <span className="op"> = </span>
        <span className="result">{valores[0] + valores[1] + valores[2]}</span>
      </p>
      <p>Resultado: <span className="val">{valores[0] + valores[1] + valores[2]}</span></p>
    </div>
  )
}

// ─── Exercício 15 ───
function Ex15() {
  const tarefas = ["Estudar React", "Fazer exercícios", "Praticar código"]
  return (
    <div>
      <p className="profile-title">Minhas tarefas hoje:</p>
      {tarefas.map((tarefa, index) => (
        <p key={index}>
          <span className="val">{index + 1}</span>
          <span className="op"> - </span>
          {tarefa}
        </p>
      ))}
    </div>
  )
}

// ─── Lista de exercícios ───
const exercicios = [
  { numero: 1,  titulo: "Criar um array de frutas",          componente: <Ex01 /> },
  { numero: 2,  titulo: "Mostrar duas frutas",               componente: <Ex02 /> },
  { numero: 3,  titulo: "Array de números",                  componente: <Ex03 /> },
  { numero: 4,  titulo: "Soma de números do array",          componente: <Ex04 /> },
  { numero: 5,  titulo: "Array de nomes",                    componente: <Ex05 /> },
  { numero: 6,  titulo: "Mostrar cidade favorita",           componente: <Ex06 /> },
  { numero: 7,  titulo: "Array de preços",                   componente: <Ex07 /> },
  { numero: 8,  titulo: "Criar lista de cores",              componente: <Ex08 /> },
  { numero: 9,  titulo: "Array de idades",                   componente: <Ex09 /> },
  { numero: 10, titulo: "Array de jogos",                    componente: <Ex10 /> },
  { numero: 11, titulo: "Array de comidas",                  componente: <Ex11 /> },
  { numero: 12, titulo: "Mostrar tamanho do array",          componente: <Ex12 /> },
  { numero: 13, titulo: "Mostrar primeiro e último item",    componente: <Ex13 /> },
  { numero: 14, titulo: "Soma de três números do array",     componente: <Ex14 /> },
  { numero: 15, titulo: "Mini lista de tarefas",             componente: <Ex15 /> },
]

function App() {
  const [aberto, setAberto] = useState(null)

  return (
    <div className="page">
      <header className="header">
        <div className="header-badge">Nível 2</div>
        <h1 className="header-title">Variáveis + Arrays</h1>
        <p className="header-sub">15 exercícios · ReactJS · acesso por índice e .length</p>
      </header>

      <main className="list">
        {exercicios.map((ex) => {
          const isOpen = aberto === ex.numero
          return (
            <div key={ex.numero} className={`card ${isOpen ? 'card--open' : ''}`}>
              <button
                className="card-header"
                onClick={() => setAberto(isOpen ? null : ex.numero)}
              >
                <span className="card-num">{String(ex.numero).padStart(2, '0')}</span>
                <span className="card-title">{ex.titulo}</span>
                <span className={`card-icon ${isOpen ? 'card-icon--open' : ''}`}>+</span>
              </button>

              {isOpen && (
                <div className="card-body">
                  <div className="output-box">
                    {ex.componente}
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </main>

      <footer className="footer">Bruno Lopes FACULDADE FLAMINGO</footer>
    </div>
  )
}

export default App