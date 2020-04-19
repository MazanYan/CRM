import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faUserTie, faEnvelope, faChartBar, faShoppingBasket, faCogs } from '@fortawesome/free-solid-svg-icons';

export class DashboardComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <section className="jumbotron text-center">
                    <div className="container">
                    </div>
                </section>

                <div className="album py-5 bg-light">
                    <div className="container">

                        <div className="row">
                            <div className="col-md-4">
                                <div className="card mb-4 shadow-sm">
                                    <div styles = "text-align: center;">
                                        <span styles = "font-size: 50px;">
                                            <FontAwesomeIcon size="3x" icon={faEnvelope}/>
                                        </span>
                                    </div>
                                    <div className="card-body">
                                    <p className="card-text">My Messages</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="col text-center">
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-sm btn-outline-secondary" id = "view_messages">View</button>
                                                <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-6 col-md-4">
                            <div className="card mb-4">
                                <div styles = "text-align: center;">
                                    <span styles = "font-size: 50px;">
                                        <FontAwesomeIcon size="3x" icon={faUsers} />
                                    </span>
                                </div>
                                <div className="card-body">
                                <p className="card-text">Clients</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="col text-center">
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-sm btn-outline-secondary" id = "view_clients">View</button>
                                            <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>

                            <div className="col-6 col-md-4">
                            <div className="card mb-4 shadow-sm">
                                <div styles = "text-align: center;">
                                    <span styles = "font-size: 50px;">
                                    <FontAwesomeIcon size="3x" icon={faUserTie} />
                                    </span>
                                </div>
                                <div className="card-body">
                                <p className="card-text">Coworkers</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="col text-center">
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-sm btn-outline-secondary" id = "view_coworkers">View</button>
                                            <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>

                            <div className="col-6 col-md-4">
                            <div className="card mb-4 shadow-sm">
                                <div styles = "text-align: center;">
                                    <span styles = "font-size: 50px;">
                                        <FontAwesomeIcon size="3x" icon={faChartBar} />
                                    </span>
                                </div>
                                <div className="card-body">
                                <p className="card-text">Analytics</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="col text-center">
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-sm btn-outline-secondary" id = "view_analytics">View</button>
                                            <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>

                            <div className="col-6 col-md-4">
                            <div className="card mb-4 shadow-sm">
                                <div styles = "text-align: center;">
                                    <span styles = "font-size: 50px;">
                                        <FontAwesomeIcon size="3x" icon={faShoppingBasket} />
                                    </span>
                                </div>
                                <div className="card-body">
                                <p className="card-text">Company services</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="col text-center">
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-sm btn-outline-secondary" id = "view_services">View</button>
                                            <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>

                            <div className="col-6 col-md-4">
                            <div className="card mb-4 shadow-sm">
                                <FontAwesomeIcon size="3x" icon={faCogs} />
                                <div className="card-body">
                                <p className="card-text">Settings</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="col text-center">
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-sm btn-outline-secondary" id = "view_settings">View</button>
                                            <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>

            </React.Fragment>
        );
    }
}