import React from 'react';

const TaskItem = ({ taskitem }) => {
    return (
        <div>

            <div className="card border-2 mb-5 w-96 mx-auto  bg-base-100 ">
                <div className="card-body">
                    <h2 className="card-title">{taskitem}</h2>
                </div>
            </div>
        </div>
    );
};

export default TaskItem;