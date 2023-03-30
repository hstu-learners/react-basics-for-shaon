import React, { useState } from 'react';
import TaskItemEditModal from './TaskItemEditModal';

const TaskItem = ({ taskitem }) => {
    const [modalPreview, setmodalPreview] = useState(false);
    const handleModalPreview = () => {
        setmodalPreview(!modalPreview)
    }
    return (
        <div>
            <div className="card border-2 rounded-lg mb-5 w-96 mx-auto bg-base-100 flex p-5">
                <div className="card-body mx-auto ">
                    <h2 className="card-title">Task Name: {taskitem['name']}</h2>
                    <p>{taskitem['assignee']}</p>
                    <p>{taskitem['label']}</p>
                    <p>{taskitem['status']}</p>
                </div>
                <div className='mx-auto'>


                    <button onClick={handleModalPreview} className="btn btn-xs border-2 rounded-lg mt-3">Edit</button>
                    {
                        modalPreview == true && <TaskItemEditModal></TaskItemEditModal>
                    }

                </div>


            </div>
        </div>
    );
};

export default TaskItem;