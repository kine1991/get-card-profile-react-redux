import React from 'react';
import { connect } from 'react-redux'
import { Link, useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
// import Icon from '@material-ui/core/Icon';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { getProfilesAsync } from '../../redux/profile/profile.action'

const useStyles = makeStyles({
  container: {
    justifyContent: 'center',
    display: 'flex',
  },
  card: {
    maxWidth: 600,
    margin: '30px',
  },
});

const ProfileComponent = ({user, onGetProfile}) => {
  const classes = useStyles();
  const {id} = useParams();

  React.useEffect(() => {
    onGetProfile(id);
  }, []);

    // return (
    //   <h1>Helo</h1>
    // )
console.log(user)
  return !user ? 
  <CircularProgress color="secondary" /> : (
    <div className={classes.container}>
      <Card className={classes.card}>
        <CardActionArea >
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="280"
            image={`/images/users/user${id}.png`}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {user.email}
            </Typography>
            <Typography gutterBottom variant="h5" component="h2">
              {user.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {user.phone}
            </Typography>
            <p>{user.username}</p>
            <p>{user.website}</p>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button component={Link} to="/profiles" size="small" color="default" className={classes.button} startIcon={<ArrowBackIcon/>}>Back</Button>
        </CardActions>
      </Card>

    </div>
  );
}

const mapStateToProps = state => {
  return {
    user: state.profile.users[0]    
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onGetProfile: (id) => dispatch(getProfilesAsync(id))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileComponent);
