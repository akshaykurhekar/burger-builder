import NavItem from "./NavigationItem/NavigationItem";
import "./NavigationItems.css"

const navigationItems=()=>{
    return(
        <ul className="NavigationItems">
            <NavItem link="/" active>Burger Builder</NavItem>
            <NavItem link="/" >Check Out</NavItem>

        </ul>
    );

}

export default navigationItems;