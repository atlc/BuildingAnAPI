import React, { Component } from 'react';

class ChirpInfo extends Component {


    render() {
        let d = new Date();

        return (
            <p><img src={require('../images/me.png')} alt='' style={{width: '48px', height: '48px', borderRadius: '50%'}} />   <strong>{this.props.name}</strong>, <em>@{this.props.username}   -   {d.toDateString()}, {d.getHours()}:{d.getMinutes()}</em></p>
        );
    }
}

export default ChirpInfo;