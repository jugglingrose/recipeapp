import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
/*import registerServiceWorker from './registerServiceWorker';*/
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.css';



/* import BrowserRouter from 'react-router-dom' */
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
    , document.getElementById('main')
);
