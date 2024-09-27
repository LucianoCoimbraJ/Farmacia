import { useState } from 'react'
import './App.css'
import Mercado from './componets/Mercado'
import Senha from './componets/Senha'
import Sobremim from './componets/Sobremim'
import Homepage from './componets/Tela_inicial.jsx'
import Tela_inicial from './componets/Tela_inicial.jsx'

function App() {
  const [pagina, setPagina] = useState(<Homepage />)  
  return (
    <>
     <nav className='Nav-Bar'>
     <img src="./Fotos/farmarcia-logo-pq.png" alt="" />
        <button onClick={ () => {setPagina(<Homepage />)} } >Home</button>
        <button onClick={ () => {setPagina(<Senha />)} } >Senha</button>
        <button onClick={ () => {setPagina(<Sobremim />)} } >Sobre-mim</button>
        <button onClick={ () => {setPagina(<Mercado />)} } >Mercado</button>
      </nav>
      {pagina}
    </>
  )
}

export default App
