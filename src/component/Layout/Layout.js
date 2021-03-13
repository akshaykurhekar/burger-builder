import React ,{useState} from "react";

import Aux from "../../hoc/Auxiliary";
import "./Layout.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";


function Layout (props) {

const [ShowSideDrawer, setSideDrawer] = useState(true);

const SideDrawerCloseHandler = ()=>{
    setSideDrawer(false);
}

    return (
        <Aux>
            <Toolbar/>
            <SideDrawer 
            open = {ShowSideDrawer}
            closed = {SideDrawerCloseHandler} />
            <p> Back drop</p>
            <main className="content">{props.children} </main>
        </Aux>
    )
}

export default Layout;