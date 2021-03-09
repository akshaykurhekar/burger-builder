import Aux from "../../hoc/Auxiliary";
import "./Layout.css";

const Layout = (props) => {
    return (
        <Aux>
            <p>toolBar, SidBar, Back drop</p>
            <main className="content">{props.children} </main>
        </Aux>
    )
}

export default Layout;