import React, { Component } from 'react';
import ChirpInfo from './ChirpInfo';

class Chirp extends Component {

    render() {
        return (
            <div className="card pb-3 mb-3">
                <div className="card-header">
                    <ChirpInfo name='Andrew Cartwright' username='atlc' />
                </div>
                <div className="card-body">
                    <p className="card-text">{this.props.text}</p>
                    <a href="#" className="btn btn-info">Rechirp</a> <a href="#" className="btn btn-info">Favorite</a>
                </div>
            </div>
        );
    }
}

export default Chirp;