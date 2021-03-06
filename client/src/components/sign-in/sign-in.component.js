import React, { useState } from 'react'
import CustomButton from '../custom-button/custom-button.component';

import FormInput from '../form-input/form-input.component';

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';

import './sign-in.styles.scss';
import { connect } from 'react-redux';

const SignIn = ({ googleSignInStart, emailSignInStart }) => {
    const [userCredentials, setCredentials] = useState({ email: '', password: '' })
    const { email, password } = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();

        emailSignInStart(email, password)

    }

    const handleChange = event => {
        const { name, value } = event.target;

        setCredentials({ ...userCredentials, [name]: value });
    }

    return (
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput
                    name='email'
                    value={email}
                    required
                    handleChange={handleChange}
                    label='email'
                />
                <FormInput
                    name='password'
                    type='password'
                    value={password}
                    required
                    handleChange={handleChange}
                    label='password'
                />
                <div className="buttons">
                    <CustomButton type='submit'>Sign in</CustomButton>
                    <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn>Sign in with Google</CustomButton>
                </div>
            </form>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) =>
        dispatch(emailSignInStart({ email, password }))
})

export default connect(null, mapDispatchToProps)(SignIn);