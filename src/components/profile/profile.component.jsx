import React from 'react';
import axios from 'axios'
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

const useStyles = makeStyles({
  container: {
    justifyContent: 'center',
    display: 'flex',
  },
  card: {
    maxWidth: 600,
    margin: '30px',
    // display: 'flex',
    // justifyContent: 'center'
  },
});

const ProfileComponent = (props) => {
  const classes = useStyles();
  const [user, setUser] = React.useState();
  const {id} = useParams();
    // console.log('props', props)

    React.useEffect(() => {
      axios.get(`https://jsonplaceholder.typicode.com/users?id=${id}`)
          .then(user => {
              setUser(user.data[0])

              if(!user.data.length){
                // console.log(user.data.length)
                props.history.push('/profiles')
              }
          })
          .catch(error => {
            console.log(error)
          });;
    }, []);

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

export default ProfileComponent;
