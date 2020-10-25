import React from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container'
import Link from '@material-ui/core/Link';

const useeStyles = makeStyles((theme) => ({

  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: '#fde6d8',
    padding: theme.spacing(3),
  },
}));


const cardUseStyles = makeStyles({
  root: {
    minWidth: 275,
    margin: 20,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});


const OutlinedCard = (props) => {
  const classes = cardUseStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Link to="/preview">
      <Card className={classes.root} variant="outlined">
        <CardContent>

          <Typography className={classes.title} color="textSecondary" gutterBottom>
            Template
          </Typography>
          <Typography variant="h5" component="h2">
            Appointments
          </Typography>
          {/* <Typography variant="body2" component="p">
          blah blah blah blah blah
            <br />
        </Typography> */}
        </CardContent>
        <CardActions>
          <Button size="small">Expand</Button>
        </CardActions>
      </Card >
    </Link>


  );
}

export const Home = props => {
  const classes = useeStyles();

  return (
    <Container fixed>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography variant="h3">
          Templates
        </Typography>
        <Grid container>
          <OutlinedCard />
          <OutlinedCard />
          <OutlinedCard />
          <OutlinedCard />
        </Grid>
      </main>
    </Container>
  )
}