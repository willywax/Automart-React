import React from 'react';
import Header from '../../components/Header';
import Filter from '../../components/Filter';
import { Grid } from "@material-ui/core";
import CarGrid from '../../components/CarGrid';

class MainLandingPage extends React.Component {
    render() {
        return (
            <>
                <Header />
                <Grid container spacing={3} className=''>
                    <Grid item xs={3}>
                        <Filter />
                    </Grid>

                    <Grid item xs={9} className=''>
                        <CarGrid />
                    </Grid>

                </Grid>
            </>
        )

    }
}


export default MainLandingPage;