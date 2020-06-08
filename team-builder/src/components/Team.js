import React from 'react';

const Team = props => {

  return (

    <div>

      {props.team.map(member => (
        
        <div className="member" key={member.id}>

          <h2>{member.name}</h2>
          <h3>{member.email}</h3>
          <h4>{member.role}</h4>
          <button onClick={() => props.setMemberToEdit(member)}>Edit</button>
          <button onClick={() => props.deleteMember(member.id)}>Delete</button>
        
        </div>
      
      ))}

    </div>

  );
  
};

export default Team;