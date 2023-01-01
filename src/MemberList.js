import React from 'react'

export default function MemberList ( { members } ) {
    return (
        members.map( (member) => {
            return(
                <div>
                    <h2>{member.name}</h2>
                    <p>{member.email}</p>
                    <p>{member.role}</p>
                </div>
            )
        })
    )
}