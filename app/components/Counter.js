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
  increment: () => void,
  incrementIfOdd: () => void,
  incrementAsync: () => void,
  decrement: () => void,
  counter: number,
  classes: object
};

const counterComponent = (props: Props) => {
  const {
    increment,
    incrementIfOdd,
    incrementAsync,
    decrement,
    counter,
    classes
  } = props;
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="headline">Counter</Typography>
        <Typography variant="subheading">{counter}</Typography>
      </CardContent>
      <CardActions>
        <Button color="primary" variant="raised" component={Link} to="/">
          Back Home
        </Button>
        <Button onClick={increment}>+</Button>
        <Button onClick={decrement}>-</Button>
        <Button onClick={incrementIfOdd}>+ If Odd</Button>
        <Button onClick={() => incrementAsync()}>Async</Button>
      </CardActions>
    </Card>
  );
};

export default withStyles({
  card: {
    width: '95%',
    margin: '10px auto'
  }
})(counterComponent);
