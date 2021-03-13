import "./DrawerToggle.css";

const drawerToggle =(props)=>{
    return (
        <div className="DrawerToggle" onClick={props.clicked}>
            <div></div>
            <div></div>    
            <div></div>    
        </div>            
    );
}

export default drawerToggle;