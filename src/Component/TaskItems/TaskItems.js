import React, { useState } from 'react';
import TaskItem from './TaskItem';
import TaskItemEditModal from './TaskItemEditModal';

const TaskItems = () => {

    const TaskItems = [
        {
            name: 'Walking',
            assignee: 'Aktar',
            label: 'High',
            status: 'Completed'
        },
        {
            name: 'Swiming',
            assignee: 'Jaman',
            label: 'High',
            status: 'Completed'
        },
        {
            name: 'Cycling',
            assignee: 'Shaon',
            label: 'High',
            status: 'Partially completed'
        }
    ]

    return (
        <div className='mt-10'>
            {
                TaskItems.map((taskitem, index) => <TaskItem
                    key={index}
                    taskitem={taskitem}
                ></TaskItem>)
            }
            {
                <TaskItemEditModal></TaskItemEditModal>
            }
        </div>

    );
};

export default TaskItems;