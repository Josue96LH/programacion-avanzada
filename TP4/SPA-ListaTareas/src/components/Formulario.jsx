import { useState } from "react"


export const Formulario = ({tareas, setTareas }) => {

  const [proyecto, setProyecto] = useState('')
  const [tipoTarea, setTipoTarea] = useState('')
  const [persona, setPersona] = useState('')
  const [storypoint, setStorypoint] = useState('')
  const [prioridad, setPrioridad] = useState('')
  const [fecha, setFecha] = useState('')
  const [resumen, setResumen] = useState('')

  const [error, setError] = useState(false)


  const handleSubmit = (e) => {
    e.preventDefault()
    
    //validar que los campos esten llenos
    if([proyecto, tipoTarea, persona, storypoint, prioridad, fecha, resumen].includes('')) {
      console.log('Hay al menos un campo vacio')

      setError(true)
      return
    }
      
      setError(false)

        //objeto con los datos de la tarea
        const objetotarea = {
          proyecto, 
          tipoTarea, 
          persona, 
          storypoint, 
          prioridad, 
          fecha, 
          resumen
        }
        console.log(objetotarea)
      
        
        //agregar la tarea al state
        setTareas([
          ...tareas,
          objetotarea
       ])

        //reiniciar el formulario
        setProyecto('')
        setTipoTarea('')
        setPersona('')
        setStorypoint('')
        setPrioridad('')
        setFecha('')
        setResumen('')
      } 
  
    
  return (
    <div className="w-1/2">
    <h2 className="text-3xl text-center">Lista de tareas</h2>

    <p className="font-black text-lg mt-5 text-center mb-10">Añade tareas y {''}
    <span className="text-indigo-600 font-bold">Administralas</span></p>

    <form 
    onSubmit={handleSubmit}
    className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
    {error ? <p className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 text-center mb-5">Todos los campos son obligatorios</p> : null}
    <div>
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="proyecto">Proyecto</label>
      <input className="shadow appearance-none border rounded 
      w-full py-2 px-3 text-gray-700 leading-tight 
      focus:outline-none focus:shadow-outline"
       id="proyecto"
       type="text" 
       placeholder="Nombre del proyecto"
       value={proyecto}
       onChange={(e) => setProyecto(e.target.value)}
       />
  

    </div>

    <div>
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tipoTarea">Tipo de tarea</label>
      <input className="shadow appearance-none border rounded 
      w-full py-2 px-3 text-gray-700 leading-tight 
      focus:outline-none focus:shadow-outline"
       id="TipoTarea"
       type="text"
       placeholder="Nombre del tipo de tarea"
      onChange={(e) => setTipoTarea(e.target.value)}
      value={tipoTarea} />
    </div>

    <div>
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="persona">Persona</label>
      <input className="shadow appearance-none border rounded 
      w-full py-2 px-3 text-gray-700 leading-tight 
      focus:outline-none focus:shadow-outline"
       id="persona"
       type="text"
       placeholder="Nombre de la persona Asignada"
        onChange={(e) => setPersona(e.target.value)}
      value={persona}
       />
    </div>


    <div>
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="storypoint">Storypoint</label>
      <input className="shadow appearance-none border rounded 
      w-full py-2 px-3 text-gray-700 leading-tight 
      focus:outline-none focus:shadow-outline"
       id="storypoint"
       type="int"
      onChange={(e) => setStorypoint(e.target.value)}
      value={storypoint}
        />

    </div>

    <div>
  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="prioridad">
    Prioridad
  </label>
  <select
    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight 
    focus:outline-none focus:shadow-outline"
    id="prioridad"
    onChange={(e) => setPrioridad(e.target.value)}
    value={prioridad}
  >
    <option value="">Seleccione una opción</option>
    <option value="alta">Alta</option>
    <option value="media">Media</option>
    <option value="baja">Baja</option>
  </select>
  </div>
    <div>
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fecha">Fecha de Creacion</label>
      <input className="shadow appearance-none border rounded 
      w-full py-2 px-3 text-gray-700 leading-tight 
      focus:outline-none focus:shadow-outline"
       id="fecha" 
       type="date"
        onChange={(e) => setFecha(e.target.value)}/>
        fecha: {fecha}
    </div>

    <div>
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Resumen">Resumen</label>
      <textarea className="shadow appearance-none border rounded 
      w-full py-2 px-3 text-gray-700 leading-tight 
      focus:outline-none focus:shadow-outline"
       id="resumen"
       placeholder="Describa el resumen"
      onChange={(e) => setResumen(e.target.value)}  
      value={resumen}
       />
    </div>

    <button className="bg-indigo-600 hover:bg-indigo-700 w-full mt-5 p-2 text-white uppercase font-bold rounded"
    type="submit">Agregar tarea</button>

    </form>

    </div>
  )
}
