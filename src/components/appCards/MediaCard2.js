import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import imgg from '../../resources/images/dreamspace-1.png';

const styles = {
  card: {
    maxWidth: 345,
    margin: "10px",
  },
  media: {
    height: "140px"
  },
};

function MediaCard2(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          styles={classes.media}
          image={require('../../resources/images/dreamspace-1.png')}
        />
      </CardActionArea>
    </Card>
  );
}

MediaCard2.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard2);