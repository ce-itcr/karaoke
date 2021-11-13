import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Sidebar from "../components/app/Sidebars/Sidebar";
import Create from "../views/app/Create";


export default function App() {
    return(
        <>
              <Sidebar />
                <div className="relative md:ml-64 bg-blueGray-100">
                    {/*<AdminNavbar />*/}
                    {/* Header */}
                    {/* <HeaderStats /> */}
                    <div className="px-4 md:px-10 mx-auto w-full -m-24">
                    <Switch>
                        <Route path="/app/home" exact component={Create} />

                        <Route path="/app/songs/create" component={Create} exact />
                        {/*<Route path="/app/songs/edit/:songId" component={AppEdit} exact />
                        <Route path="/app/player/:songId" component={AppPlayer} exact />
                        <Route path="/profile/:username" component={Profile} exact />*/}
                        <Redirect from="/app" to="/app/home" />
                    </Switch>
                    </div>
                </div>
        </>
    )
}