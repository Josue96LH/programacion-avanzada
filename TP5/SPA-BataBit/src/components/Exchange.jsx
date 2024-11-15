const Exchange = () => {
  return (
    <section className="text-center py-16 bg-white">
      <div className="mx-auto mb-8 w-48 h-48 flex justify-center items-center">
        <img src="/src/assets/imgs/Bitcoin.svg" alt="Bitcoin" className="w-full h-full object-contain" />
      </div>
      <h2 className="text-4xl font-bold text-gray-900">
        Visibilizamos todas las tasas de cambio.
      </h2>
      <p className="mt-4 text-lg text-gray-600">
        Traemos información en tiempo real de las casas de cambio y las monedas más importantes del mundo.
      </p>
    </section>
  );
};

export default Exchange;