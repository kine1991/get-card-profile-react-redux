import React from 'react';
import {connect} from 'react-redux'
import TextField from '@material-ui/core/TextField';

import ProfileCardComponent from '../profile-card/profile-card.component';
// import Scroll from '../scroll/scroll.component';
import { useStyles } from './profiles.styles';
import { searchProfile, getProfilesAsync } from '../../redux/profile/profile.action';



const Profiles = ({searchField, users, onSearchProfile, onGetProfiles}) => {
    const classes = useStyles();
console.log(users)
    React.useEffect(() => {
        onGetProfiles()
    }, []);

    const filteredProfile = users.filter(user => {
        return user.name.toLowerCase().includes(searchField.toLowerCase());
    })

    return (
        // <Scroll> </Scroll>  #fdfbfb → #ebedee
        <div className={classes.profiles}>             
            <TextField style={{margin: '4rem'}} fullWidth  onChange={onSearchProfile} className={classes.textField} label="Search" margin="normal" variant="outlined"/>
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
    )
};

const mapStateToProps = state => {
    return {
        searchField: state.profile.searchField,
        users: state.profile.users,
        isFetching: state.profile.isFetching
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSearchProfile: (e) => dispatch(searchProfile(e.target.value)),
        onGetProfiles: () => dispatch(getProfilesAsync())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Profiles);
