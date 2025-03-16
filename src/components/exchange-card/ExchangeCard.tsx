import exchange from '../assets/icons/Button.svg';

export const ExchangeCard = () => {
  return (
    <>
      <div className='bg-white rounded-lg shadow-lg pt-8 pb-2 w-[311px] lg:w-[1126px]'>
        <div className='flex flex-col lg:flex-row justify-center items-center gap-6'>
          {/* Amount */}
          <div>
            <label className='block text-[16px] font-semibold mb-2'>Amount</label>
            <div className='relative'>
              <span className='absolute inset-y-0 left-0 pl-3 flex items-center'>$</span>
              <input
                type='number'
                className='w-[279px] lg:w-[276px] px-4 py-2 border border-gray-300 rounded-[4px] focus:outline-none focus:ring-1 focus:ring-[#1A8DFF] text-[16px] font-semibold leading-5'
              />
            </div>
          </div>

          <div className='flex flex-col gap-6 lg:flex-row'>
            <div>
              <label className='block text-[16px] font-semibold mb-2'>From</label>
              <select className='w-[276px] px-4 py-2 border border-gray-300 rounded-[4px] focus:outline-none focus:ring-1 focus:ring-[#1A8DFF] text-[16px] font-semibold leading-5'>
                <option value='EUR'>Euro</option>
                <option value='USD'>Dollar</option>
              </select>
            </div>

            <div className='w-[42px] h-[42px]'>
              <img src={exchange} alt='exchange' className='w-[42px] h-[42px]' />
            </div>

            <div>
              <label className='block text-[16px] font-semibold mb-2'>To</label>
              <select className='w-[276px] px-4 py-2 border border-gray-300 rounded-[4px] focus:outline-none focus:ring-1 focus:ring-[#1A8DFF] text-[16px] font-semibold leading-5'>
                <option value='EUR'>Euro</option>
                <option value='USD'>Dollar</option>
              </select>
            </div>
          </div>
        </div>

        {/* Exchange Rate Display */}
        <div className='mt-6 px-4'>
          <div>
            <div className='text-[24px] font-semibold leading-8'>
              1.00 Euro = <br />
              1.0627478 US Dollars
            </div>
            <div className='text-[16px] text-[#757575] font-normal leading-8 mt-1'>1 USD = 0.941004 EUR</div>
          </div>

          <div className='flex flex-col justify-end items-end'>
            <div className='hidden bg-[#E8F3FF] p-4 rounded-[8px] w-[518px] font-normal'>
              <p className='text-[14px] text-black leading-8'>
                We use the mid-market rate for our Converter. This is for informational purposes only. You won’t receive
                this rate when sending money.
              </p>
            </div>

            <div className='hidden'>
              <p className='text-[12px] font-light leading-8'>
                Euro to US Dollar conversion — Last updated Dec 15, 2022, 19:17 UTC
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='mt-4 px-10'>
        <p className='text-[12px] font-light leading-6'>
          <a
            href='https://www.xe.com/currency/eur-euro/'
            target='_blank'
            rel='noopener noreferrer'
            className='underline'
          >
            Euro
          </a>{' '}
          to{' '}
          <a
            href='https://www.xe.com/currency/usd-us-dollar/'
            target='_blank'
            rel='noopener noreferrer'
            className='underline'
          >
            US Dollar
          </a>{' '}
          conversion — Last updated Dec 15, 2022, 19:17 UTC
        </p>
      </div>
    </>
  );
};
