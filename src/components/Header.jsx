import React, { useState } from 'react';
import { CatLists } from './CatLists'; 

export const Header = () => {
  const [cats, setCats] = useState([]);

  const fetchCats = async () => {
    try {
      const response = await fetch('https://nxcuamed0k.execute-api.us-east-1.amazonaws.com/cats');
      if (!response.ok) {
        throw new Error('Failed to fetch cats');
      }
      const data = await response.json();
      setCats(data);
    } catch (error) {
      console.error('Error fetching cats:', error);
    }
  };

  return (
    <div className='bg-green-500 text-white p-5 flex flex-row justify-between items-center w-full fixed mt-12'>
      <a href="#" onClick={fetchCats}>Cats List</a>
      <div>
        <button className='mr-3'>+ Add a cat</button>
        <i className="fa-solid fa-user"></i>
      </div>
      <CatLists cats={cats} />
    </div>
  );
};
