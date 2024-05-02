import React, { useState } from 'react';
import './List.css';
import Item from './Item';

function List({ people, createPerson, updatePerson, deletePerson }) {
  const [newPersonData, setNewPersonData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    gender: '',
    fee_balance: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPersonData({ ...newPersonData, [name]: value });
  };

  const handleCreate = () => {
    if (
      newPersonData.first_name &&
      newPersonData.last_name &&
      newPersonData.email &&
      newPersonData.gender &&
      newPersonData.fee_balance
    ) {
      createPerson({
        ...newPersonData,
        id: Math.floor(Math.random() * 1000)
      });

      setNewPersonData({
        first_name: '',
        last_name: '',
        email: '',
        gender: '',
        fee_balance: ''
      });
    } else {
      alert('Please enter all details for the new person.');
    }
  };

  const handleUpdate = (personId) => {
    const updatedPersonData = {};
    for (let key in newPersonData) {
      const inputValue = prompt(`Enter new ${key}:`);
      if (inputValue !== null) {
        updatedPersonData[key] = inputValue;
      } else {
        return;
      }
    }
    updatePerson({ id: personId, ...updatedPersonData });
  };

  const handleDelete = (personId) => {
    deletePerson(personId);
  };

  return (
    <div className='props'>
      <div>
        <input type="text" name="first_name" placeholder="First Name" value={newPersonData.first_name} onChange={handleInputChange} />
        <input type="text" name="last_name" placeholder="Last Name" value={newPersonData.last_name} onChange={handleInputChange} />
        <input type="email" name="email" placeholder="Email" value={newPersonData.email} onChange={handleInputChange} />
        <input type="text" name="gender" placeholder="Gender" value={newPersonData.gender} onChange={handleInputChange} />
        <input type="number" name="fee_balance" placeholder="Fee Balance" value={newPersonData.fee_balance} onChange={handleInputChange} />
        <button onClick={handleCreate} className="create-button">Create</button>
      </div>

      {people.map(person => (
        <div key={person.id}>
          <Item person={person} />
          <button onClick={() => handleUpdate(person.id)} className="update-button">Update</button>
          <button onClick={() => handleDelete(person.id)} className="delete-button">Delete</button>
        </div>
      ))}
    </div>
  );
}

export default List;