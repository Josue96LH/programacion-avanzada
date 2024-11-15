import getHash from '../utils/getHash'
import getData from '../utils/getData'

const Launch = async () => {
    const flightNumber = getHash() 
    const launches = await getData() 
    const launch = launches.find(l => l.flight_number == flightNumber) 

    if (!launch) {
        return `<h2>Lanzamiento no encontrado</h2>`
    }

    const view = `
        <div class="Characters-inner">
            <article class="Character-card">
                <img src="${launch.links.patch.small || 'https://via.placeholder.com/150'}" alt="Lanzamiento ${launch.flight_number}">
                <h2>Lanzamiento #${launch.flight_number}</h2>
            </article>

            <article class="Characters-card">
                <h3>Fallas: <span>${launch.failures.length > 0 ? launch.failures.map(f => f.reason).join(', ') : 'No hubo fallas'}</span></h3>
                <h3>Detalles: <span>${launch.details || 'Sin detalles disponibles'}</span></h3>
                <h3>Fecha y Hora: <span>${new Date(launch.date_utc).toLocaleString()}</span></h3>
            </article>
        </div>
    `
    return view
}

export default Launch