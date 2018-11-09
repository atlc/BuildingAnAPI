import React, { Component } from 'react';
import LeftPanel from './LeftPanel';
import Navbar from './Navbar';
import Footer from './Footer';
import RightPanel from './RightPanel';
import Timeline from './Timeline';

class App extends Component {


    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <Navbar />
                </div>
                <div className='row mt-5 pt-5 justify-content-between'>
                    <LeftPanel />
                    <Timeline />
                    <RightPanel />
                </div>
                <div className='row'>
                    <Footer />
                </div>
            </div>
        );
    }
}

export default App;