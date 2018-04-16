// Core
import React, { Component } from 'react';

// Components
import Notifications from 'components/Notifications';
import Spinner from 'components/Spinner';
import Navigation from 'components/Navigation';
import Catcher from 'components/Catcher';
import SignupForm from 'components/Forms/Signup';

import { authActions } from 'bus/auth/actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const mapStateToProps = (state) => {
    return {
        authFetching: state.ui.get('authFetching'),
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({ signup: authActions.signup }, dispatch)
    };
};

@connect(mapStateToProps, mapDispatchToProps)
export default class Signup extends Component {
    render () {
        const { authFetching } = this.props;

        return (
            <>
                <Notifications />
                <Spinner spin = { authFetching } />
                <Navigation />
                <Catcher>
                    <SignupForm { ...this.props } />
                </Catcher>
            </>
        );
    }
}
