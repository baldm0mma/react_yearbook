import React from 'react';
import Person from './Person';
import './Cohort.css';

const Cohort = props => {
  const staffMembers = props.staff.map(member => {
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
