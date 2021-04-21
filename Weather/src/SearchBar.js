import React from 'react';

class SearchBar extends React.Component {
    state = { name: ' ' };

    onInputChange = event => {
        this.setState({ name: event.target.value });
    };
    onFormSubmit = event => {
        this.props.onFormSubmit(this.state.name);
        event.preventDefault();
    };

    render() {
        return(
            <div className="search-bar ui segment">
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
            </div>
        );
    }
}

export default SearchBar;