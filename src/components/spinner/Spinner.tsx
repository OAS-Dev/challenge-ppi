export const Spinner = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen gap-4'>
      <p className='text-[16px] font-semibold leading-5'>Loading...</p>
      <div className='w-16 h-16 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin'></div>
    </div>
  );
};
