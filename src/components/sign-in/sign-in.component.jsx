import React from 'react';
import { auth } from '../../firebase/firebase.utils'

const SignInComponent = () => {
    return (
        <div>
            SignInComponent
            <button onClick={() => auth.signInWithEmailAndPassword('test1@mail.ru', '123456')}>Login</button>
            <button>Login with google</button>
        </div>
    )
}

export default SignInComponent;

// import React from 'react';
// import {connect} from 'react-redux';

// import { Field, reduxForm } from 'redux-form';
// // import validator from 'validator'

// import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';

// import { useStyles } from './sign-in.styles';

// const validate = values => {
//     const errors = {}
//     // console.log('values')
//     // console.log(values)
//     if (!values.email) {
//       errors.email = 'Required'
//     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//       errors.email = 'Invalid email address'
//     }
//     if (!values.password) {
//       errors.password = 'Required'
//     } else if (values.password.length < 5) {
//       errors.password = 'Must be minimum 6 characters'
//     } else if (values.password.length > 11) {
//         errors.password = 'Must be maximum 10 characters'
//     } 
//     return errors
// }

// const SignInComponent = ({handleSubmit}) => {
//     const classes = useStyles()
//     const renderTextField = ({ label, input, meta: { touched, invalid, error }, ...custom}) => (
//         <TextField label={label} placeholder={label} error={touched && invalid} helperText={touched && error} {...input} {...custom}/>
//     );

//     // const onSubmit = (formValues) => {
//     //     // event.preventDefault();
//     //     console.log(formValues)
//     // } 

//     return (
//         <div className={classes.login}>
//             <form onSubmit={handleSubmit}>
//                 <Field name="email" variant="outlined" fullWidth margin="dense" component={renderTextField} label="Enter Email" />
//                 <Field name="password" variant="outlined" fullWidth margin="dense" component={renderTextField} label="Enter Password" />
//                 <Button color="primary" className={`${classes.button} custom-button`} variant="contained"   fullWidth type="submit">Submit</Button>
//             </form>
//         </div>
//     );
// }

// const formWrapped = reduxForm({
//     form: 'loginForm',
//     validate
// })(SignInComponent)

// export default formWrapped;

