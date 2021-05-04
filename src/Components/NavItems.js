import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import SvgIcon from '@material-ui/core/SvgIcon';
import {Link} from "@material-ui/core";

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});

function HomeIcon(props) {
    return (
        <SvgIcon {...props}>
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </SvgIcon>
    );
}

export default function NavItems() {


    return (
        <div>
            <List >
                    <ListItem button component="a" href="/" key='HomePage'>
                        <ListItemIcon>
                            <HomeIcon color="primary"/>
                        </ListItemIcon>
                        <ListItemText primary='HomePage'/>
                    </ListItem>

                <ListItem button component="a" href="/AboutMe" key='/AboutMe'>
                    <ListItemIcon><InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary='AboutMe' />
                </ListItem>

                <ListItem button component="a" href="/NewPost" key='NewPost'>
                    <ListItemIcon><InboxIcon />
                    </ListItemIcon>
                    <ListItemText  primary='NewPost' />
                </ListItem>


            </List>
        </div>
    );
}