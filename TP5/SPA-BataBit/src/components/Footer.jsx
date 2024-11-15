const Footer = () => {
  return (
    <footer className="bg-orange-500 py-8">
      <div className="max-w-screen-lg mx-auto flex justify-between items-center">
        <ul className="text-white space-y-4">
          <li><a href="#" className="hover:text-yellow-200">Linkedin</a></li>
          <li><a href="#" className="hover:text-yellow-200">Crunchbase</a></li>
          <li><a href="#" className="hover:text-yellow-200">Hackernews</a></li>
        </ul>
        <div>
          <img src="src/assets/imgs/logo-footer.svg" alt="Logo de Batatabit 2021" className="w-20 h-auto" />
        </div>
      </div>

      <div className="text-center text-white mt-4">
        <p>© Batatabit 2020</p>
      </div>
    </footer>
  );
};

export default Footer;
