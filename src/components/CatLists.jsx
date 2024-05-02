import React, { useContext } from 'react';
import { GlobalContext } from '../GlobalContext'; 

export const CatLists = () => {
  const { cats } = useContext(GlobalContext);

  return (
    <div>
      <h1>Cat Lists</h1>
      <ul>
        {cats.map(cat => (
          <li key={cat.id}>
            <p>Name: {cat.name}</p>
            <p>Description: {cat.description}</p>
            <p>Breed: {cat.breed.name}</p>
            <p>Owner Email: {cat.owner_email}</p>
            {cat.photo.url && <img src={cat.photo.url} alt={cat.name} />}
          </li>
        ))}
      </ul>
    </div>
  );
};
