
import { Tarea } from "./Tarea"

export const ListadoTareas = ({ tareas = [], eliminarTarea }) => {

  console.log(tareas)

  return (

    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-scroll">
      <h2 className="font-black text-3xl text-center">Listado de Tareas</h2>
      <p className="text-xl mt-5 mb-10 text-center">Administra tus {''} 
      <span className="text-indigo-600 font-bold">tareas</span> aquí
      </p>

      { tareas.map(tarea => (
        <Tarea 
          key={tarea.proyecto}
          tarea={tarea}
          eliminarTarea={eliminarTarea}
        />
      ))}
    </div>
  )
}
