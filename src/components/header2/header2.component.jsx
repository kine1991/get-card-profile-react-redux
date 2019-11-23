import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Switch from "@material-ui/core/Switch";
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
// import MenuItem from '@material-ui/core/MenuItem';
// import Menu from '@material-ui/core/Menu';
// import AccountCircle from '@material-ui/icons/AccountCircle';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import Button from '@material-ui/core/Button';
import { useStyles } from './header2.styles';

import { toggleDarkMode } from '../../redux/palette/palette.action';

const Header2 = ({currentUserData, isFetching, onToggleDarkMode}) => {
    // const [anchorEl, setAnchorEl] = React.useState(null);
    // const open = Boolean(anchorEl);
    const [openDrawer, setOpenDrawer] = React.useState(false)


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

  
    // function handleMenu(e) {
    //   setAnchorEl(e.currentTarget);
    // }
  
    // function handleClose() {
    //   setAnchorEl(null);
    // }

    const handleChangeSwitch = (e) => {
      onToggleDarkMode(e.target.checked);
    }
 
    return (
      <div>
        <AppBar className={classes.navbar} position='static' style={{ height: "64px" }}>
          <Toolbar> 
            <IconButton onClick={() => setOpenDrawer(!openDrawer)} edge="start" /*className={classes.menuButton}*/ color="inherit" aria-label="menu"><MenuIcon /></IconButton>
            <Typography color='inherit' className={classes.title}>App</Typography>
            <Switch className={classes.switch} onChange={handleChangeSwitch}/>
            <div className={classes.fillSpace}/>
            {
              isFetching ? null :
                links.map(item => (
                  <Button color="inherit" key={item.name} component={Link} to={item.link} >{item.name}</Button>
                ))
            }
            {currentUserData ? <Button color="inherit" >Logout</Button> : null}
          </Toolbar>
        </AppBar>

        <SwipeableDrawer open={openDrawer} onOpen={() => setOpenDrawer(true)} onClose={() => setOpenDrawer(false)}>
          <div className={classes.list}>
            <List>
              {links.map((item) => (
                <ListItem component={Link} to={item.link} button key={item.name}><ListItemIcon><InboxIcon /></ListItemIcon><ListItemText primary={item.name} /></ListItem>
              ))}
            </List>
            <Divider />
            {currentUserData ? <ListItem button ><ListItemIcon><InboxIcon /></ListItemIcon><ListItemText primary="Logout" /></ListItem> : null}
          </div>
        </SwipeableDrawer>

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


export default connect(mapStateToProps, mapDispatchToProps)(Header2);

