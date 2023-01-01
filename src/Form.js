import React from 'react'

export default function Form ( props ) {
    return(
        <div>
            <input 
                type="text"
                name="name"
                placeholder='Full name here...'
            />
            <input 
                type="email"
                name="email"
                placeholder='Email address here...'
            />
            <select>
                <option>Equine redistribution specialist</option>
                <option>Primary chicken dissection technician</option>
                <option>General laboratory technician</option>
            </select>
            <input
                type="submit"
            />
        </div>
    )
}