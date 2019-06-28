import React from 'react';
import Person from './Person';
import './Cohort.css';

const Cohort = props => {
  
  const filteredStaff = props.staff.filter(member => {
    console.log('2', props.filter);
    if (props.filter === undefined) {
      console.log('if');
      return member;
    } else {
      console.log('else');
      return member.name.includes(props.filter.toLowerCase()) || member.name.includes(props.filter.toUpperCase());
    }
  })

  const staffMembers = filteredStaff.map(member => {
    return (
      <Person
        key={member.id}
        name={member.name}
        quote={member.quote}
        superlative={member.superlative}
        photo={member.photo}
      />
    );
  });

  const students = props.students.map(member => {
    return (
      <Person
        key={member.id}
        name={member.name}
        quote={member.quote}
        superlative={member.superlative}
        photo={member.photo}
      />
    );
  });

  return (
    <div>
      <h2 className='staff_header'>Staff</h2>
      <div className='allStaff'>{staffMembers}</div>
      <h2 className='student_header'>Students</h2>
      <div className='allStudents'>{students}</div>
    </div>
  );
};

export default Cohort;
