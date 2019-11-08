import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux'
import TextField from '@material-ui/core/TextField';

import ProfileCardComponent from '../profile-card/profile-card.component';
import Scroll from '../scroll/scroll.component';
import { useStyles } from './profiles.styles'
import { searchProfile } from '../../redux/profile/profile.action'



const Profiles = ({searchField, onSearchProfile}) => {
    const classes = useStyles();
    const [users, setUsers] = React.useState([]);

    React.useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(users => {
                setUsers(users.data)
                console.log(users.data)
            });
    }, []);
    const filteredProfile = users.filter(user => {
        return user.name.toLowerCase().includes(searchField.toLowerCase());
    })
    // console.log(searchField)
    // console.log(filteredProfile)

    return (
        <Scroll>
        <div className={classes.profiles}>             
            <TextField style={{margin: '4rem'}} fullWidth  onChange={onSearchProfile} className={classes.textField} label="Outlined" margin="normal" variant="outlined"/>
    
            {
                filteredProfile.map((user, i) => {
                    return (
                        <ProfileCardComponent
                            key={i}
                            user={user}
                        />
                    )
                })
            }
        </div>
        </Scroll>
    )
};

const mapStateToProps = state => {
    return {
        searchField: state.profile.searchField
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSearchProfile: (e) => dispatch(searchProfile(e.target.value))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Profiles);
