import React from 'react';

export const CatLists = ({ cats }) => {
  return (
    <div>
      <h2>Cats</h2>
      <ul>
        {cats.map(cat => (
          <li key={cat.id}>{cat.name}</li>
        ))}
      </ul>
    </div>
  );
};
