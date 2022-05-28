import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import MyApp from './MyApp';
import './index.css';
import * as serviceWorker from './serviceWorker';

import { MoralisProvider } from "react-moralis"

ReactDOM.render(
    <React.StrictMode>
    <MoralisProvider
        serverUrl="process.env.REACT_PUBLIC_MORALIS_SERVER"
        appId="process.env.REACT_PUBLIC_MORALIS_APP_ID"
    >
        <MyApp />
    </MoralisProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();