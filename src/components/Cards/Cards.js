import React from "react";
import { Grid, Card, CardContent, Typography } from "@mui/material";
import CountUp from "react-countup";
import styles from "./Cards.module.css";
import cx from "classnames";

const Cards = ({ data: { active, recovered, deaths, updated } }) => {
  if (!active) return "Loading...";

  return (
    <div className={styles.container}>
      <Grid
        container
        spacing={3}
        justifyContent="center"
        className={styles.gridAlign}
      >
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.infected)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
            <Typography variant="h5">
              <CountUp start={0} end={active} duration={2.5} separator="," />
            </Typography>
            <Typography color="textSecondary">
              {new Date(updated).toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of active cases in covid-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.recovered)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Recovered
            </Typography>
            <Typography variant="h5">
              <CountUp start={0} end={recovered} duration={2.5} separator="," />
            </Typography>
            <Typography color="textSecondary">
              {new Date(updated).toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of recoveries from covid-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.deaths)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Deaths
            </Typography>
            <Typography variant="h5">
              <CountUp start={0} end={deaths} duration={2.5} separator="," />
            </Typography>
            <Typography color="textSecondary">
              {new Date(updated).toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of deaths caused by covid-19
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
