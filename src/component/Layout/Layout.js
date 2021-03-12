import Aux from "../../hoc/Auxiliary";
import "./Layout.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";

const Layout = (props) => {
    return (
        <Aux>
            <Toolbar/>
            <p>toolBar, SidBar, Back drop</p>
            <main className="content">{props.children} </main>
        </Aux>
    )
}

export default Layout;