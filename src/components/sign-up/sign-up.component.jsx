import React from 'react';
import { auth } from '../../firebase/firebase.utils';

const SignUpComponent = () => {
    return (
        <div>
            <button onClick={() => auth.createUserWithEmailAndPassword('test1@mail.ru', '123456')}>Login</button>
            <button>Login with google</button>
            <button onClick={() => auth.signOut()}>Logout</button>
        </div>
    )
}

export default SignUpComponent;

