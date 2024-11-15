export default function Header(){
  return(
    <header className="bg-gradient-to-b from-orange-500 via-gray-800 to-black py-24 px-8 text-center">
  <div className="max-w-3xl mx-auto">
  <img src="/src/assets/imgs/logo.svg" alt="Batabit logo" className="mx-auto w-32 h-8 mb-4" />
  <h1 className="text-4xl font-bold text-white">La próxima revolución en el intercambio de criptomonedas</h1>
  <p className="text-xl mt-4 text-white">Batabit te ayuda a navegar entre los diferentes precios y tendencias.</p>
  <a href="#" className="mt-6 inline-block bg-white text-gray-800 font-medium py-2 px-4 rounded-full shadow hover:bg-gray-200">
    Conoce Nuestros Planes<span className="ml-2 inline-block w-4 h-4 bg-cover bg-center" 
    style={{ backgroundImage: 'url("src/assets/icons/down-arrow.svg")' }}></span></a>
  </div>
</header>)}
