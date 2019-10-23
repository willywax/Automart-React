import React from 'react';
import { Link } from "react-router-dom";
import LogoImage from '../images/logo.png';
import '../styles/header.scss';

import LandingNav from './LandingNav';
import { Grid } from '@material-ui/core';


function Header() {
    return (
        <Grid container alignContent='center' className='header'>
            <Grid item xs={8}>
                <Link to="/" exact>
                    <img alt="Logo" src={LogoImage} />
                </Link>
            </Grid>
            <Grid item xs={4}>
                <LandingNav />
            </Grid>
        </Grid>
    );
}


export default Header;