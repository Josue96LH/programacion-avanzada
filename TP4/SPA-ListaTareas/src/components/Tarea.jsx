

export const Tarea = ({tarea,eliminarTarea}) => {


    const {proyecto, tipoTarea, persona, storypoint, prioridad, fecha, resumen} = tarea
  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rouded-xl">
    <p className="font-bold mb-3 text-gray-700 uppercase">proyecto {''}
        <span className="font-normal normal-case">{proyecto}</span>
    </p>

    <p className="font-bold mb-3 text-gray-700 uppercase">Tipo de tarea: {''}
        <span className="font-normal normal-case">{tipoTarea}</span>
    </p> 

    <p className="font-bold mb-3 text-gray-700 uppercase">Persona Asignada: {''}
        <span className="font-normal normal-case">{persona}</span>
    </p>


    <p className="font-bold mb-3 text-gray-700 uppercase">storypoint: {''}
        <span className="font-normal normal-case">{storypoint}</span>
    </p>


    <p className="font-bold mb-3 text-gray-700 uppercase">Prioridad: {''}
        <span className="font-normal normal-case">{prioridad}</span>
    </p>

    <p className="font-bold mb-3 text-gray-700 uppercase">Fecha: {''}
        <span className="font-normal normal-case">{fecha}</span>
    </p>

    <p className="font-bold mb-3 text-gray-700 uppercase">Resumen: {''}
        <span className="font-normal normal-case">{resumen}</span>
    </p>

    <button 
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => eliminarTarea(proyecto)} 
        >
          Eliminar
        </button>

    </div>
  )
}
