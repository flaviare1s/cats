import React, { useState } from 'react';

export const Header = () => {

  return (
    <div className='bg-green-500 text-white p-5 flex flex-row justify-between items-center w-full fixed mt-16'>
      <a href="#">Cats List</a>
      <div className='flex'>
        <button className='mr-3 border border-white rounded-lg px-4'>+ Add a cat</button>
        <div className='w-10 h-10 rounded-full border border-white flex items-center justify-center'><i className="fa-solid fa-user"></i></div>
      </div>
    </div>
  );
};
