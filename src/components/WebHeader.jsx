import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types'


class WebHeader extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired
    }

    static defaultProps = {
        title: "Tracker List"
    }

    headerStyle = {
        textAlign: "center", 
        borderBottom: "3px solid black",
        backgroundColor: "black",
        color: "white",
    }

    state = {  } 
    render() { 
        return (
            <Fragment>
                <header style={this.headerStyle}>
                    <h1 style={{marginBottom: "1rem", paddingTop: "1rem"}}>{this.props.title}</h1>
                </header>
            </Fragment>
        );
    }
}
 
export default WebHeader;