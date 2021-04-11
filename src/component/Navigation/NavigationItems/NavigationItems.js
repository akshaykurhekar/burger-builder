import NavItem from "./NavigationItem/NavigationItem";
import "./NavigationItems.css"

const navigationItems=()=>{
    return(
        <ul className="NavigationItems">
            <NavItem link="/" exact >Burger Builder</NavItem>
            <NavItem link="/MyOrder" >MyOrder</NavItem>
            <NavItem link="/Auth" >Login</NavItem>


        </ul>
    );

}

export default navigationItems;