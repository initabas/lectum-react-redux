// Core
import React, { Component } from 'react';

// Components
import Spinner from 'components/Spinner';
import Navigation from 'components/Navigation';
import Catcher from 'components/Catcher';
import ProfileForm from 'components/Forms/Profile';

export default class Profile extends Component {
    render () {
        return [
            <Spinner key = '0' />,
            <Navigation key = '1' />,
            <Catcher key = '2'>
                <ProfileForm />
            </Catcher>
        ];
    }
}
