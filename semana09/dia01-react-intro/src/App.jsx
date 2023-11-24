// COMPONENTE USANDO FUNCTION

// function App() {
//   return <h1>Hola React!</h1>
// }

// export default App

// COMPONENTE USANDO ARROW FUNCTIONS

// const App = () => {
//   return <h1>Hola React!</h1>
// }

// export default App

// COMPONENTE DE REACT USANDO MULTIPLES LINEAS CON SU ELEMENTO PADRE

// const App = () => {
//   return (
//     <div>
//       <h1>Hola React!</h1>
//       <p>Estoy en el bootcamp</p>
//     </div>
//   )
// }

// COMPONENTE USANDO FRAGMENTOS (FRAGMENTS) PARA EVITAR RENDERIZAR EN UN ELEMENTO PADRE

// const App = () => {
//   return (
//     <>
//       <h1>Hola React!</h1>
//       <p>Estoy en el bootcamp!</p>
//       { /* Comentario en react dentro de JSX */ }
//     </>
//   )
// }

// ANIDANDO COMPONENETES DENTRO DE OTROS

// function Saludo () {
//   return <h1>Hola Bryan</h1>
// }

// function Despedida () {
//   return <h1>Adios Bryan</h1>
// }

// const App = () => {
//   return (
//     <>
//       <h1>Hola React!</h1>
//       <p>Estoy en el bootcamp!</p>
//       { /* Comentario en react dentro de JSX */ }

//       <Saludo />
//       <Despedida />
//     </>
//   )
// }

// IMPORTANDO COMPONENTES EXTERNOS

// import { Saludo } from "./components/Saludo"
// import Despedida from "./components/Despedida"
// import { EDAD, LISTA_DE_FRUTAS } from "./components/Frutas"

// const App = () => {
//   return (
//     <>
//       <h1>Hola React!</h1>
//       <p>Estoy en el bootcamp!</p>
//       { /* Comentario en react dentro de JSX */ }

//       <Saludo />
//       <Despedida />

//       {1+2}
      
//       {LISTA_DE_FRUTAS}

//       {EDAD}
//     </>
//   )
// }

// USANDO CSS EN REACT

import { Saludo } from "./components/Saludo"
import Despedida from "./components/Despedida"
import { EDAD, LISTA_DE_FRUTAS } from "./components/Frutas"

import './demo.css' // Importando css global

const App = () => {
  return (
    <>
      <h1 style={{color: 'red', textDecoration: 'underline'}}>Hola React!</h1>
      <p>Estoy en el bootcamp!</p>
      { /* Comentario en react dentro de JSX */ }

      <Saludo />
      <Despedida />

      {1+2}
      
      {LISTA_DE_FRUTAS}

      {EDAD}
    </>
  )
}

export default App
