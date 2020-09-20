import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '../src/Link';
import Header from '../src/Header';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  gridItem: {
    
  },
  gridItemContent: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.primary.contrastText,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "40vh",
  },
}));

export default function Index() {
  const classes = useStyles();
  return (
    <>
      <Header />
      <Grid container spacing={1}>
        <Grid item xs={8} className={classes.gridItem}>
          <Typography className= {classes.gridItemContent}>
            malovani
            <img src="/haf.svg"/>
          </Typography>
        </Grid>
        <Grid item xs={4} className={classes.gridItem}>
          <Typography className= {classes.gridItemContent}>
            malovani
          </Typography>
        </Grid>
        <Grid item xs={4} className={classes.gridItem}>
          <Typography className= {classes.gridItemContent}>
            malovani
          </Typography>
        </Grid>
        <Grid item xs={4} className={classes.gridItem}>
          <Typography className= {classes.gridItemContent}>
            malovani
          </Typography>
        </Grid>
        <Grid item xs={4} className={classes.gridItem}>
          <Typography className= {classes.gridItemContent}>
            malovani
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}
