import React, { useState } from "react";

import { useCreateTask } from "../../../queries/TaskQuery";

const TaskInput: React.VFC = () => {
    const [title, setTitle] = useState("");
    const createTast = useCreateTask();

    const hundleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        createTast.mutate(title)
        setTitle("");
    };

    return (
        <form className="input-form" onSubmit={hundleSubmit}>
            <div className="inner">
                <input
                    type="text"
                    className="input"
                    placeholder="TODOを入力してください。"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <button className="btn is-primary">追加</button>
            </div>
        </form>
    );
};

export default TaskInput;
