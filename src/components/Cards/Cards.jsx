import React from 'react';

import { Card, CardContent,typography,Grid, Typography } from '@material-ui/core'

import CountUp from 'react-countup';

import cn from 'classnames';

import styles from './Cards.module.css'
const Cards = ({ data : {confirmed,recovered,deaths,lastUpdate}}) => {
    if(!confirmed)
    {
        return 'Loading...';
    }
    //console.log(props);

    return (
        <div className={styles.container}>
            <Grid container spacing={6}  justify="center">
                <Grid item component={Card} md={3} xs={12} className={cn(styles.card,styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={confirmed.value} duration={2.5} separator=","/>
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Active cases of COVID-19</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} md={3} xs={12} className={cn(styles.card,styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recoverd</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={recovered.value} duration={2.5} separator=","/>
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Recovered from COVID-19</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} md={3} xs={12} className={cn(styles.card,styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={deaths.value} duration={2.5} separator=","/>
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Death caused by COVID-19</Typography>
                    </CardContent>
                </Grid>

            </Grid>
        </div>
    )

}

export default Cards;