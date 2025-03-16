import {CurrencyConversionInfo} from '../currency-info/CurrencyConversionInfo';
import exchange from '../../assets/icons/Button.svg';
import {Rates} from '../../interfaces/rates.interface';

interface ExchangeCardProps {
  rates: Rates;
  amount: string;
  setAmount: (amount: string) => void;
  fromCurrency: string;
  setFromCurrency: (fromCurrency: string) => void;
  toCurrency: string;
  setToCurrency: (toCurrency: string) => void;
}

export const ExchangeCard = ({
  rates,
  amount,
  setAmount,
  fromCurrency,
  setFromCurrency,
  toCurrency,
  setToCurrency,
}: ExchangeCardProps) => {
  const lastRateEuro = rates.rates.USD;
  const lastRateDollar = rates.rates.EUR / rates.rates.USD;

  const formatAmount = (value: string) => {
    return value.replace(/[^\d.]/g, '');
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    const rawValue = value.replace(/,/g, '');

    if (rawValue === '' || /^\d*\.?\d*$/.test(rawValue)) {
      setAmount(rawValue);
    }
  };

  const handleFromCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newFromCurrency = e.target.value;
    setFromCurrency(newFromCurrency);
    setToCurrency(newFromCurrency === 'EUR' ? 'USD' : 'EUR');
  };

  const handleToCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newToCurrency = e.target.value;
    setToCurrency(newToCurrency);
    setFromCurrency(newToCurrency === 'EUR' ? 'USD' : 'EUR');
  };

  return (
    <>
      <div className='bg-white rounded-lg shadow-lg pt-8 pb-2 w-[311px] h-full lg:w-[1126px] lg:h-[402px]'>
        {/* Exchange inputs */}
        <div className='flex flex-col lg:flex-row justify-center lg:justify-between lg:px-10 items-center gap-6'>
          {/* Amount */}
          <div>
            <label className='block text-[16px] font-semibold mb-2'>Amount</label>
            <div className='relative'>
              <span className='absolute inset-y-0 left-0 pl-3 flex items-center'>$</span>
              <input
                type='text'
                value={formatAmount(amount)}
                onChange={handleAmountChange}
                placeholder='0'
                className='w-[279px] pl-6 pr-4 py-2 border border-gray-300 rounded-[4px] focus:outline-none focus:ring-1 focus:ring-[#1A8DFF] text-[16px] font-semibold leading-5'
              />
            </div>
          </div>

          <div className='flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-evenly lg:w-full'>
            <div>
              <label className='block text-[16px] font-semibold mb-2'>From</label>
              <select
                value={fromCurrency}
                onChange={handleFromCurrencyChange}
                className='w-[276px] px-4 py-2 border border-gray-300 rounded-[4px] focus:outline-none focus:ring-1 focus:ring-[#1A8DFF] text-[16px] font-semibold leading-5'
              >
                <option value='EUR'>Euro</option>
                <option value='USD'>Dollar</option>
              </select>
            </div>

            <div className='w-[42px] h-[42px]'>
              <img src={exchange} alt='exchange' className='w-[42px] h-[42px]' />
            </div>

            <div>
              <label className='block text-[16px] font-semibold mb-2'>To</label>
              <select
                value={toCurrency}
                onChange={handleToCurrencyChange}
                className='w-[276px] px-4 py-2 border border-gray-300 rounded-[4px] focus:outline-none focus:ring-1 focus:ring-[#1A8DFF] text-[16px] font-semibold leading-5'
              >
                <option value='EUR'>Euro</option>
                <option value='USD'>Dollar</option>
              </select>
            </div>
          </div>
        </div>

        {/* Exchange Rate Display */}
        <div className='mt-6 px-4 lg:px-10 lg:mt-[70px]'>
          <div>
            <div className='text-[24px] font-semibold leading-8 lg:text-[32px]'>
              {fromCurrency === 'USD'
                ? `${Number(amount).toFixed(2)} ${amount === '1' ? 'US Dollar' : 'US Dollars'} =`
                : `${Number(amount).toFixed(2)} ${amount === '1' ? 'Euro' : 'Euros'} =`}
              <br />
              {fromCurrency === 'USD'
                ? `${(Number(amount) * Number(lastRateDollar)).toFixed(7)} Euros`
                : `${(Number(amount) * Number(lastRateEuro)).toFixed(7)} US Dollars`}
            </div>
            <div className='text-[16px] text-[#757575] font-normal leading-8 mt-1'>
              {fromCurrency === 'USD'
                ? `${(Number(amount) * Number(lastRateDollar)).toFixed(2)} EUR = ${Number(amount).toFixed(2)} USD `
                : `${(Number(amount) * Number(lastRateEuro)).toFixed(2)} USD = ${Number(amount).toFixed(2)} EUR`}
            </div>
          </div>

          <div className='hidden lg:flex flex-col justify-end items-end -mt-8'>
            <div className=' bg-[#E8F3FF] px-6 py-5 rounded-[8px] w-[518px] font-normal shadow-[0_2px_4px_0_rgba(0,0,0,0.20)]'>
              <p className='text-[14px] font-normal text-black leading-8'>
                We use the mid-market rate for our Converter. This is for informational purposes only. You won’t receive
                this rate when sending money.
              </p>
            </div>

            <div className='hidden lg:block lg:mt-3'>
              <CurrencyConversionInfo />
            </div>
          </div>
        </div>
      </div>

      <div className='mt-4 px-10 lg:hidden'>
        <CurrencyConversionInfo />
      </div>
    </>
  );
};
