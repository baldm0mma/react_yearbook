import React from 'react';
import './Person.css';

const Person = props => {
  
  return (
    <div className='member_container'>
      <div className='photo_container'>
        <img className='photo' src={props.photo} alt='staff member' />
      </div>
      <div className='name'>
        {props.name}
      </div>
      <div className='quote'>
        "{props.quote}"
      </div>
      <div className='superlative'>
        {props.superlative}
      </div>
    </div>
  );
}

export default Person;
