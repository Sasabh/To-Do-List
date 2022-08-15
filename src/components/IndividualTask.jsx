import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import CustomButton from './CustomButtom';

export default class IndividualTask extends Component {
    
    static propTypes = {
        taskDesc: PropTypes.string.isRequired,
        doRemind: PropTypes.bool,
        id: PropTypes.number,
        day: PropTypes.string,
        onDeletes: PropTypes.func,
        onToggles: PropTypes.func,
    }

    taskStyle = {
        background: "#f4f4f4",
        borderRadius: "0.5rem",
        margin: "0.5rem 1rem",
        cursor: "pointer",
        padding: "0.3rem 2rem",
        fontSize: "medium"
    }

    editBtnStyle = {
        fontSize: "small",
        margin: "-10rem 0.5rem"
    }

    delBtnStyle = {
        fontSize: "small",
        margin: "0.3rem 0.5rem"
    }

    render() {
    return <Fragment>
        <div style={this.taskStyle} className={`${this.props.doRemind ? 'left-border-green' : ''}`}>
            <div>
                <input type="checkbox" name={this.props.taskDesc} id={this.props.id}  onChange={() => {this.props.onToggles(this.props.id)}} checked={this.props.doRemind} />
                <strong>&nbsp;&nbsp;{this.props.taskDesc}</strong>
                <span style={{float: "right"}}>
                    <CustomButton color="#17a2b8" text="Edit" customStyle={this.editBtnStyle}/>
                    <CustomButton color="#dc3545" text="Delete" customStyle={this.delBtnStyle} deleteId={this.props.id} onBtnClick={()=>{this.props.onDeletes(this.props.id)}}/>
                </span>
            </div>
            <span style={{paddingLeft: "1.5rem"}}>
                On {this.props.day}
            </span>
        </div>
    </Fragment>
    }
}
