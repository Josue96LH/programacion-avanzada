
import { useEffect, useState } from 'react';

const Table = () => {
  const [prices, setPrices] = useState({
    Bitcoin: { price: 0, trend: 'neutral' },
    Ethereum: { price: 0, trend: 'neutral' },
    Ripple: { price: 0, trend: 'neutral' },
    Stellar: { price: 0, trend: 'neutral' },
  });
  const [lastUpdated, setLastUpdated] = useState('');

  useEffect(() => {
    const apiKey = import.meta.env.VITE_COIN_API_KEY;
    const url = 'https://rest.coinapi.io/v1/assets';

    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'X-CoinAPI-Key': apiKey
          }
        });
        const data = await response.json();

        const cryptoData = {
          Bitcoin: data.find(asset => asset.asset_id === 'BTC'),
          Ethereum: data.find(asset => asset.asset_id === 'ETH'),
          Ripple: data.find(asset => asset.asset_id === 'XRP'),
          Stellar: data.find(asset => asset.asset_id === 'XLM')
        };

        setPrices({
          Bitcoin: { price: cryptoData.Bitcoin.price_usd, trend: cryptoData.Bitcoin.price_usd >= 1 ? 'up' : 'down' },
          Ethereum: { price: cryptoData.Ethereum.price_usd, trend: cryptoData.Ethereum.price_usd >= 1 ? 'up' : 'down' },
          Ripple: { price: cryptoData.Ripple.price_usd, trend: cryptoData.Ripple.price_usd >= 1 ? 'up' : 'down' },
          Stellar: { price: cryptoData.Stellar.price_usd, trend: cryptoData.Stellar.price_usd >= 1 ? 'up' : 'down' }
        });

        setLastUpdated(new Date().toLocaleString());
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const renderTrendIcon = (trend) => {
    if (trend === 'up') {
      return <img src="src/assets/icons/trending-up.svg" alt="Up" className="inline-block w-4 h-4 ml-2" />;
    } else if (trend === 'down') {
      return <img src="src/assets/icons/trending-down.svg" alt="Down" className="inline-block w-4 h-4 ml-2" />;
    }
    return null;
  };

  return (
    <section className="max-w-xs mx-auto bg-white p-6 rounded-lg ">
      <div className="mb-4">
        <p className="text-orange-500 font-bold text-xl mb-2">Monedas</p>
        <div className="w-full">
          <table className="w-full">
            <tbody>
              {Object.entries(prices).map(([key, value]) => (
                <tr key={key}>
                  <td className="py-2 text-left text-gray-600 font-medium">{key}</td>
                  <td className="py-2 text-right text-gray-600 font-medium">
                    ${value.price.toFixed(2)}
                    {renderTrendIcon(value.trend)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="text-center bg-orange-100 py-2 rounded-md">
        <p className="text-gray-600 text-sm">
          <b>Actualizado:</b> {lastUpdated}
        </p>
      </div>
    </section>
  );
};

export default Table;
