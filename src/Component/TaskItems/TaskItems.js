import React from 'react';
import TaskItem from './TaskItem';

const TaskItems = () => {
    const TaskItems = [
        {
            'name': 'Walking',
            'assignee': 'Aktar',
            'label': 'High',
            'status': 'Completed'
        },
        {
            'name': 'Swiming',
            'assignee': 'Jaman',
            'label': 'High',
            'status': 'Completed'
        },
        {
            'name': 'Cycling',
            'assignee': 'Shaon',
            'label': 'High',
            'status': 'Partially completed'
        }
    ]

    return (
        <div>
            {
                TaskItems.map((taskitem, index) => <TaskItem
                    key={index}
                    taskitem={taskitem}
                ></TaskItem>)
            }
        </div>
    );
};

export default TaskItems;