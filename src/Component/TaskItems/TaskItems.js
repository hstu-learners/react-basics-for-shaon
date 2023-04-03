import React, { useState } from 'react';
import TaskItem from './TaskItem';
import TaskItemEditModal from './TaskItemEditModal';

const TaskItems = () => {

    // const [object, seObject] = useState({});
    const [name, setName] = useState('Walking');
    const [asignee, setAsignee] = useState('Shaon');
    const [label, setLabel] = useState('Beginner');
    const [status, setStatus] = useState('Completed');
    const [modalPreview, setmodalPreview] = useState(false);

    const TaskItems = [
        {
            TaskName: name,
            Asignee: asignee,
            Label: label,
            Status: status
        }
    ]

    const SetValue = [setName, setAsignee, setLabel, setStatus];

    // const TaskItems = [
    //     {
    //         name: 'Walking',
    //         assignee: 'Aktar',
    //         label: 'High',
    //         status: 'Completed'
    //     },
    //     {
    //         name: 'Swiming',
    //         assignee: 'Jaman',
    //         label: 'High',
    //         status: 'Completed'
    //     },
    //     {
    //         name: 'Cycling',
    //         assignee: 'Shaon',
    //         label: 'High',
    //         status: 'Partially completed'
    //     }
    // ]

    return (
        <div className='mt-10'>
            {
                TaskItems.map((taskitem, index) => <TaskItem
                    key={index}
                    taskitem={taskitem}
                    SetValue={SetValue}
                    setmodalPreview={setmodalPreview}
                ></TaskItem>)
            }
            {
                modalPreview && <TaskItemEditModal SetValue={SetValue} setmodalPreview={setmodalPreview}></TaskItemEditModal>
            }
        </div>

    );
};

export default TaskItems;