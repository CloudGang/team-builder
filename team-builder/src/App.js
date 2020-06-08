import React, { useState } from 'react';
import Form from './components/Form';
import Team from './components/Team';
import styled from "styled-components";
import Loader from 'react-loader-spinner'
import './App.css'

function App() {

  const Sup = styled.div `

    text-decoration: underline;

  `
  const [team, setTeam] = useState([

    {

      id: 1,
      name: <Sup>SUPREME</Sup>,
      role: "Full Stack Web Deleloper",
      email: "CloudBotsBiz@gmail.com"

    },
    {

      id: 2,
      name: "Chance R.",
      role: "Team Leader",
      email: "chance-rutledge@lambdastudents.com"

    }

  ]);

  const [memberToEdit, setMemberToEdit] = useState(false);

  const addToTeam = member => {

    setTeam([...team, member]);

  };

  const editMember = changes => {

    setTeam(team.map(member => (member.id === changes.id ? changes : member)));
    
    setMemberToEdit(false);

  };

  const deleteMember = id => {

    setTeam(team.filter(member => member.id !== id));

  }

  const Els = styled.div `

    header{

      color: white;
      text-shadow: 0 0 6px rgb(9, 218, 255);
      &:hover{
        color: cyan;
        text-shadow: 0 0 8px rgb(9, 218, 255);
      }
    
    }

    form{

      padding: 1rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      label {
        color: white;
      }

    }

    .member {

      margin: 50px;
      background: rgba(120, 120, 120, .2);
      border-radius: 5px;
      border: 1px outset black;
      padding: 1rem;
      display: flex;
      flex-direction: column;
      height: calc(100% - 3rem);
      overflow-y: none;

    }

    .member:hover{

      border: 1px inset cyan;
      background: rgba(25, 25, 25, .5);
      color: white;
      text-shadow: 0 0 4px rgb(9, 218, 255);

    }

    form {

      display: flex;
      flex-direction: column;
      max-width: 200px;

    }

    input:hover {

      border: 1px outset red;
      color: red;
      text-shadow: 0 0 4px rgb(9, 218, 255);

    }

    button {

      background: white;
      border: 1px solid black;
      padding: 2px;
      width: 100%;
      

      &[type='submit'] {

        margin-top: 10px;

      }

      &:first-of-type {

        margin-right: 5px;

      }

      &:hover {

        cursor: pointer;
        background: cyan;
        color: purple;
        font-weight: bold;
        border: 1px solid purple;

      }

    }

  `
  
  return (

    <div className="App">

      <center>
        <Els>

          <header className="App-header">

            <h1>Supreme Team</h1>

          </header>

          <Form

            addToTeam={addToTeam}
            memberToEdit={memberToEdit}
            editMember={editMember}

          />

          <Loader type="ThreeDots" color="cyan" secondaryColor="#ffffff " height={100} width={200} timeout={0} />
          
          <Team 

          team={team} 
          setMemberToEdit={setMemberToEdit} 
          deleteMember={deleteMember}

          />

        </Els>
      </center>
      
    </div>
  );
}

export default App;


