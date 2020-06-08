import React, { useState, useEffect } from 'react';

const defaultState = {

  name: '',
  email: '',
  role: ''

};

const Form = props => {

  const [member, setMember] = useState(defaultState);

  useEffect(() => {

    setMember(props.memberToEdit);

  }, [props.memberToEdit])

  const handleChange = ({ target: { name, value } }) => {

    setMember({ ...member, [name]: value });

  };

  const handleSubmit = event => {

    event.preventDefault();

    if (props.memberToEdit) {

      props.editMember(member)

    } else {

      props.addToTeam({ ...member, id: Date.now() });

    }

    setMember(defaultState);

  };

  return (

    <form onSubmit={handleSubmit}>

      <label htmlFor="name">Name</label>
      <input type="text" name="name" placeholder="Name" value={member.name} onChange={handleChange} required />
      
      <label htmlFor="email">Email</label>
      <input type="email" name="email" placeholder="Email" value={member.email} onChange={handleChange} required />
      
      <label htmlFor="role">Role</label>
      <input type="text" name="role" placeholder="Role" value={member.role} onChange={handleChange} />
      
      <button type="submit">Add Member</button>

    </form>
  );
};

export default Form;