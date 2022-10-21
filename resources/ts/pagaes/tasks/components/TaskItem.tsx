import React from "react";
import { useUpdateDoneTask } from "../../../queries/TaskQuery";
import { Task } from "../../../types/Task";

type Props = {
    task: Task;
};

const TaskItem: React.VFC<Props> = ({ task }) => {
    const updoneTask = useUpdateDoneTask();

    return (
        <li className={task.is_done ? "done" : ""}>
            <label className="checkbox-label">
                <input
                    type="checkbox"
                    className="checkbox-input"
                    onClick={() => updoneTask.mutate(task)}
                />
            </label>
            <div>
                <span>{task.title}</span>
            </div>
            <button className="btn is-delete">削除</button>
        </li>
    );
};

export default TaskItem;
