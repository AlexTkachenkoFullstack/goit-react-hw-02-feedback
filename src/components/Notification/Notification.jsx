import PropTypes from 'prop-types';
import styled from 'styled-components';
import React, {Component} from 'react';

const NotificationText = styled.p`
font-weight: 400;
`

export class Notification extends Component{
    render() {
        return (
        <NotificationText>{ this.props.message}</NotificationText>
    )
    }
} 

Notification.propTypes = {
    message:PropTypes.string.isRequired
}