import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import MediaCard from './MediaCard';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

function AppCards(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs>
            <MediaCard />
        </Grid>
        <Grid item xs>
            <MediaCard />
        </Grid>
        <Grid item xs>
            <MediaCard />
        </Grid>
      </Grid>
    </div>
  );
}

AppCards.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppCards);