// Core
import React, { Component } from 'react';

// Components
import Spinner from 'components/Spinner';
import Navigation from 'components/Navigation';
import Catcher from 'components/Catcher';
import LoginForm from 'components/Forms/Login';

export default class Login extends Component {
    render () {
        return [
            <Spinner key = '0' />,
            <Navigation key = '1' />,
            <Catcher key = '2'>
                <LoginForm />
            </Catcher>
        ];
    }
}
