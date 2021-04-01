import "./Button.css";

const button =(props)=>{
    return (
        <button 
          className={["Button",props.btnType].join(' ')} 
          disabled={props.disabled}
          onClick={props.clicked} > 
           {props.children} </button>
    );
}

export default button;