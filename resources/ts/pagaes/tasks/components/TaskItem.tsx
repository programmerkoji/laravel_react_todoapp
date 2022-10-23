import React, { useState } from "react";
import { toast } from "react-toastify";

import {
    useUpdateDoneTask,
    useUpdateTask,
    useDeleteTask,
} from "../../../queries/TaskQuery";
import { Task } from "../../../types/Task";

type Props = {
    task: Task;
};

const TaskItem: React.VFC<Props> = ({ task }) => {
    const updoneTask = useUpdateDoneTask();
    const updateTask = useUpdateTask();
    const deleteTask = useDeleteTask();

    const [editTitle, setEditTitle] = useState<string | undefined>(undefined);

    const handleToggleEdit = () => {
        setEditTitle(task.title);
    };

    const handleOnKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (["Escape", "Tab"].includes(e.key)) {
            setEditTitle(undefined);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEditTitle(e.target.value)
    }

    const handleUpdate = (e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()

        if (!editTitle) {
            toast.error('タイトルを入力してください。')
            return
        }

        const newTask = {...task}
        newTask.title = editTitle

        updateTask.mutate({
            id: task.id,
            task: newTask,
        })

        setEditTitle(undefined)
    }

    const itemInput = () => {
        return (
            <>
                <form onSubmit={handleUpdate}>
                    <input
                        type="text"
                        className="input"
                        defaultValue={editTitle}
                        onKeyDown={handleOnKey}
                        onChange={handleInputChange}
                    />
                </form>
                <button className="btn" onClick={handleUpdate}>更新</button>
            </>
        );
    };

    const itemText = () => {
        return (
            <>
                <div onClick={handleToggleEdit}>
                    <span>{task.title}</span>
                </div>
                <button className="btn is-delete" onClick={() => deleteTask.mutate(task.id)}>削除</button>
            </>
        );
    };

    return (
        <li className={task.is_done ? "done" : ""}>
            <label className="checkbox-label">
                <input
                    type="checkbox"
                    className="checkbox-input"
                    onClick={() => updoneTask.mutate(task)}
                />
            </label>
            {editTitle === undefined ? itemText() : itemInput()}
        </li>
    );
};

export default TaskItem;
