// Core
import React, { Component, Fragment } from 'react';

// Components
import Notifications from 'components/Notifications';
import Spinner from 'components/Spinner';
import Navigation from 'components/Navigation';
import Catcher from 'components/Catcher';
import ProfileForm from 'components/Forms/Profile';

export default class Profile extends Component {
    render () {
        return (
            <Fragment>
                <Notifications />
                <Spinner />
                <Navigation />
                <Catcher>
                    <ProfileForm />
                </Catcher>
            </Fragment>
        );
    }
}
