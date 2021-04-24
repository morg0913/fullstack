import React from "react";
import PostPage from "./PostPage";
import {Button} from "@material-ui/core";
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';

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
        this.setState({title: event.target.value});
        this.setState({context: event.target.value});
        this.setState({picLink: event.target.value});
    }

    onFormSubmit = event => {
        event.preventDefault();
        // this.func();
    }

    render() {
        return (
            <div align="center">
                <form onSubmit={this.onFormSubmit} className={NewPost.root} noValidate autoComplete="off">
                    <div className="field">
                        <label>
                            <TextField
                                id="filled-secondary"
                                label="Title"
                                variant="filled"
                                color="secondary"
                                value={this.state.title}
                                onChange={this.onInputChange}
                            />

                            <TextField
                                id="standard-full-width"
                                label="Context"
                                style={{ margin: 8 }}
                                placeholder="Write your context"
                                margin="normal"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                value={this.state.context}
                                onChange={this.onInputChange}
                            />
                            <br></br><br></br>
                            <div className={NewPost.root}>
                                <input accept="image/*" className={NewPost.input} id="icon-button-file" type="file" />
                                <label htmlFor="icon-button-file">
                                    <IconButton color="primary" aria-label="upload picture" component="span" value={this.state.picture}
                                                onChange={this.onInputChange}>
                                    </IconButton>
                                </label>
                            </div>



                        </label>
                        <br></br><br></br>
                        <Button
                            onClick={this.onInputChange}
                            variant="contained"
                            color="primary"
                            size="large"
                            className={NewPost.button}
                            startIcon={<SaveIcon />}
                        >
                            Save
                        </Button>

                    </div>
                </form>
            </div>
        );
    }
}


export default NewPost;