import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div className='bg-green-500 text-white p-5 flex flex-row justify-between items-center w-full fixed mt-12'>
      <Link to="/cats">Cats List</Link>
      <div>
        <button className='mr-3'>+ Add a cat</button>
        <i className="fa-solid fa-user"></i>
      </div>
    </div>
  );
};
