import getData from '../utils/getData'

const Home = async () => {
    const launches = await getData() 
    const view = `
        <div class="Characters">
        ${launches.map(launch => `
            <article class="Character-item">
                <a href="#/${launch.flight_number}"> <!-- Usar el número de vuelo como ID -->
                    <img src="${launch.links.patch.small || 'https://via.placeholder.com/150'}" alt="Lanzamiento ${launch.flight_number}">
                    <h2>Lanzamiento #${launch.flight_number}</h2>
                </a>
            </article>
        `).join('')}
        </div>
    `
    return view
}

export default Home