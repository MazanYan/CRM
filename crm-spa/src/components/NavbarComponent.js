import React, {Component} from 'react';
import {SidenavComponent} from './SidenavComponent';

export class NavbarComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header className="App-header">
                <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="navbar-link navbar-brand" href="#">Username_yan</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Admin</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Dashboard</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Messages</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <button type="button" className="btn btn-primary d-inline" styles="float: right" href="login.html">Log out</button>
                        </li>
                    </ul>
                </nav>

                <SidenavComponent />
            </header>
        );
    }
}