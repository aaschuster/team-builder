import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import MemberList from './MemberList';
import NewMemberForm from './NewMemberForm';

function App() {
  const [ members, setMembers ] = useState([
    {
      name: "Phil Filberson",
      email: "philly@gmail.com",
      role: "Equine redistribution specialist"
    },
    {
      name: "Georgia Carerro", 
      email: "gcarerro@hotmail.com",
      role: "Primary chicken dissection technician"
    },
    {
      name: "Juan Martinez",
      email: "therealjuanmartinez@bigjuan.com",
      role: "General laboratory technician"
    }
  ]);

  return (
    <div className="App">
        <NewMemberForm setMembers={setMembers} members={members}/>
        <MemberList members = {members}/>
    </div>
  );
}

export default App;
