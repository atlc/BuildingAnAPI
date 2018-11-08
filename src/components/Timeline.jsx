import React, { Component } from 'react';
import Chirp from './Chirp';

class Timeline extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this); 
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            placeholder: 'Chirp something to the world!',
            chirpboxText: '',
            chirpsList: [
                "<Reverend> IRC is just multiplayer notepad.",
                "<Sonium> someone speak python here? <lucky> HHHHHSSSSSHSSS <lucky> SSSSS <Sonium> the programming language",
                "<erno> hm. I've lost a machine.. literally _lost_. it responds to ping, it works completely, I just can't figure out where in my apartment it is.",
                "<Patrician|Away> what does your robot do, sam <bovril> it collects data about the surrounding environment, then discards it and drives into walls"
            ]
        }
    }


    handleChange(event) {
        this.setState({ chirpboxText: event.target.value });
    }

    handleClick() {
        this.setState({
            chirpsList: [
                this.state.chirpboxText,
                ...this.state.chirpsList
            ],
            chirpboxText: ''
        });

    }


    render() {
        let updatedChirps = this.state.chirpsList.map((chirp, index) => { 
            return <Chirp key={index} text={chirp} />
        });

        return (
            <div className='col-6'>
                <div className="input-group mb-4 pb-4">
                    <textarea onChange={(event) => this.handleChange(event)} type="text" className="form-control" placeholder={this.state.placeholder} value={this.state.chirpboxText} id='Chirpbox' />
                    <button onClick={this.handleClick} className="btn btn-outline-info" type="button">Chirp!</button>
                </div>
                {updatedChirps}
            </div>
        );
    }
}

export default Timeline;