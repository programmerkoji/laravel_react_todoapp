import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Router from "./router/router";
import { AuthProvider } from "./hooks/AuthContext";

const App: React.VFC = () => {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                retry: false, //エラー時に何回再取得を行うか（falseは行わない）
            },
            mutations: {
                retry: false,
            },
        },
    });
    return (
        <AuthProvider>
            <QueryClientProvider client={queryClient}>
                <Router />
                <ToastContainer hideProgressBar={true} />
            </QueryClientProvider>
        </AuthProvider>
    );
};

export default App;
