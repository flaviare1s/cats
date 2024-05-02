import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Header } from './Header';

function CatForm({ onAddCat }) {
  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
  const [age, setAge] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name && breed && age && description) {
      onAddCat({ name, breed, age, description });
      setName('');
      setBreed('');
      setAge('');
      setDescription('');
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={() => onAddCat(null)}>&times;</span>
        <h2>Adicionar um Gato</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </label>
          <br />
          <label>
            Raça:
            <input type="text" value={breed} onChange={(e) => setBreed(e.target.value)} />
          </label>
          <br />
          <label>
            Idade:
            <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
          </label>
          <br />
          <label>
            Descrição:
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
          </label>
          <br />
          <button type="submit">Add</button>
        </form>
      </div>
    </div>
  );
}

CatForm.propTypes = {
  onAddCat: PropTypes.func.isRequired
};

function App() {
  const [cats, setCats] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const handleAddCat = (cat) => {
    if (cat) {
      setCats([...cats, cat]);
    }
    setShowForm(false);
  };

  return (
    <div>
      <Header />
      <h1>Minha Lista de Gatos</h1>
      <button onClick={() => setShowForm(true)}>+ Add a Cat</button>
      {showForm && <CatForm onAddCat={handleAddCat} />}
      <ul>
        {cats.map((cat, index) => (
          <li key={index}>
            <strong>Name:</strong> {cat.name}, <strong>Breed:</strong> {cat.breed}, <strong>Age:</strong> {cat.age}, <strong>Description:</strong> {cat.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
