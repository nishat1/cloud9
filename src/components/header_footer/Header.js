import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import SideDrawer from './SideDrawer';

/* Styles for Header pulled from MaterialUI header demo */
/* flexGrow: defines ability of flex item to grow if necessary */
const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class Header extends React.Component {

  state = {
    drawerOpen: false
  }

  toggleDrawer = (openBool) => {
    this.setState({
      drawerOpen: openBool
    });
  }
  
  render() {
    return (
      <div className={this.props.classes.root}>

        {/* Creates header object: position-fixed keeps header visible during scroll */}
        <AppBar 
          position="fixed"
          style={{
            backgroundColor: "transparent",
            boxShadow: "none"
          }}>

          <Toolbar>

            <IconButton 
              className={this.props.classes.menuButton} 
              color="inherit" 
              aria-label="Menu"
              onClick={() => this.toggleDrawer(true)} >

              <MenuIcon />

            </IconButton>

            <SideDrawer
              open={this.state.drawerOpen}
              onClose={(openBool) => this.toggleDrawer(openBool)}
            />

            {/* 
                Adds title in header. 
                Reloads page if title is clicked
            */}
            <Typography 
              variant="title" 
              color="inherit" 
              className={this.props.classes.flex} 
              onClick={() => window.location.reload()}
            >
              Dream Space
            </Typography>

          </Toolbar>

        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(Header);