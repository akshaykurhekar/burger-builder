import "./Modal.css";

const modal=(props)=>{
   return( 
    <div className="Modal">
        {props.children}
    </div>);
}

export default modal;