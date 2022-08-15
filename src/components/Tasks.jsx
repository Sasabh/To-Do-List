import React, { Component, Fragment } from 'react';
import IndividualTask from './IndividualTask';
import PropTypes from 'prop-types';

export default class Tasks extends Component {
    static propTypes = {
        taskList: PropTypes.arrayOf(PropTypes.object).isRequired,
        onDelete: PropTypes.func,
        onToggle: PropTypes.func,
    }


    render() {
    return <Fragment>
        {this.props.taskList.map(task => 
            <IndividualTask 
                taskDesc={task.taskDesc} 
                id={task.id} 
                key={task.id} 
                day={task.day}
                doRemind={task.doRemind}
                onDeletes={(id)=>{this.props.onDelete(id)}}
                onToggles={(id) => {this.props.onToggle(id)}}
            >
            </IndividualTask>
        )}
    </Fragment>
    }
}
