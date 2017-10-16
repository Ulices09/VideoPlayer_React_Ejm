import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'

import SearchBar from './components/search_bar'

const API_KEY = "AIzaSyB1tod9yiSxql5eTefAct6Hk4KF9PCihy0";

class App extends Component {

    constructor(props) {
        super(props);

        this.state = { videos: [] }

        YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
            this.setState({ videos })
        });
    }

    render () {
        return (
            <div>
                <SearchBar/>
            </div>
        );
    }
    
}

ReactDOM.render(<App/>, document.getElementById("app"))
