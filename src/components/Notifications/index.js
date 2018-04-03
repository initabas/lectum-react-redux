// Core
import React from 'react';
import { connect } from 'react-redux';

// Instruments
import Notification from 'components/Notification';

const Notifications = ({ notifications, dissolve }) =>
    notifications.map((notification) => (
        <Notification dissolve = { dissolve } key = { notification.id } { ...notification } />
    ));

const mapStateToProps = ({ notifications }) => ({
    notifications,
});


export default connect(mapStateToProps)(Notifications);
