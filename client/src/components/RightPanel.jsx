import React, { Component } from 'react';

class RightPanel extends Component {



    render() {
        return (
            <div className='col-3'>
                <ul className='nav flex-column'>
                    <li className='nav-item'>
                        <a className='nav-link' href='#'>Accounts to Follow</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link' href='#'>Suggested Trends</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link' href='#'>Cats</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link' href='#'>Doggos</a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default RightPanel;