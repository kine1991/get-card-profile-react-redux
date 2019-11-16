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


const HeaderComponent = ({currentUserData, isFetching}) => {
    const classes = useStyles();
    let links
    if(currentUserData){
        links = [
            {name: 'Home', link: '/'},
            {name: 'About', link: '/about'},
            {name: 'Profiles', link: '/profiles'},
            {name: 'Articles', link: '/articles'},
            {name: 'Create Article', link: '/create-article'},
        ];
    } else {
        links = [
            {name: 'Articles', link: '/articles'},            
            {name: 'Home', link: '/'},
            {name: 'About', link: '/about'},
            {name: 'Sign In', link: '/sign-in'},
            {name: 'Sign Up', link: '/sign-up'},
        ];
    }



    return (
        <div className={classes.container}>
            {
                isFetching 
                ? 
                null
                :
                <ul className={classes.group}>
                    {
                        links
                        .map(item => (
                            <li key={item.link} className={classes.list}>
                                <Link to={item.link}>{item.name}</Link>
                            </li>
                        ))  
                    }
                    {currentUserData ? 
                        (
                            <>
                            <li className={classes.list}>
                                <div>{currentUserData.email}</div>
                            </li>
                            <li className={classes.list}>
                                <button>Logout</button>
                            </li>
                            </>
                        ) : null
                    }
                    {/* <li className={classes.list}>
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
                    <li className={classes.list}>
                        <Link to="/sign-in">Sign In</Link>
                    </li>
                    <li className={classes.list}>
                        <Link to="/sign-up">Sign Up</Link>
                    </li> */}
                </ul>

            }
        </div>
    )
}


export default HeaderComponent;