import React, { Component } from 'react';

class LeftPanel extends Component {



    render() {
        return (
            <div className='col-3'>
                <ul className='nav flex-column'>
                    <li className='nav-item'>
                        <a className='nav-link' href='#'>Trending Tweets</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link' href='#'>Trending Topics</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link' href='#'>Trending People</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link' href='#'>Stories of the day</a>
                    </li>
                    <li></li>
                </ul>
            </div>
        );
    }
}

export default LeftPanel;