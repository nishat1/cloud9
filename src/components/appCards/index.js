import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MediaCard from './MediaCard';
import MediaCard2 from './MediaCard2';
import CardMedia from '@material-ui/core/CardMedia';
import Paper from '@material-ui/core/Paper';

/*
    Styling for Grid based on Grid demo from MaterialUI.
    touchAction used to disable double tap to zoom on IOS.
    addcircleicon used to style add player button.
*/
const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: 20,
    touchAction: "manipulation",
    background: "#2f2f2f",
    // margin: 10
  }
});

class AppCards extends Component {

    render() {

        console.log(window.innerWidth);

        return(
            <div className={this.props.classes.root}>

                {/* Grid object to hold every card */}
                <Grid 
                    container 
                    spacing={24}
                    justify="center"
                    alignItems="center"
                >

                    {/* <Grid item xs={3}>
                        <CardMedia
                            style={{height: 100}}
                            image="../../resources/images/dreamspace-3.png"
                        />
                    </Grid> */}
                    <Grid item xs={window.innerWidth < 600 ? 12 : 3}>
                        {/* <Paper> */}
                            <img 
                                src={require("../../resources/images/dreamspace-3.png")}
                                style={{width: "100%"}}/>
                        {/* </Paper> */}
                    </Grid>

                    <Grid item xs={window.innerWidth < 600 ? 12 : 3}>
                        <img 
                            src={require("../../resources/images/dreamspace-2.png")}
                            style={{width: "100%"}}/>
                    </Grid>

                    <Grid item xs={window.innerWidth < 600 ? 12 : 3}>
                        <img 
                            src={require("../../resources/images/dreamspace-1.png")}
                            style={{width: "100%"}}/>
                    </Grid>

                </Grid>
            </div>
        )
    }
}

export default withStyles(styles)(AppCards);