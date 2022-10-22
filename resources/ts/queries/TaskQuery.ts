import { useQuery, useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import { AxiosError } from "axios";

import * as api from "../api/TaskAPI";

const useTasks = () => {
    return useQuery("tasks", () => api.getTasks());
};

const useUpdateDoneTask = () => {
    const queryClient = useQueryClient();

    return useMutation(api.updateDoneTask, {
        onSuccess: () => {
            //更新が成功したときに実行されるメソッド
            queryClient.invalidateQueries("tasks"); //コンポーネントを再描画することができる
        },
        onError: () => {
            //エラーが発生したときに実行されるメソッド
            toast.error("更新に失敗しました。");
        },
    });
};

const useCreateTask = () => {
    const queryClient = useQueryClient();

    return useMutation(api.createTask, {
        onSuccess: () => {
            //更新が成功したときに実行されるメソッド
            queryClient.invalidateQueries("tasks"); //コンポーネントを再描画することができる
            toast.success("登録に成功しました。");
        },
        onError: (error: AxiosError) => {
            if (error.response?.data.errors) {
                Object.values(error.response?.data.errors).map(
                    (messages: any) => {
                        messages.map((message: string) => {
                            toast.error(message);
                        });
                    }
                );
            } else {
                //エラーが発生したときに実行されるメソッド
                toast.error("登録に失敗しました。");
            }
        },
    });
};

const useUpdateTask = () => {
    const queryClient = useQueryClient();

    return useMutation(api.updateTask, {
        onSuccess: () => {
            //更新が成功したときに実行されるメソッド
            queryClient.invalidateQueries("tasks"); //コンポーネントを再描画することができる
            toast.success("更新に成功しました。");
        },
        onError: () => {
            //エラーが発生したときに実行されるメソッド
            toast.error("更新に失敗しました。");
        },
    });
};

const useDeleteTask = () => {
    const queryClient = useQueryClient();

    return useMutation(api.deleteTask, {
        onSuccess: () => {
            //更新が成功したときに実行されるメソッド
            queryClient.invalidateQueries("tasks"); //コンポーネントを再描画することができる
            toast.success("タスクを削除しました。");
        },
        onError: () => {
            //エラーが発生したときに実行されるメソッド
            toast.error("削除に失敗しました。");
        },
    });
};

export {
    useTasks,
    useUpdateDoneTask,
    useCreateTask,
    useUpdateTask,
    useDeleteTask,
};
