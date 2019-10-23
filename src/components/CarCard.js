import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import {
    Card, CardActionArea, CardMedia, CardContent, Button, Typography, CardActions, Grid, Divider
} from "@material-ui/core";
import Car1 from "../images/car2.jpeg";
const useStyles = makeStyles({
    card: {
        maxWidth: 270,
        height: 400,
        margin: 10,
        padding: 10,
    },
    cardHeader: {
        border: 0,
        borderLeft: 6,
        borderStyle: 'solid',
        borderColor: '#f34a0b',
        marginBottom: 5
    },
    cardLabel: {
        fontWeight: 800,
        fontSize: 15
    },
    cardPrice: {
        backgroundColor: '#f5f5f5',
        color: '#f34a0b',
        fontWeight: 800,

    },
    cardDesc: {
        marginTop: 15,
        marginBottom: 15
    },
    button: {
        backgroundColor: '#f76e43',
        fontWeight: 800,
        color: 'white',
        borderStyle: 'solid',
        borderRadius: 10,
       
    },
    media: {
        height: 150,
        marginBottom: 3
    },
});

function CarCard() {
    const classes = useStyles();

    return (
        <div>
            <Card className={classes.card}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={Car1}
                        title="Camaro Subaru"
                    />
                    <CardContent className={classes.cardHeader}>
                        <Grid container>
                            <Grid item xs={9}>
                                <Typography className={classes.cardLabel} align='left'>
                                    BMW 3SERIESV8
                                </Typography>
                            </Grid>
                            <Grid item xs={3}>
                                <Typography className={classes.cardPrice} align='right'>
                                    $4,500
                                </Typography>
                            </Grid>
                        </Grid>
                    </CardContent>
                    <Divider />

                    <Typography className={classes.cardDesc} variant="body2" color="textSecondary" component="p" align='center'>
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
                    </Typography>
                </CardActionArea>
                <CardActions>
                    <Button variant="contained" className={classes.button}>
                        PREVIEW
                    </Button>
                </CardActions>
            </Card>
        </div>
    )
}


export default CarCard;