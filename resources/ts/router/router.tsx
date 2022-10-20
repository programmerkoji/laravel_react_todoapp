import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import HelpPage from "../pagaes/help";
import LoginPage from "../pagaes/login";
import TaskPage from "../pagaes/tasks";

const Router = () => {
    return (
        <BrowserRouter>
            <div>
                <header className="global-head">
                    <ul>
                        <li>
                            <Link to="/">ホーム</Link>
                        </li>
                        <li>
                            <Link to="/help">ヘルプ</Link>
                        </li>
                        <li>
                            <Link to="/login">ログイン</Link>
                        </li>
                        <li>
                            <span>ログアウト</span>
                        </li>
                    </ul>
                </header>
                <Switch>
                    <Route exact path="/">
                        <TaskPage />
                    </Route>
                    <Route path="/help">
                        <HelpPage />
                    </Route>
                    <Route path="/login">
                        <LoginPage />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
};

export default Router;
