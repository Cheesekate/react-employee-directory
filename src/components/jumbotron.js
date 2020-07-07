import React from 'react';



export default function Jumbotron = (props) => {
    return (
        <tr>
            <td>
                <img src={photo} alt="Employee Photo" />
            </td>
            <td> {name}</td>
            <td> {email}</td>
            <td> {phone}</td>
            <td> {location}</td>
            <td> {dob}</td>

        </tr>
    );
}


