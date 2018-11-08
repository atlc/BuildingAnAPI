import React, { Component } from 'react';

class Footer extends Component {


    render() {
        return (
            <div className='col-12 mt-5 pt-5'>
                <nav className='navbar navbar-bottom navbar-dark bg-dark'>
                    <ul className='nav nav-pills nav-fill'>
                        <li className='nav-item'>
                            <button className='btn btn-info pr-1 mr-1' href='#'>Contact</button>
                        </li>
                        <li></li>
                        <li className='nav-item'>
                            <button className='btn btn-outline-info' href='#'>Copyright 2018</button>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Footer;