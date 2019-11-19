import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

import { useStyles } from './header.styles'
import Switch from '@material-ui/core/Switch';


const HeaderComponent = ({currentUserData, isFetching}) => {

    const [isDark, setIsDark] = React.useState(false)

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

    const handleChange = event => {
        setIsDark(event.target.checked);
    };
    // const handleChange = name => event => {
    //     setIsDark({ ...state, [name]: event.target.checked });
    // };
    React.useEffect(() => {
        console.log(isDark)
    }, [isDark])

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
                    {/* <li className={classes.list}>
                        <Switch/>
                    </li> */}
                    {/* <div style={{marginRight: 'auto auto'}}> ff</div> */}
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
        isDark: state.pallete.isDark
    }
}

const mapDispatchToProps = dispatch => {
    return {
        
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);