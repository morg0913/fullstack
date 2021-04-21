import React from "react";
import PostPage from "./PostPage";

class NewPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            context: '',
            picLink: ''
        }

    }

    onInputChange = event => {
        this.setState({ title: event.target.value });
        this.setState({ context: event.target.value });
        this.setState({ picLink: event.target.value });
    };
    onFormSubmit = event => {
        event.preventDefault();
        // this.func();
    };

        render()
        {
            return (
                <div>
                    <form onSubmit={this.onFormSubmit} className="ui form">
                        <div className="field">
                            <label> Title:

                                <input
                                type="text"
                                value={this.state.title}
                                onChange={this.onInputChange}
                                />

                             Content:

                                <input
                                type="text"
                                value={this.state.content}
                                onChange={this.onInputChange}
                                />

                             Picture:
                                <input
                                    type="text"
                                    value={this.state.picLink}
                                    onChange={this.onInputChange}
                                />

                            </label>
                            <button onClick={this.onInputChange}>Save</button>
                        </div>

                    </form>

                </div>
            );
        }
    }



export default NewPost;