import React from "react";
//import axios from 'axios';
//import SearchBar from "./SearchBar";
//<SearchBar />
class Weather extends React.Component {


    constructor(props){
        super(props);
        this.state= {
            //name: this.props.name || 'New York',
            name: '',
            weather: {}
        };
    }


    onInputChange = event => {
        this.setState({ name: event.target.value });
    };
    onFormSubmit = event => {
        event.preventDefault();
        this.func();
    };

    func = () => {
        const axios = require('axios');
        const name = this.state.name;
        //const name = this.handleChange;
        const key = '80018ff105ff1e28ae47efc1c3639719';
        const units = 'metric';
        // ` - means S T R I N G - F O R M A T, so we can put later with ->  ${} <-  will be a value we can use
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${key}&units=${units}\n`;
        axios.get(url)
            .then( response =>  {
                // handle success
                if(response && response.data && response.status === 200) {
                    this.setState({
                        weather: response.data
                    })
                }
            });
    }

    render() {
        const { weather} = this.state;
        return <div>

            <form onSubmit={this.onFormSubmit} className="ui form">
                <div className="field">
                    <label>  Search </label>
                    <input
                        type="text"
                        value={this.state.name}
                        onChange={this.onInputChange}
                    />
                </div>
            </form>

            <h1>{this.state.name}</h1>
            {weather.main &&
            (<div><div>{weather.main.temp}</div>
                <div>{weather.weather[0].main}</div>
                <div>feels like: {weather.main.feels_like}</div>
            </div>)}
        </div>;
    }
}
export default Weather;