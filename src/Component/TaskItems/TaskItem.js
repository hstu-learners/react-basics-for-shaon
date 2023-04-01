import React, { useState } from 'react';

const TaskItem = ({ taskitem }) => {

    return (
        <div>
            <div className="card border-2 rounded-lg mb-5 w-96 mx-auto bg-base-100 flex p-5">
                <div className="card-body mx-auto ">
                    <h2 className="card-title">Task Name: {taskitem["name"]}</h2>
                    <p>{taskitem["assignee"]}</p>
                    <p>{taskitem["label"]}</p>
                    <p>{taskitem["status"]}</p>
                </div>
                <div>
                    <label htmlFor="edit" className="btn btn-xs" >Edit</label>
                </div>
            </div>
        </div>
    );
};

export default TaskItem;