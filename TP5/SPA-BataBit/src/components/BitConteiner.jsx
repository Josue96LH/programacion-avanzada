const BitcoinBaby = () => {
    return (
      <section className="relative w-full h-[500px]">
        <img 
          src="src/assets/imgs/bitcoinbaby.jpg" 
          alt="Bitcoin baby" 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 flex justify-center items-center">
          <h2 className="text-white text-4xl font-bold">Conócelo hoy.</h2>
        </div>
      </section>
    );
  };
  
export default BitcoinBaby;