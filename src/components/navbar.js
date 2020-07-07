import React from 'react';
import React, { searchInput } from "react";
import People from 


export default function Navbar(props) {
    return (
        <div className="navbar-brand">
            <header className="App-header">
                <div className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container"></div>
                    <h1 className="display-4 text-center">Employee Directory</h1>
                    <div className="navbar-brand" href="#">Employee Directory</div>
                    <h2 className="text-center">
                        Filter Results
            </h2>
                </div>
                <input className="Search" placeholder="Search"></input>
                <hr />
                <Container />

                <NewRandoUser />
            </header>
        </div>

    )
}
