import React, { Component } from 'react';
// import { convertBytes } from './helpers';
// import moment from 'moment';
import { Footer, UploadFileForm, InfoTable } from '../Containers'

class Main extends Component {
    render() {
        return (
            <div className='content'>
                <UploadFileForm />
                <InfoTable />
                <Footer />
            </div>
        );
    }
}

export default Main;