import {useEffect, useState} from 'react';
import {ExchangeCard, Header, Spinner} from './components';
import {getLatestRates} from './services/currency.services';
import {Rates} from './interfaces/rates.interface';

function App() {
  const [loading, setLoading] = useState(true);
  const [rates, setRates] = useState<Rates>({date: new Date(), base: '', rates: {USD: 0, EUR: 0}});
  const [amount, setAmount] = useState('1');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');

  useEffect(() => {
    getLatestRates()
      .then((data) => {
        setRates(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching rates:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className='min-h-screen bg-white'>
      <div className='bg-[#1A8DFF] h-[355px] w-full'>
        <Header />

        <h1 className='text-[32px] leading-10 font-medium text-white text-center px-12 mt-7 lg:mt-16'>
          {amount} {fromCurrency} to {toCurrency} - Convert {fromCurrency === 'EUR' ? 'Euros' : 'US Dollars'} to{' '}
          {toCurrency === 'EUR' ? 'Euros' : 'US Dollars'}
        </h1>
      </div>

      <div className='flex flex-col justify-center items-center -mt-[100px]'>
        <ExchangeCard
          rates={rates}
          amount={amount}
          setAmount={setAmount}
          fromCurrency={fromCurrency}
          setFromCurrency={setFromCurrency}
          toCurrency={toCurrency}
          setToCurrency={setToCurrency}
        />
      </div>
    </div>
  );
}

export default App;
