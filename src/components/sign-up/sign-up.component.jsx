import React from 'react';
import { auth, firestore } from '../../firebase/firebase.utils';

const signUp = ({email, password, ...rest}) => {
    auth.createUserWithEmailAndPassword(email , password)
    .then(userData => {
        firestore.collection('users').doc(userData.user.uid).set({
            email, 
            uid: userData.user.uid,
            name: rest.name
        }).then(x => console.log('x', x))
        // console.log(userData)
    })
    // console.log('email',email)
    // console.log('password',password)
    // console.log('rest', rest)
}

const SignUpComponent = () => {
    return (
        <div>
            <button onClick={() => signUp({name: 'Nikolay', email: 'test6@mail.ru', password: '123456' })}>Login</button>
            <button>Login with google</button>
            <button onClick={() => auth.signOut()}>Logout</button>
        </div>
    )
}

export default SignUpComponent;

