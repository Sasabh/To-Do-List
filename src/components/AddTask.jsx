import { useState } from "react";

export default function AddTask({ onAdd }) {
    const [taskDesc,    setTaskDesc]    = useState('');
    const [taskDay,     setTaskDay]     = useState('');
    const [taskRemind,  setTaskRemind]  = useState(false);
    const onSubmit = (e) => {
        e.preventDefault();
        if(!taskDesc) {alert('Please add Task Description!'); return;};
        if(!taskDay) {alert('Please add Task Day!'); return;};
        console.log({'taskDesc': taskDesc, 'day': formatDate(taskDay), 'doRemind': taskRemind });
        onAdd({'taskDesc': taskDesc, 'day': formatDate(taskDay), 'doRemind': taskRemind });

        setTaskDesc('');
        setTaskDay('');
        setTaskRemind(false);
    }
    
    const formatDate = (date) => {
        let newDate = new Date(date);
        let yyyy = newDate.getFullYear();
        let mm = newDate.getMonth() + 1;
        let dd = newDate.getDate();

        if(dd < 10) dd = '0' + dd;
        if(mm < 10) mm = '0' + mm;

        return dd + '/' + mm + '/' + yyyy;
    }

    return (
        <form onSubmit={onSubmit}>
            <span className="form-control">
                <label>Task Description</label>
                <input type="text" name="taskDesc" id="taskDesc" value={taskDesc} onChange={(e) => setTaskDesc(e.target.value)} />
            </span>
            <span className="form-control">
                <label>Task Day</label>
                <input type='date' name="taskDay" id="taskDay" value={taskDay} onChange={(e) => setTaskDay(e.target.value)} />
            </span>
            <span className="form-control">            
                <label>Task Reminder</label>
                <input style={{height: '1rem', width: 'auto', margin: '0rem 2rem 0rem 1rem'}} type="checkbox" 
                    name="taskRemind" id="taskRemind" value={taskRemind} checked={taskRemind} onChange={(e) => setTaskRemind(e.currentTarget.checked)} />
            </span>
            <button type="submit" className="form-control-btn">{'Save Task'.toUpperCase()}</button>
        </form>
    )
}
