import "./Modal.css";
import Aux from "../../../hoc/Auxiliary";
import Backdrop from "../Backdrop/Backdrop";

const modal=(props)=>{
   return( 
    <Aux>
        <Backdrop show={props.show} clicked={props.closeModal} />   
    <div 
        className="Modal"
        style={{
            transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: props.show ? '1' : '0'
        }}
    >
        {props.children}
    </div>
    </Aux>
    );
}

export default modal;