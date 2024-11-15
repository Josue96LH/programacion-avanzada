const API = 'https://api.spacexdata.com/v5/launches/';

const getData = async () => {
    const apiURL = `${API}`; // URL de la API

    try {
        const response = await fetch(apiURL);
        const data = await response.json();

        // Limitar a 30 lanzamientos
        const limitedData = data.slice(0, 30);

        console.log(limitedData);
        return limitedData;

    } catch (error) {
        console.log('Fetch Error..!!', error);
    }
};

const renderLaunches = (launches) => {
    const launchesDiv = document.getElementById('launches');
    launchesDiv.innerHTML = ''; // Limpiar contenido previo

    launches.forEach(launch => {
        const launchDiv = document.createElement('div');
        launchDiv.classList.add('launch');

        const img = launch.links.patch.small || 'https://via.placeholder.com/150'; // Imagen de la nave

        const failures = launch.failures.length > 0 ? launch.failures.map(f => f.reason).join(', ') : 'No hubo fallas';
        const details = launch.details || 'Sin detalles disponibles';
        const flightNumber = launch.flight_number;
        const launchDate = new Date(launch.date_utc).toLocaleString();

        launchDiv.innerHTML = `
            <h2>Lanzamiento #${flightNumber}</h2>
            <img src="${img}" alt="Imagen de la nave">
            <p><strong>Fallas:</strong> ${failures}</p>
            <p><strong>Detalles:</strong> ${details}</p>
            <p><strong>Fecha y Hora:</strong> ${launchDate}</p>
        `;

        launchesDiv.appendChild(launchDiv);
    });
};

getData().then(renderLaunches);

export default getData;