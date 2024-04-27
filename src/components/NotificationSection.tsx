'use client';
import React from 'react';
import { Bell } from './icones/Bell';

function NotificationSection() {
  const [mini, setMini] = React.useState(false);
  return (
    <>
      <button
        onClick={() => setMini(!mini)}
        className='bg-neutral-200 shadow-lg p-2 rounded-full text-neutral-800 w-fit ml-auto absolute top-4 right-6'
      >
        <Bell width={24} height={24} />
      </button>
      <div
        className='w-1/3 border-l-2 border-stone-300 h-full flex flex-col p-4'
        style={{ display: mini ? 'none' : 'block' }}
      >
        <div className=' flex pr-4  items-end'>
          <h1 className='font-bold text-2xl'>Notifications</h1>
        </div>
      </div>
    </>
  );
}

export default NotificationSection;
