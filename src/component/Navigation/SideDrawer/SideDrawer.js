import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import "./SideDrawer.css"
import Backdrop from "../../UI/Backdrop/Backdrop";
import Aux from "../../../hoc/Auxiliary";

const sideDrawer=(props) =>{

    let attachClasses = ["SideDrawer","Close"];

    if(props.open){
        attachClasses = ["SideDrawer","Open"];
    }

    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={attachClasses.join(' ')}>                
                    <Logo height="11%"/>                
                <nav>
                    <NavigationItems/> 
                </nav>

            </div>
        </Aux>
    );
}

export default sideDrawer;