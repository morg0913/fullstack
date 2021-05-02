import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {BrowserRouter as Router} from "react-router-dom";
import NavItems from "./NavItems";
import Drawer from '@material-ui/core/Drawer';
import ListItem from "@material-ui/core/ListItem";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,

    },
    menuButton: {
        marginRight: theme.spacing(2),

    },
    title: {
        flexGrow: 1,

    },
}));

function NavBar(props) {
    const classes = useStyles();
    const [isMenuOpen, SetIsMenuOpen] = useState(false);

    return (
        <div className={classes.root}>
            <AppBar position="static" >
                <Toolbar >
                    <IconButton edge="start" className={classes.menuButton} color="default" aria-label="menu"
                                onClick={() => SetIsMenuOpen(true)}>
                        <MenuIcon/>

                    </IconButton>
                    <Drawer open={isMenuOpen} onClose={() => SetIsMenuOpen(false)}>
                        <NavItems/>
                    </Drawer>
                    <Typography variant="h6" className={classes.title}>
                        {props.name}
                    </Typography>
                    <Button component="a"  href="/Login" key='Login' color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default NavBar;