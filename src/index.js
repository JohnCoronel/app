import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux';
import RootReducer from './app/reducer'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import {BrowserRouter} from 'react-router-dom';
// import 'normalize.css';
import App from './app/App';
import registerServiceWorker from './registerServiceWorker';


const store = createStore(RootReducer,composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render(
<Provider store = {store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
</Provider>
, document.getElementById('root'));

registerServiceWorker();
