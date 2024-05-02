import React from 'react';

function Item({ person }) {
  return (
    <div className='person'>
      <h4>first_name: {person.first_name}</h4>
      <h4>last_name: {person.last_name}</h4>
      <p>email: {person.email}</p>
      <p>gender: {person.gender}</p>
      <p>fee_balance: {person.fee_balance}</p>
    </div>
  );
}

export default Item;