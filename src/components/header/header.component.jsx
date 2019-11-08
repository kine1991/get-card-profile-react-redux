import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    boxShadow: '0 0 10px rgba(0,0,0,0.5)',
    height: '5rem'
    // background: 'red'
  },
  group: {
    display: 'flex',
    listStyleType: 'none'
    // marginLeft: '3rem'
    // justifyContent: 'flex-end'
  },
  list: {
    padding: '2rem'
  },
  link: {
    textDecoration: 'none',
    color: 'black'
  }
});

const HeaderComponent = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <ul className={classes.group}>
                <li className={classes.list}>
                    <Link to="/">Home</Link>
                </li>
                <li className={classes.list}>
                    <Link to="/about">About</Link>
                </li>
                <li className={classes.list}>
                    <Link to="/profiles">Profiles</Link>
                </li>
                <li className={classes.list}>
                    <Link to="/articles">Articles</Link>
                </li>
                <li className={classes.list}>
                    <Link to="/create-article">Create Article</Link>
                </li>
            </ul>
        </div>
    )
}


export default HeaderComponent;