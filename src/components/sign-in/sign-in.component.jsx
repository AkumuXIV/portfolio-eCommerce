import React, { useState } from 'react';
import { connect } from 'react-redux';

import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
    const [userCred, setUserCred] = useState({ email: '', password: ''});
    const { email, password } = userCred;

    const handleSubmit = async (event) => {
        //prevent default so we have complete control
        event.preventDefault();
        // const { emailSignInStart } = this.props;
        const { email, password } = userCred;// this.state;

        emailSignInStart(email, password);
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
                        onClick={googleSignInStart} 
                        isGoogleSignIn>Sign In with Google</CustomButton>
                </div>
            </form>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(SignIn);