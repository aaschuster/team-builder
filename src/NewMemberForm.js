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

    const [ newMember, setNewMember ] = useState( {
        name: "",
        email: "",
        role: ""
    } );

    function onChange ( evt ) {
        setNewMember({ ...newMember, [evt.target.name]: [evt.target.value ]});
    }

    function onSubmit ( evt ) {
        evt.preventDefault();
        console.log(newMember);
        setMembers( [ newMember, ...members] );

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
                </select>
                <input
                    type="submit"
                />
        </StyledForm>
    )
}