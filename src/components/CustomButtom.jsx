import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { Button } from '@mui/material';

export default class CustomButton extends Component {
    
    static propTypes = {
        color: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        btnVariant: PropTypes.string,
        customStyle: PropTypes.object,
        onBtnClick: PropTypes.func
    }    

    static defaultProps= {
        color: 'steelblue',
        text: 'ButtonName',
        btnVariant: 'contained',
    }
    

    render() { 
        return <Fragment>
            <Button onClick={(e) => this.props.onBtnClick(e)} variant={this.props.btnVariant} style={{...this.props.customStyle, backgroundColor: this.props.color}}>
                {this.props.text}
            </Button>
        </Fragment>
    }
}