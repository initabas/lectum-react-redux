// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Components
import {
    Notifications,
    Spinner,
    Navigation,
    Catcher,
    ProfileForm
} from 'components';
import { profileActions } from 'bus/profile/actions';

const mapStateToProps = (state) => {
    
    return {
        profile: state.profile,
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        actions: bindActionCreators({ fillProfile: profileActions.fillProfile }, dispatch)
    }
}

@connect(mapStateToProps, mapDispatchToProps)
export default class Profile extends Component {
    render () {
        return (
            <>
                <Notifications />
                <Spinner />
                <Navigation />
                <Catcher>
                    <ProfileForm { ...this.props }/>
                </Catcher>
            </>
        );
    }
}
