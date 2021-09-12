import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signUpStart } from '../../redux/user/user.actions';

import './sign-up.styles.scss';

const SignUp = () => {
    const [userCred, setUserCred] = useState({
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        });

    const dispatch = useDispatch();

    const { displayName, email, password, confirmPassword } = userCred;
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert('Passwords do not match.');
            return;
        }

        dispatch(signUpStart({displayName, email, password}));

        setUserCred({
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        });
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        
        setUserCred({...userCred, [name]: value});
    }

    return (
        <div className='sign-up'>
            <h2 className='title'>I do not have an account</h2>
            <span>Sign up with your email and password</span>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput
                type='text'
                name='displayName'
                value={displayName}
                onChange={handleChange}
                label='Display Name'
                required
                >
                </FormInput>
                <FormInput
                type='email'
                name='email'
                value={email}
                onChange={handleChange}
                label='Email'
                required
                >
                </FormInput>
                <FormInput
                type='password'
                name='password'
                value={password}
                onChange={handleChange}
                label='Password'
                required
                >
                </FormInput>
                <FormInput
                type='password'
                name='confirmPassword'
                value={confirmPassword}
                onChange={handleChange}
                label='Confirm Password'
                required
                >
                </FormInput>
                <CustomButton type='submit'>SIGN UP</CustomButton>
            </form>
        </div>
    );
};

// const mapDispatchToProps = dispatch => ({
//     signUpStart: (displayName, email, password) => dispatch(signUpStart({ displayName, email, password }))
// });

export default SignUp;