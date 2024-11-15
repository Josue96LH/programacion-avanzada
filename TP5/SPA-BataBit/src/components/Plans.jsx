const Plans = () => {
    return (
      <section id="plans" className="w-full min-w-[320px] pb-16 text-center">
        <div className="w-11/12 min-w-[288px] mb-12 mx-auto">
          <h2 className="pt-12 text-3xl font-bold leading-[2.6rem] text-black">Escoge el plan que mejor se ajuste a ti.</h2>
          <p className="pt-8 text-lg font-medium leading-[1.8rem] text-gray-600">
            Cualquier plan te da acceso completo a nuestra plataforma.
          </p>
        </div>
  
        <section className="flex overflow-x-auto snap-x snap-mandatory gap-4 px-4">
          <article className="relative snap-center w-[70%] min-w-[250px] max-w-[300px] bg-white p-6 rounded-lg shadow-lg mx-auto">
            <div className="plan-info-container">
              <h3 className="text-xl font-bold pt-4 mb-3">Pago Anual</h3>
              <p className="font-bold text-5xl leading-tight text-black">
                <span>$</span>99
              </p>
              <p className="my-4 text-lg text-gray-600">
                *Ahorras $129 comparado al plan mensual.
              </p>
              <button className="flex items-center justify-center w-[150px] h-[48px] border-2 border-orange-500 rounded-md text-xl font-bold bg-gray-100 mx-auto">
                Escoger este{" "}
                <span
                  className="w-5 h-5 ml-2 bg-center bg-cover"
                  style={{
                    backgroundImage: "url('src/assets/icons/orange-right-arrow.svg')",
                  }}
                ></span>
              </button>
            </div>
          </article>
  
          <article className="relative snap-center w-[70%] min-w-[250px] max-w-[300px] bg-white p-6 rounded-lg shadow-lg mx-auto">
            <p className="absolute top-[-15px] left-1/2 transform -translate-x-1/2 w-[150px] h-[30px] p-2 text-lg font-bold text-white bg-orange-500 rounded-md">
              Recomendado
            </p>
            <div className="plan-info-container">
              <h3 className="text-xl font-bold pt-4 mb-3">Pago Anual</h3>
              <p className="font-bold text-5xl leading-tight text-black">
                <span>$</span>99
              </p>
              <p className="my-4 text-lg text-gray-600">
                *Ahorras $129 comparado al plan mensual.
              </p>
              <button className="flex items-center justify-center w-[150px] h-[48px] border-2 border-orange-500 rounded-md text-xl font-bold bg-gray-100 mx-auto">
                Escoger este{" "}
                <span
                  className="w-5 h-5 ml-2 bg-center bg-cover"
                  style={{
                    backgroundImage: "url('src/assets/icons/orange-right-arrow.svg')",
                  }}
                ></span>
              </button>
            </div>
          </article>
  
          <article className="relative snap-center w-[70%] min-w-[250px] max-w-[300px] bg-white p-6 rounded-lg shadow-lg mx-auto">
            <div className="plan-info-container">
              <h3 className="text-xl font-bold pt-4 mb-3">Pago Anual</h3>
              <p className="font-bold text-5xl leading-tight text-black">
                <span>$</span>99
              </p>
              <p className="my-4 text-lg text-gray-600">
                *Ahorras $129 comparado al plan mensual.
              </p>
              <button className="flex items-center justify-center w-[150px] h-[48px] border-2 border-orange-500 rounded-md text-xl font-bold bg-gray-100 mx-auto">
                Escoger este{" "}
                <span
                  className="w-5 h-5 ml-2 bg-center bg-cover"
                  style={{
                    backgroundImage: "url('src/assets/icons/orange-right-arrow.svg')",
                  }}
                ></span>
              </button>
            </div>
          </article>
        </section>
      </section>
    );
  };
  
export default Plans;
  