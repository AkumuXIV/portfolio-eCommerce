import React from 'react';

import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async (event) => {
        //prevent default so we have complete control
        event.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: ''});
        } catch (ex) {
            console.error(ex);
        }
    }

    handleChange = (event) => {
        const { value, name } = event.target;
        //same handler can be used for both b/c name is mapped to name in the calling input
        this.setState({ [name]: value });
    }

    render() {

        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name='email' 
                        type='email' 
                        value={this.state.email} 
                        handleChange={this.handleChange}
                        label='email'
                        required />
                    <FormInput 
                        name='password' 
                        type='password' 
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label='password'
                        required />
                    <div className='buttons'>
                        <CustomButton 
                            type='submit' 
                            value='Submit Form'>Sign In</CustomButton>
                        <CustomButton 
                            onClick={signInWithGoogle} isGoogleSignIn>Sign In with Google</CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;