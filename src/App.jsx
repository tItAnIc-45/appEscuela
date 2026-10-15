import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar';
import Contador from './components/Contador/Contador';
import AlumnoCard from './components/AlumnoCard/AlumnoCard';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <div className="container">
        <h2 className="mb-4">Directorio de Alumnos</h2>
        
        <div className="row"></div>
      
       <AlumnoCard
        nombre="Daniel Puccio"
        carrera="Desarrollo de Software"
        estadoInicial="Matriculado"
       />
      
       <AlumnoCard
        nombre="Maria Perez"
        carrera="Diseño Gráfico"
        estado="Inactivo"
       />
      
       <AlumnoCard
        nombre="Carlos Mendoza"
        carrera="Administración Industrial"
        estado="Matriculado"
       />
     </div>

     <Contador
     
     />

    </>
  )
}

export default App
