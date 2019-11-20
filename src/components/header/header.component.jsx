import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import Switch from '@material-ui/core/Switch';

import { useStyles } from './header.styles';
import { toggleDarkMode } from '../../redux/palette/palette.action';



const HeaderComponent = ({currentUserData, isDarkMode, onToggleDarkMode, isFetching}) => {
    const classes = useStyles();
    let links
    if(currentUserData){
        links = [
            {name: 'Home', link: '/'},
            {name: 'About', link: '/about'},
            {name: 'Profiles', link: '/profiles'},
            {name: 'Articles', link: '/articles'},
            {name: 'Create Article', link: '/create-article'},
            {name: 'Palette', link: '/settings/palette'},
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

    const handleChange = event => {
        onToggleDarkMode(event.target.checked);
    };

    // React.useEffect(() => {
    //     // console.log(isDarkMode)
    // }, [isDarkMode])

    return (
        <div className={classes.container}>
            <div style={{marginLeft: '2rem'}}>
                <Switch onChange={handleChange}/>
            </div>
            {
                isFetching 
                ? 
                null
                :
                <ul className={classes.group}  style={{marginLeft: 'auto'}}>
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
                </ul>

            }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isDarkMode: state.palette.isDarkMode
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onToggleDarkMode: (mode) => dispatch(toggleDarkMode(mode))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);