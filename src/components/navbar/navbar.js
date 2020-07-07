import React from 'react'

export default function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="navbar-brand" href="#">Employee Directory</div>
            <form class="form-inline my-2 my-lg-0">
                <input
                    className="form-control mr-sm-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search">
                    name="search"
                    onSearch={props.handleInputChange}
                    value={props.search}
                    /></input>
            </form>
        </nav>
    )
}
