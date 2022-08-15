// import PropTypes from 'prop-types'
import React, { Fragment, Component } from 'react';
import CustomButton from './CustomButtom';
import Tasks from './Tasks';
import AddTask from './AddTask';

export default class TaskTracker extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            showAddTask: false
        };
        this.deleteTask = this.deleteTask.bind(this); //Runs only once in the entire life cycle time of the component
        /* 
        UP| This way we're overriding the class method with the instance method, 
        thus not using the method attached to the Class.prototype but creating a method directly by instance returned by the class.
        */
    }

    /* 
    For the Function useEffect
    useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }

    getTasks()
    }, [])
    */

    componentDidMount() {
        const getTasks = async () => {
            const tasksFromServer = await this.fetchTasks();
            this.setState({ tasks: tasksFromServer});
        }

        getTasks();
        console.log('componentDidUpdate');
    }

    componentDidUpdate(){
        console.log('componentDidUpdate');
    }

    btnStyle = {
        float: "right",
        margin: "0.5rem 1.5rem",
        fontSize: "large"
    }

    boxStyle = {
        border: "2px solid black",
        borderRadius: "2rem",
        fontSize: "larger",
        height: "79vh"
    }

    spanStyle = {
        display: "flex",
        justifyContent: "center"
    }

    async addTask(task){
        // let id = this.state.tasks.at(-1).id + 1;
        // let newTask = {id, ...task};
        const res = await fetch(`http://192.168.1.11:5000/tasks`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(task)
        });

        const data = await res.json();

        this.setState((state, props) => ({
            tasks: [...state.tasks, data]
        }));
        
    }

    async deleteTask(id) {
        await fetch(`http://192.168.1.11:5000/tasks/${id}`,{
            method: 'DELETE'
        });
        this.setState((state, props) => ({
            tasks: state.tasks.filter(task => task.id !== id),
        }));
    }

    async toggleReminder(id){
        const fetchedTask = await this.fetchSingleTask(id);
        const updatedTask = { ...fetchedTask, doRemind: !fetchedTask.doRemind };

        const res = await fetch(`http://192.168.1.11:5000/tasks/${id}`,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedTask)
        });
        const data = await res.json();
        this.setState((state, props) => ({
            tasks: state.tasks.map(task => task.id === id ? {...task, doRemind: data.doRemind } : task),
        }));
    }

    toggleAdd(){
        this.setState((state, props) => ({
            showAddTask: !state.showAddTask
        }));
    }

    async fetchSingleTask (id) {
        const res = await fetch(`http://192.168.1.11:5000/tasks/${id}`,{
            method: 'GET'
        });
        const data = await res.json();
        return data;
    }

    async fetchTasks() {
        const res = await fetch('http://192.168.1.11:5000/tasks');
        let data = await res.json();
        console.log(data);
        return data;
    }

    render() {
        return <Fragment>
            <div style={this.boxStyle}>
                <h1 style={{ margin: "1rem 3rem" }}>
                    Task Tracker
                    <CustomButton text={!this.state.showAddTask ? 'Add Task' : 'Close'} color={!this.state.showAddTask ? '#28A745' : 'red'} customStyle={this.btnStyle} onBtnClick={() => this.toggleAdd()}/>
                </h1>
                <hr style={{ backgroundColor: 'black' }} />
                {this.state.showAddTask && <AddTask onAdd={(task) => this.addTask(task)}></AddTask>}
                {this.state.showAddTask && <hr style={{ backgroundColor: 'black' }} />}
                {
                    this.state.tasks.length > 0 ? 
                    <Tasks taskList={this.state.tasks} onDelete={this.deleteTask} onToggle={(id) => this.toggleReminder(id)} />
                    : <span style={this.spanStyle}>No Tasks to Show</span>
                }
                {/* Performance Implications */}
                {/* Creating and passing a new function on each render cycle. */}
                {/* <Tasks taskList={this.state.tasks} onDelete={this.deleteTask.bind(this)} /> */}
            </div>
        </Fragment>
    }
}
