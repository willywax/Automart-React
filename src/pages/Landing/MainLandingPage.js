import React from 'react';
import Header from '../../components/Header';
import Filter from '../../components/Filter';
import { Grid } from "@material-ui/core";
import CarGrid from '../../components/CarGrid';

class MainLandingPage extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props);
        
    }
    
    render() {
        return (
            <>
                <Header logged_In={this.props.logged_In}/>
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