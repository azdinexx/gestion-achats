import Image from 'next/image';

export default function Home() {
  return <Hero />;
}

function Hero() {
  return (
    <div className='grid grid-cols-8  gap-4 my-4'>
      <MainCard />
      <section className=' col-span-5 grid gap-4  grid-rows-4 grid-cols-1'>
        <section className=' row-span-3 flex gap-4 '>
          <div className='w-1/2 border border-purple-100 shadow-sm shadow-purple-300 rounded-xl p-4 bg-purple-200 flex justify-center items-center flex-col gap-3'>
            <p className='text-7xl text-purple-800'>-1,125</p>
            <p className=' capitalize italic text-gray-700'>
              solde annee encours
            </p>
          </div>
          <div className='w-1/2 border border-sky-100 shadow-sm shadow-sky-300 rounded-xl p-4 bg-sky-200 flex justify-center items-center flex-col gap-3'>
            <p className='text-7xl text-sky-800'>0</p>
            <p className=' capitalize italic text-gray-700'>
              solde annee precedente
            </p>
          </div>
        </section>
        <section className='border border-indigo-100 shadow-sm shadow-indigo-300 rounded-xl p-4 bg-indigo-400'>
          3
        </section>
      </section>
    </div>
  );
}

function MainCard() {
  function societeName(societe: string) {
    return `@${societe.replaceAll(' ', '_').toUpperCase()}`;
  }
  return (
    <section className=' col-span-3 border border-purple-300 aspect-square rounded-xl p-4 bg-white flex flex-col justify-center items-center pt-10 shadow-sm shadow-purple-300 '>
      <div className='w-24 h-24 rounded-full bg-purple-600 mb-2 animate-pulse '></div>
      <h1 className='font-semibold'>Saidi Mohammed Amine</h1>
      <p className=' text-purple-700 opacity-70' title='societe'>
        {societeName('zahrat amal')}
      </p>
      <div className=' bg-purple-200 bg-opacity-30 px-4  py-2 mt-2 mb-4 rounded text-sm'>
        <p className='font-semibold opacity-75'>system d&apos;information</p>

        <p
          className='text-xs text-purple-700'
          title='Date embauche : 01/07/2014'
        >
          9 An(s) 9 Mois 28 jour (s)
        </p>
      </div>
      <div className=' border-t m-2 p-2 border-purple-200 mt-auto'>
        <span className='pr-2'>EL ALJ MOHAMMED EZINE</span>
        <span className='px-2 text-sm bg-purple-500 rounded-lg text-white'>
          Resp
        </span>
      </div>
    </section>
  );
}
