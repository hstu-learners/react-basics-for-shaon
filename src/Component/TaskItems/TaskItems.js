import React from 'react';
import TaskItem from './TaskItem';

const TaskItems = () => {
    const TaskItems = ["Create new components", "Improve work flow in Figma", "Create dark mode for IOS"];
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