const ProductDetail = () => {
  return (
    <section className="bg-zinc-900 text-center py-16">
      <div className="max-w-screen-lg mx-auto">
        <h2 className="text-4xl font-bold text-white">Creamos un producto sin comparación.</h2>
        <p className="text-lg text-white mt-4">Confiable y diseñado para su uso diario.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          <div className="p-8 bg-zinc-800 rounded-lg shadow-md border border-stone-800">
            <img src="src/assets/icons/clock.svg" alt="clock" className="w-16 h-16 mx-auto mb-6" />
            <h3 className="text-xl font-semibold text-white">Tiempo real</h3>
            <p className="text-white mt-4">Nuestra API toma información minuto a minuto.</p>
          </div>

          <div className="p-8 bg-zinc-800 rounded-lg shadow-md border border-stone-800">
            <img src="src/assets/icons/eye.svg" alt="eye" className="w-16 h-16 mx-auto mb-6" />
            <h3 className="text-xl font-semibold text-white">No hay tasas escondidas</h3>
            <p className="text-white mt-4">Ni en la compra o al momento de exit, Batabit siempre te muestra el costo real de lo que estás adquiriendo.</p>
          </div>

          <div className="p-8 bg-zinc-800 rounded-lg shadow-md border border-stone-800">
            <img src="src/assets/icons/dollar-sign.svg" alt="dollar" className="w-16 h-16 mx-auto mb-6" />
            <h3 className="text-xl font-semibold text-white">Compare monedas</h3>
            <p className="text-white mt-4">No más rumores, con Batabit sabrás el valor real de cada moneda en el mercado actual.</p>
          </div>

          <div className="p-8 bg-zinc-800 rounded-lg shadow-md border border-stone-800">
            <img src="src/assets/icons/check-circle.svg" alt="check-circle" className="w-16 h-16 mx-auto mb-6" />
            <h3 className="text-xl font-semibold text-white">Información confiable</h3>
            <p className="text-white mt-4">Nuestras fuentes están 100% verificadas y continuamos auditando su contenido mientras se actualizan.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;