import React from 'react';



export default function Jumbotron() {
    return (
        <tr>
            <td>
                <img src={props.photo} alt="Employee Photo" />
            </td>
            <td> {props.name}</td>
            <td> {props.email}</td>
            <td> {props.phone}</td>
            <td> {props.location}</td>
            <td> {props.datofbirth}</td>

        </tr>
    );
}


