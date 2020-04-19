import React, {Component} from 'react';


export class MessagesComponent extends Component {
    render() {
        return (
            <React.Fragment>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Product Name</th>
                            <th scope="col">Vendor Name</th> 
                            <th scope="col">Unit Price ($)</th>
                            <th scope="col">Vendor E-mail</th>
                            <th scope="col">Description</th>
                            <th scope="col">Category</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row" styles="align: center">19DDXF</th>
                            <td>Marble Statue "Weeping Angel"</td>
                            <td>Statue Prom</td>
                            <td>800</td>
                            <td>statue_prom@example.com
                                <button type="button" className="btn" styles="float: right; height: 100%;"  href="write_message.html">
                                    <i className="fa fa-envelope"></i>
                                </button>
                            </td>
                            <td>A beautiful iconic statue from Doctor Who</td>
                            <td>Sculptures</td>
                        </tr>
                    </tbody>
                    <tr>
                        <td colspan="7" styles="text-align: center">
                            <button type="button" className="btn" id="add_client" styles="display: inline-block; width: 100%; height: 100%">
                                <span className="fa fa-plus" aria-hidden="true"/>
                            </button>					
                        </td>
                    </tr>
                </table>
            </React.Fragment>
        );
    }
}
