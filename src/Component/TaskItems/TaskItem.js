import React, { useState } from 'react';

const TaskItem = ({ taskitem, setmodalPreview }) => {

    return (
        <div>
            <div className="card border-2 rounded-lg mb-5 w-96 mx-auto bg-base-100 flex p-5">
                <div className="card-body mx-auto ">
                    <h2 className="card-title">Task Name: {taskitem.TaskName}</h2>
                    <p>Asignee: {taskitem.Asignee}</p>
                    <p>Label: {taskitem.Label}</p>
                    <p>Status: {taskitem.Status}</p>
                </div>
                <div>
                    <label htmlFor="edit" onClick={() => setmodalPreview(!false)} className="btn btn-xs" >Edit</label>
                </div>
            </div>
        </div>
    );
};

export default TaskItem;