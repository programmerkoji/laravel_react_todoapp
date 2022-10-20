import React from "react";
import ReactDOM from "react-dom";
import {QueryClient, QueryClientProvider} from "react-query"

import Router from './router/router'

const App: React.VFC = () => {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                retry: false //エラー時に何回再取得を行うか（falseは行わない）
            },
            mutations: {
                retry: false
            }
        }
    })
    return (
        <QueryClientProvider client={queryClient}>
            <Router />
        </QueryClientProvider>
    )
};

export default App;
