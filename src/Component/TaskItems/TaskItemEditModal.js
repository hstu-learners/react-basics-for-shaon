import React from 'react';

const TaskItemEditModal = ({ SetValue, value, setmodalPreview }) => {
    const [setName, setAsignee, setLabel, setStatus] = SetValue;

    const handleUpdate = (event) => {
        event.preventDefault();
        setName(event.target.taskname.value)
        setAsignee(event.target.asignee.value)
        setLabel(event.target.label.value)
        setStatus(event.target.status.value)
        setmodalPreview(!true);
    }

    return (
        <div>
            <input type="checkbox" id="edit" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="edit" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={handleUpdate}>
                        <input type="text" name='taskname' placeholder="Task Name" className="mb-3 input input-bordered w-full max-w-xs" />
                        <input type="text" name='asignee' placeholder="Asignee" className="mb-3 input input-bordered w-full max-w-xs" />
                        <input type="text" name='label' placeholder="Label" className="mb-3 input input-bordered w-full max-w-xs" />
                        <input type="text" name='status' placeholder="Status" className="mb-3 input input-bordered w-full max-w-xs" />
                        <input type="submit" value="Submit" className="btn btn-secondary w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>

    );
};

export default TaskItemEditModal;