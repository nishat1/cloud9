import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

/*
    Styles used from Grid demo from MaterialUI
*/
const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    touchAction: "manipulation",
  }
});

/**
 * PlayerCard creates a Paper component to hold details for one player.
 * args: none
 * returns: one PlayerCard with its own state to update its own score
 */
class MediaCard extends Component {

    render() {

        return (
            /*
                Grid item takes up half width of grid.
                Item contains a Paper card with:
                    - an Avatar showing the player number
                    - score of the player
                    - 2 buttons for increasing/decreasing score
            */
            <Grid item xs={3}>
                <Paper style={{
                    background: `url${this.props.media}`
                }}/>
            </Grid>
        );
    }
}

export default withStyles(styles)(MediaCard);