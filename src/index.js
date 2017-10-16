import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar'

const API_KEY = "AIzaSyB1tod9yiSxql5eTefAct6Hk4KF9PCihy0";

/*import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();*/

const App = () => {
    return (
    <div>
        <SearchBar/>
    </div>
    );
}

ReactDOM.render(<App/>, document.getElementById("app"))
