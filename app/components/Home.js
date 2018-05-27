// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

type Props = {
  classes: object
};

const home = ({ classes }: Props) => (
  <Card className={classes.card}>
    <CardContent>
      <Typography variant="headline">Test</Typography>
    </CardContent>
    <CardActions>
      <Button color="primary" component={Link} to="/counter">
        Counter
      </Button>
    </CardActions>
  </Card>
);

export default withStyles({
  card: {
    width: '95%',
    margin: '10px auto'
  }
})(home);
