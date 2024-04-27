import Link from 'next/link';
import React from 'react';

function Header() {
  return (
    <header className='flex justify-between items-center '>
      <div className='flex gap-3'>
        <div className='w-12 h-12 rounded-full bg-purple-600'></div>
        <div className=''>
          <h2 className='font-semibold'>Welcome, Amine</h2>
          <p className=' opacity-70'>Responsable IT</p>
        </div>
      </div>
      <div className='flex border   divide-x rounded-md '>
        <Link
          className='py-2 px-6 hover:bg-gray-200 hover:scale-95'
          href={'/empolye'}
        >
          Employe
        </Link>
        <Link
          className='py-2 px-6 hover:bg-gray-200 hover:scale-95'
          href={'/empolye'}
        >
          Employe
        </Link>
        <Link
          className='py-2 px-6 hover:bg-gray-200 hover:scale-95'
          href={'/empolye'}
        >
          Employe
        </Link>
        <Link
          className='py-2 px-6 hover:bg-gray-200 hover:scale-95'
          href={'/empolye'}
        >
          Employe
        </Link>
      </div>
    </header>
  );
}

export default Header;
