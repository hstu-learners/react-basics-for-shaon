import React from 'react';
import TaskItem from './TaskItem';

const TaskItems = () => {
    const TaskItems = ["Workout", "Cycling", "Swiming"];
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