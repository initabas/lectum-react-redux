// Core
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, Errors } from 'react-redux-form';
import cx from 'classnames';

// Instruments
import Styles from './styles';
import { validateLength } from 'instruments/validators';

// Components
import Input from 'components/Input';

export default class Profile extends Component {
    _getCancelUpdateButton = () => {
        const { passwordEditing, actions } = this.props;

        return passwordEditing ? (
            <span
                className = { Styles.cancelUpdate }
                onClick = { () => actions.setPasswordEditing(false) }>
                cancel update
            </span>
        ) : null;
    };

    _getSubmitButton = () => {
        const { profileFetching, passwordEditing } = this.props;

        const buttonStyle = cx(Styles.loginSubmit, {
            [Styles.disabledButton]: profileFetching,
        });

        return passwordEditing ? (
            <button
                className = { buttonStyle }
                disabled = { profileFetching }
                type = 'submit'>
                {profileFetching ? 'Working...' : 'Update Password'}
            </button>
        ) : (
            <button
                className = { buttonStyle }
                disabled = { profileFetching }
                type = 'submit'
                onClick = { this._changePassword }>
                Change Password
            </button>
        );
    };

    _changePassword = (event) => {
        const { actions: { setPasswordEditing }, passwordEditing } = this.props;

        event.preventDefault();

        passwordEditing ? setPasswordEditing(false) : setPasswordEditing(true);
    };

    _handleSubmit = (user) => {
        const {
            actions: { setPasswordEditing, updateProfile },
            passwordEditing,
        } = this.props;

        if (passwordEditing) {
            updateProfile(user);
            setPasswordEditing(false);

            return;
        }

        setPasswordEditing(true);
    };

    render () {
        const { profileFetching, passwordEditing } = this.props;

        console.log('✓ this.props:', this.props);

        const disabled = profileFetching || !passwordEditing;

        const disabledInputStyle = cx({
            [Styles.disabledInput]: disabled,
        });

        const submitButton = this._getSubmitButton();
        const cancelUpdateButton = this._getCancelUpdateButton();

        return (
            <Form
                className = { Styles.form }
                key = '1'
                model = 'forms.user.password'
                onSubmit = { this._handleSubmit }>
                <Errors
                    messages = { {
                        valid: () =>
                            `A password should be at least 5 symbols long`,
                    } }
                    model = 'forms.user.password.oldPassword'
                    show = { ({ submitFailed, touched, errors }) =>
                        submitFailed || touched && errors.valid
                    }
                />
                <Input
                    disabled = { disabled }
                    disabledstyle = { disabledInputStyle }
                    errors = { {
                        valid: (password) => validateLength(password, 5),
                    } }
                    errorstyle = { Styles.error }
                    id = 'forms.user.password.oldPassword'
                    model = 'forms.user.password.oldPassword'
                    placeholder = 'Old password'
                    type = 'password'
                />
                <Errors
                    messages = { {
                        valid: () =>
                            `A password should be at least 5 symbols long`,
                    } }
                    model = 'forms.user.password.newPassword'
                    show = { ({ submitFailed, touched, errors }) =>
                        submitFailed || touched && errors.valid
                    }
                />
                <Input
                    disabled = { disabled }
                    disabledstyle = { disabledInputStyle }
                    errors = { {
                        valid: (password) => validateLength(password, 5),
                    } }
                    errorstyle = { Styles.error }
                    id = 'forms.user.password.newPassword'
                    model = 'forms.user.password.newPassword'
                    placeholder = 'New password'
                    type = 'password'
                />
                {submitButton}
                <i>{cancelUpdateButton}</i>
                <Link to = '/profile'>← back</Link>
            </Form>
        );
    }
}
