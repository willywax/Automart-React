import React from 'react';
import { GridList, GridListTile } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CarCard from './CarCard';

import PaginatorItem from './Paginator';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'left',
        alignItems: 'center',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        maxHeight: 910,
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },
    titleBar: {
        background:
            'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
            'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
    icon: {
        color: 'white',
    },
}));

const tileData = [<CarCard />, <CarCard />, <CarCard />, <CarCard />, <CarCard />, <CarCard />,]

function CarGrid() {
    const classes = useStyles();
    let counter = 0;



    return (
        <>
            <GridList cellHeight={450} cols={3} className={classes.gridList}>
                {tileData.map(tile => (
                    <GridListTile key={counter+1} cols={1} rows={1}>
                        {tile}
                    </GridListTile>
                ))}
            </GridList>
            <PaginatorItem />
        </>
    )
}


export default CarGrid;