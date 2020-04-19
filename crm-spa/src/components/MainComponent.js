import React, {Component} from 'react';
import {DashboardComponent} from './DashboardComponent';
import {NavbarComponent} from './NavbarComponent';

export class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <NavbarComponent/>
                <DashboardComponent/>
            </React.Fragment>
        );
    }
}