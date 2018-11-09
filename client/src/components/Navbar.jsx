import React, { Component } from 'react';

class Navbar extends Component {



    render() {
        return (
            <nav className='navbar fixed-top navbar-dark bg-dark'>
                <ul className='nav nav-pills nav-fill col-5'>
                    <li className='nav-item'>
                        <button className='btn btn-info' href='#'>Home</button>
                    </li>
                    <li className='nav-item'>
                        <button className='btn btn-outline-info' href='#'>Moments</button>
                    </li>
                    <li className='nav-item'>
                        <button className='btn btn-outline-info' href='#'>Notifications</button>
                    </li>
                    <li className='nav-item'>
                        <button className='btn btn-outline-info' href='#'>Messages</button>
                    </li>
                </ul>
                <div className='col-1'>
                    <img src={require('../images/birdo.ico')} alt='' style={{width: '48px', height: '48px'}} />
                </div>
                <form className="form-inline col-4">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search for Chirps" aria-label="Search" />
                    <button className="btn btn-outline-info my-2 my-sm-0" type="submit">Search</button>
                </form>
                <div className='col-1'>
                    <img src={require('../images/me.png')} alt='' style={{width: '48px', height: '48px', borderRadius: '50%'}} />
                </div>
            </nav>
        );
    }
}

export default Navbar;