import React from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

// defines IOS devices
const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

const SideDrawer = (props) => {

    /*
        Called whenever SideDrawer item is clicked.
        Calls scrollToElement to scroll to clicked item.
        Closes drawer when item is clicked.
    */
    const handleOnClick = () => {
        props.onClose(false);
    }

    return (
        /*
            SwipeableDrawer from MaterialUI creates a side drawer
            that opens with the click of the menu icon or a right swipe.
        */
        <SwipeableDrawer 
            // disables swipe to open drawer on ios devices
            disableBackdropTransition={!iOS} 
            disableDiscovery={iOS}
            open={props.open}
            onClose={() => props.onClose(false)}
            onOpen={() => props.onClose(true)}>

            <List component="nav">
                
            </List>

        </SwipeableDrawer>
    );
};

export default SideDrawer;