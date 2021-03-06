// Coret
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import cx from 'classnames';

import { book } from 'routes/book';
import { authActions } from 'bus/auth/actions';

// Instruments
import Styles from './styles';

const mapStateToProps = (state) => {
    return {
        authenticated: state.auth.get('authenticated'),
        profile:       state.profile,
        online:        state.ui.get('online'),
    };
};

@connect(mapStateToProps, { logout: authActions.logout })
export default class Navigation extends Component {
    _getNavigation = () => {
        const { authenticated, profile, online } = this.props;

        const statusStyle = cx(Styles.status, {
            [Styles.online]:  online,
            [Styles.offline]: !online,
        });

        return authenticated ?
            <>
                <div className = { statusStyle }>
                    <div>{online ? 'Online' : 'Offline'}</div>
                    <span />
                </div>
                <NavLink activeClassName = { Styles.active } to = { '/profile' }>
                    <img src = { profile.get('avatar') } />
                    {profile.get('firstName')}
                </NavLink>
                <NavLink activeClassName = { Styles.active } to = { '/feed' }>
                    Feed
                </NavLink>
                <button onClick = { this._logout }>Log Out</button>
            </>
            :
            <>
                <NavLink activeClassName = { Styles.active } to = { '/login' }>
                    Log In
                </NavLink>
                <NavLink activeClassName = { Styles.active } to = { '/sign-up' }>
                    Sign Up
                </NavLink>
            </>
        ;
    };

    _logout = () => {
        this.props.logout();
    };

    render () {
        const { online } = this.props;
        const navigation = this._getNavigation();
        const statusStyle = cx(Styles.status, {
            [Styles.online]:  online,
            [Styles.offline]: !online,
        });

        return <section className = { Styles.navigation }>
            <div className = { statusStyle }>
                <div>{online ? 'Online' : 'Offline'}</div>
                <span />
            </div>
            {navigation}

        </section>;
    }
}
