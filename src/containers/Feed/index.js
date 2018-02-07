// Core
import React, { Component, Fragment } from 'react';

// Components
import Notifications from 'components/Notifications';
import Spinner from 'components/Spinner';
import Navigation from 'components/Navigation';
import Catcher from 'components/Catcher';
import Wall from 'components/Wall';

export default class Feed extends Component {
    render () {
        return (
            <Fragment>
                <Notifications />
                <Spinner />
                <Navigation />
                <Catcher>
                    <Wall />
                </Catcher>
            </Fragment>
        );
    }
}
