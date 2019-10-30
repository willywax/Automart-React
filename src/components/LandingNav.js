import React from 'react';
import { Link } from "react-router-dom";
import { Button, Grid } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import '../styles/header.scss';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    button: {
        color: '#ffffff',
        textAlign: "center",
        height: 40,
        borderRadius: 20,
        width: 100,
        backgroundColor: '#f76e43',

    },

  }));

function LandingNav(props) {
    const classes = useStyles();
    let NavBar = (props.logged_In === 'true')? LoggedIn(classes) : NotLoggedIn(classes);
    return (
        NavBar
    )
}

function NotLoggedIn(classes){
    return (
        <Grid container alignContent='center' alignItems='center' className='nav'>
            <Grid item xs={4}>
                <Button className={classes.button}>POST AD</Button>
            </Grid>
            <Grid item xs={4} className='link-container'>
                <Link to="/signin" className='link'>SIGN IN</Link>
            </Grid>
            <Grid item xs={4}>
                <Link to="/signup" className='link'>SIGN UP</Link>
            </Grid>
        </Grid>
    )
}

function LoggedIn(classes){
    return (
        <Grid container alignContent='center' alignItems='center' className='nav'>
            <Grid item xs={4}>
                <Button className={classes.button}>POST AD</Button>
            </Grid>
            <Grid item xs={4} className='link-container'>
                <Link to="/user_page" className='link'>WILLIAM</Link>
            </Grid>
            <Grid item xs={4}>
                <Link to="/signin" className='link'>LOG OUT</Link>
            </Grid>
        </Grid>
    )
}




export default LandingNav;