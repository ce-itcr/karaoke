import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Sidebar from "../components/Sidebars/Sidebar";
import Create from "../views/app/Create";
import AppNavbar from "../components/Navbars/AppNavbar"
import HeaderStats from "../components/Headers/HeaderStats";
import Profile from "../views/app/Profile";
import FooterApp from "../components/Footers/FooterApp";
import Home from "../views/app/Home";


export default function App() {

    const setHeaderStats = () => {
        if(window.location.pathname != '/app/profile'){ 
            return(<></>)
        } else {
            return(<HeaderStats />)
        }
    }

    return(
        <>
              <Sidebar />
                <div className="relative md:ml-64 bg-blueGray-100">
                    <AppNavbar />
                    {/* Header */}
                    <div className="relative bg-lightBlue-600 md:pt-32 pb-32 pt-12">
                        <div className="px-4 md:px-10 mx-auto w-full">
                            {setHeaderStats()}
                        </div>
                    </div>
                    <div className="px-4 md:px-10 mx-auto w-full -m-24">
                    <Switch>
                        <Route path="/app/home" exact component={Home} />
                        <Route path="/app/profile" exact component={Profile} />

                        <Route path="/app/songs/create" component={Create} exact />
                        {/*<Route path="/app/songs/edit/:songId" component={AppEdit} exact />
                        <Route path="/app/player/:songId" component={AppPlayer} exact />
                        <Route path="/profile/:username" component={Profile} exact />*/}
                        <Redirect from="/app" to="/app/home" />
                    </Switch>
                    <FooterApp />
                    </div>
                </div>
        </>
    )
}