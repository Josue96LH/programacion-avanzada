import { useState } from 'react'
import { Header } from './components/Header'
import { Formulario } from './components/Formulario'
import { ListadoTareas } from './components/ListadoTareas'
import './App.css'

function App() {

  const [tareas, setTareas] = useState([])

  const eliminarTarea = (proyecto) => {
    const tareasActualizadas = tareas.filter(tarea => tarea.proyecto !== proyecto)
    setTareas(tareasActualizadas)
  }
 
  return (
    <div className="container mx-auto mt-20">
      <Header /> 

      <div className='mt-12 flex'>
      <Formulario
      tareas={tareas}
      setTareas={setTareas}
       /> 
      <ListadoTareas
        tareas={tareas}
        eliminarTarea={eliminarTarea}
       />   
      </div> 
    </div>
  )
}

export default App
