import {ExchangeCard, Header} from './components';

function App() {
  return (
    <div className='min-h-screen bg-white'>
      <div className='bg-[#1A8DFF] h-[355px] w-full'>
        <Header />

        <h1 className='text-[32px] leading-10 font-medium text-white text-center px-12 mt-7 lg:mt-16'>
          100 EUR to USD - Convert Euros to US Dollars
        </h1>
      </div>

      <div className='flex flex-col justify-center items-center -mt-[100px]'>
        <ExchangeCard />
      </div>
    </div>
  );
}

export default App;
