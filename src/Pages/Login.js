import React from "react";
import TextField from "@material-ui/core/TextField";
import InputAdornments from "./InputAdornments";
import Button from '@material-ui/core/Button';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import AboutMe from "./AboutMe";

function Login(props){

    console.log("Login");


    return(
        <div align="center">

            <h2 >Login</h2>

            <TextField
                id="standard-full-width"
                style={{ margin: 8 }}
                placeholder="U s e r  N a m e"
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <InputAdornments />
            <br></br>
            <Button variant="contained"><b>Login</b></Button>
            <br></br><br></br>

            {/*<Router>*/}
                <Link to="/Login">Forgot Username / Password</Link>

            {/*        <Route path="/Login">*/}
            {/*            <Login/>*/}
            {/*        </Route>*/}

            {/*</Router>*/}




        </div>
    );
}

export default Login;