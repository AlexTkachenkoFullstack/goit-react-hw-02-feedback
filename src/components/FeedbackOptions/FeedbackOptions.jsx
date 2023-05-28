import React, { Component } from "react";
import PropTypes from 'prop-types';
import {FeedbackButtonContainer, FeedbackButton } from "./FeedbackOptions.styled";
class FeedbackOptions extends Component{
    state = {}
    render() {
        return (<>
                
                    <FeedbackButtonContainer>
                        <FeedbackButton name="good"  onClick={this.props.onLeaveFeedback}>Good</FeedbackButton>
                        <FeedbackButton name="neutral"  onClick={this.props.onLeaveFeedback}>Neutral</FeedbackButton>
                        <FeedbackButton name="bad"  onClick={this.props.onLeaveFeedback}>Bad</FeedbackButton>
                    </FeedbackButtonContainer>
                </>
        )
    }
}

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
}

export default FeedbackOptions