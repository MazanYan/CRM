import React, {Component} from 'react';

export class SidenavComponent extends Component {
    render() {
        return (
            <div id="mySidenav" className="sidenav bg-dark">
                <a href="dashboard.html">Homapage</a>
                <a href="#">Edit clients</a>
                <form className="search">
                    <div className="row">
                        <input type="text" className="form-control btn-outline-secondary" id="uname" placeholder="Search"></input>
                        <div className="btn-group">
                            <button type="button" className="btn btn-sm btn-outline-secondary" id="view_clients">
                                <span className="fa fa-caret-down" aria-hidden="true"/>
                            </button>
                            <button type="button" className="btn btn-sm btn-outline-secondary" id="search_start">
                                <span className="fa fa-search" aria-hidden="true"/>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}