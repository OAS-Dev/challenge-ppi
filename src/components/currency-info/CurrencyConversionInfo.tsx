export const CurrencyConversionInfo = () => {
  return (
    <p className='text-[12px] font-light leading-6'>
      <a href='https://www.xe.com/currency/eur-euro/' target='_blank' rel='noopener noreferrer' className='underline'>
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
      conversion — Last updated{' '}
      {new Intl.DateTimeFormat('en-US', {
        timeZone: 'America/Argentina/Buenos_Aires',
        month: 'short',
        day: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      }).format(new Date())}{' '}
      ART
    </p>
  );
};
