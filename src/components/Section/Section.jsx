import React, { Component } from "react";
import PropTypes from 'prop-types';
import { SectionContainer, SectionTitle } from "./Section.styled";

class Section extends Component{
    state = {
        
    }

    render() {
        return (
            <SectionContainer>
                <SectionTitle>{this.props.title}</SectionTitle>
                {this.props.children}
            </SectionContainer>
        )
    }
}


Section.propTypes = {
    title: PropTypes.string.isRequired,
}


export default Section