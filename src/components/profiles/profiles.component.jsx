// import React, { Component } from 'react'
// import axios from 'axios';
// import ProfileComponent from '../profile/profile.component'

// // import {useStyles} from './profiles.styles'
// import { makeStyles } from '@material-ui/core/styles';


// const useStyles = makeStyles({
//     profiles: {
//       maxWidth: 205,
//     },
// });

// const classes = useStyles();

// class ProfilesComponent extends Component {

//     state = {
//         users: []
//     }
//     componentDidMount(){
//         console.log(process.env)
//         axios.get('https://jsonplaceholder.typicode.com/users')
//             .then(users => {
//                 this.setState({
//                     users: users.data
//                 }) 
//             });
//     }

//     render() {
//         // const classes = useStyles();
//         const {users} = this.state;
//         return (
//             <div>
//             {/* <div className={classes.profiles}> */}
                // {
                //     users.map((user, i) => {
                //         return (
                //             <ProfileComponent
                //                 key={i}
                //                 user={user}
                //             />
                //         )
                //     })
                // }
//                 ProfilesComponent
//             </div>
//         )
//     }
// }

// export default ProfilesComponent;


import React from 'react'
import axios from 'axios';

import ProfileComponent from '../profile/profile.component'
import { makeStyles } from '@material-ui/core/styles';
import Scroll from '../scroll/scroll.component'

const useStyles = makeStyles({
    profiles: {
        //   maxWidth: 205,
        //   background: 'red'
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    // profile: {
    //     flex: '700px'
    // }
});



const Profiles = () => {
    const classes = useStyles();
    const [users, setUsers] = React.useState([]);

    React.useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(users => {
                setUsers(users.data)
                console.log(users.data)
                // this.setState({
                //     users: users.data
                // }) 
            });
    }, []);

    return (
        <div className={classes.profiles}> 
            <Scroll>
                {
                    users.map((user, i) => {
                        return (
                            <ProfileComponent
                                key={i}
                                user={user}
                            />
                        )
                    })
                }
            </Scroll>
        </div>
    )
}

export default Profiles
