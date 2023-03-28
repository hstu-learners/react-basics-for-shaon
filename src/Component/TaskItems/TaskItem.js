import React from 'react';

const TaskItem = ({ taskitem }) => {

    return (
        <div>
            <div className="card border-2 mb-5 w-96 mx-auto  bg-base-100 ">
                <div className="card-body">
                    <h2 className="card-title">Task Name: {taskitem['name']}</h2>
                    <p>{taskitem['assignee']}</p>
                    <p>{taskitem['label']}</p>
                    <p>{taskitem['status']}</p>
                </div>
            </div>
        </div>
    );
};

export default TaskItem;