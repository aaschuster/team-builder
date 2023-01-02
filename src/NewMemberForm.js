import React, { useState } from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    margin: 0.7% auto;
    align-items: stretch;
    height: 20vh;
    width: 20%;
    justify-content: space-around;
`

export default function NewMemberForm ( { setMembers, members } ) {

    const memberInitVals = {
        name: "",
        email: "",
        role: ""
    }

    const [ newMember, setNewMember ] = useState(memberInitVals);

    function onChange ( evt ) {
        setNewMember({ ...newMember, [evt.target.name]: [evt.target.value ]});
    }

    function onSubmit ( evt ) {
        evt.preventDefault();
        setMembers( [ newMember, ...members] );
        setNewMember(memberInitVals);
    }

    return(
        <StyledForm onSubmit={onSubmit}>
                <input 
                    type="text"
                    name="name"
                    placeholder='Full name here...'
                    onChange={onChange}
                    value={newMember.name}
                />
                <input 
                    type="email"
                    name="email"
                    placeholder='Email address here...'
                    onChange={onChange}
                    value={newMember.email}
                />
                <select 
                    onChange={onChange}
                    name="role"
                    value={newMember.role}
                >
                    <option></option>
                    <option>Equine redistribution specialist</option>
                    <option>Primary chicken dissection technician</option>
                    <option>General laboratory technician</option>
                    <option>Feline aquisition specialist</option>
                    <option>Canine redistribution coordinator</option>
                    <option>Elephant nomenclature generation specialist</option>
                    <option>International pigeon relations manager</option>
                </select>
                <input
                    type="submit"
                />
        </StyledForm>
    )
}