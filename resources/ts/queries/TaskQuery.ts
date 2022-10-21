import { useQuery, useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";

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

export { useTasks, useUpdateDoneTask };
