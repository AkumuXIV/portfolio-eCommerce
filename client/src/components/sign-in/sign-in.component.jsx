import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';

const SignIn = () => {
    const [userCred, setUserCred] = useState({ email: '', password: ''});
    const { email, password } = userCred;

    const dispatch = useDispatch();

    const handleSubmit = async (event) => {
        //prevent default so we have complete control
        event.preventDefault();
        // const { emailSignInStart } = this.props;
        const { email, password } = userCred;// this.state;

        dispatch(emailSignInStart(email, password));
    }

    const handleChange = (event) => {
        const { value, name } = event.target;
        //same handler can be used for both b/c name is mapped to name in the calling input
        setUserCred({...userCred, [name]: value });
    }

    return (
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput 
                    name='email' 
                    type='email' 
                    value={email} 
                    handleChange={handleChange}
                    label='email'
                    required />
                <FormInput 
                    name='password' 
                    type='password' 
                    value={password}
                    handleChange={handleChange}
                    label='password'
                    required />
                <div className='buttons'>
                    <CustomButton 
                        type='submit' 
                        value='Submit Form'>Sign In</CustomButton>
                    <CustomButton 
                        type='button'
                        onClick={() => dispatch(googleSignInStart())} 
                        isGoogleSignIn>Sign In with Google</CustomButton>
                </div>
            </form>
        </div>
    );
};

export default SignIn;