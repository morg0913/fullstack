import React from "react";
import TextField from "@material-ui/core/TextField";
import InputAdornments from "./InputAdornments";
import Button from '@material-ui/core/Button';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import LockOpenTwoToneIcon from '@material-ui/icons/LockOpenTwoTone';
import NavBar from "../Components/NavBar";
function Login(props){

    return(
        <div align="center">
            <NavBar name={"Login"}/>

            <h2 style={{color:"#347299"}}>
                Login <br></br>
                <ListItemIcon>
                <LockOpenTwoToneIcon color="primary" fontSize={"large"}/>
            </ListItemIcon></h2>

            <TextField
                id="standard-full-width"
                style={{ margin: 8, color:"#347299" }}
                placeholder="U s e r  N a m e"
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <InputAdornments />
            <br></br>
            <Button variant="contained" style={{color:"#347299"}}><b >Login</b></Button>
            <br></br><br></br>

            {/*<Router>*/}
                <Link to="/Login" style={{color:"#347299"}}>Forgot Username / Password</Link>

            {/*        <Route path="/Login">*/}
            {/*            <Login/>*/}
            {/*        </Route>*/}

            {/*</Router>*/}




        </div>
    );
}

export default Login;