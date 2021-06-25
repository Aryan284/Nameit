import React from 'react';
import './App.css';
import Header from '../Header/Header';
import SearchBox from '../SearchBox/SearchBox';
import ResultContainer from '../ResultContainer/ResultContainer';

const name = require('@rstacruz/startup-name-generator');

class App extends React.Component {
    state = {
        headerText: "Name It!",
        headerExpanded: true,
        suggestedNames: [],
    };
    handleInputChange = (inputText) => {
        this.setState({ 
            headerExpanded: !inputText,
            suggestedNames: inputText ? name(inputText): [],
        });
    };

    render() {
        return (
            <div>
                <Header
                    headerExpanded = {this.state.headerExpanded}
                    headtitle = {this.state.headerText} />
                <SearchBox onInputChange = {this.handleInputChange}/>
                <ResultContainer suggestedNames = {this.state.suggestedNames} />
            </div>
        );
    }

}


export default App;