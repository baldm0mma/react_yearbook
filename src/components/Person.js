import React from 'react';
import './Person.css';

const Person = props => {
  const { name, quote, photo, superlative } = props;
  return (
    <div className='member_container'>
      <div className='photo_container'>
        <img className='photo' src={photo} alt='staff member' />
      </div>
      <div className='name'>
        {name}
      </div>
      <div className='quote'>
        "{quote}"
      </div>
      <div className='superlative'>
        {superlative}
      </div>
    </div>
  );
}

export default Person;
