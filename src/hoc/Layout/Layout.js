import React ,{useState} from "react";

import Aux from "../Auxiliary";
import "./Layout.css";
import Toolbar from "../../component/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../component/Navigation/SideDrawer/SideDrawer";


function Layout (props) {

const [ShowSideDrawer, setSideDrawer] = useState(false);

const SideDrawerCloseHandler = ()=>{
    setSideDrawer(false);
}

const DrawerToggleHandler = ()=>{
    setSideDrawer(true);
}



    return (
        <Aux>
            <Toolbar DrawerToggleClicked={DrawerToggleHandler} />
            <SideDrawer 
            open = {ShowSideDrawer}
            closed = {SideDrawerCloseHandler} />
            <p> Back drop</p>
            <main className="content">{props.children} </main>
        </Aux>
    )
}

export default Layout;