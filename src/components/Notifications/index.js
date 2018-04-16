// Core
import React from 'react';
import { connect } from 'react-redux';

// Instruments
import Notification from 'components/Notification';
import { notificationsActions } from 'bus/notifications/actions';

const Notifications = ({ notifications, dissolve }) =>
    notifications.map((notification) => (
        <Notification 
            dissolve = { dissolve }
            key = { notification.id }
            { ...notification }
        />
    ));

const mapStateToProps = ({ notifications }) => ({
    notifications,
});

export default connect(mapStateToProps, {dissolve: notificationsActions.dissolve})(Notifications);
