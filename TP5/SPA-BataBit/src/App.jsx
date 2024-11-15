import Header from './components/Header';
import Exchange from './components/Exchange';
import Table from './components/Table';
import ProductDetail from './components/ProductDetail';
import Footer from './components/Footer';
import './App.css';
import BitcoinBaby from './components/BitConteiner';
import Plans from './components/plans';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Exchange />
        <Table />
        <ProductDetail />
        <BitcoinBaby />
        <Plans />
      </main>
      <Footer />
    </div>
  );
}

export default App;