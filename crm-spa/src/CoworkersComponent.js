import React, {Component} from 'react';

export class CoworkersComponent extends Component {
    render() {
        return (
            <React.Fragment>
                <header>
                    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                        <span style="color: #ffffff; margin-right: 10px; font-size:30px; cursor:pointer" onclick="openCloseNav()">&#9776;</span>
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                                <a class="navbar-link navbar-brand" href="#">Username_yan</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Admin</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Dashboard</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Messages</a>
                            </li>
                        </ul>
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <button type="button" class="btn btn-primary d-inline" style="float: right" href="login.html">Log out</button>
                            </li>
                        </ul>
                    </nav>
                </header>

                <div id="mySidenav" class="sidenav bg-dark">
                    <a href="dashboard.html">Homapage</a>
                    <form class="search">
                        <div class="row">
                            <input type="text" class="form-control btn-outline-secondary" id="uname" placeholder="Search"></input>
                            <div class="btn-group">
                                <button type="button" class="btn btn-sm btn-outline-secondary" id="view_clients">
                                    <span class="fa fa-caret-down" aria-hidden="true"/>
                                </button>
                                <button type="button" class="btn btn-sm btn-outline-secondary" id="search_start">
                                    <span class="fa fa-search" aria-hidden="true"/>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>

                <div class="main-content">
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Username</th>
                                <th scope="col">First name</th>
                                <th scope="col">Last name</th>
                                <th scope="col">Last activity on</th>
                                <th scope="col">E-mail</th>
                                <th scope="col">Phone number</th>
                                <th scope="col">Address</th>
                                <th scope="col">HR module</th>
                                <th scope="col">Company services</th>
                                <th scope="col">Work with clients</th>
                                <th scope="col">Analytics</th>
                                <th scope="col">Additional comment</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row" style="vertical-align: middle">FFXX12</th>
                                <td>G. Brian</td>
                                <td>Graham</td>
                                <td>Brian</td>
                                <td>12 January 2020</td>
                                <td>brian@example2.com
                                    <button type="button" class="btn" style="float: right; height: 100%;"  href="write_message.html">
                                        <i class="fa fa-envelope"></i>
                                    </button>
                                </td>
                                <td>+(123) 45-678-90-12</td>
                                <td>Khreshchatyk str, 54, Kyiv, Ukraine</td>
                                <td>Admin</td>
                                <td>Has access</td>
                                <td>Has access</td>
                                <td>No access</td>
                                <td></td>
                            </tr>
                        </tbody>
                        <tr>
                            <td colspan="13" style="text-align: center">
                                <button type="button" class="btn" id="add_client" style="display: inline-block; width: 100%; height: 100%">
                                    <span class="fa fa-plus" aria-hidden="true"/>
                                </button>					
                            </td>
                        </tr>
                    </table>
                </div>
            </React.Fragment>
        )
    }
}