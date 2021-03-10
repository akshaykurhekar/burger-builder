import "./BuildControls.css"
import BuildControl from "./BuildControl/BuildControl";

const controls = [
{label:"Cheese",type:"cheese" },
{label:"Meat",type:"meat" },
{label:"Salad",type:"salad" },
{label:"Bacon",type:"bacon" },
];

const buildControls = (props) =>{
    return (
    <div className="BuildControls">
        <p>Current Price: <strong>{props.price.toFixed(2)}</strong> </p>
        {controls.map(ctrl =>(
            <BuildControl 
            key={ctrl.label} 
            label={ctrl.label}
            added = {() => props.addIngredient(ctrl.type)}
            remove = {() => props.removeIngredient(ctrl.type)}
            disabled ={props.disabled[ctrl.type]}
            />
        ))}
        <button
        className="OrderButton" 
        disabled={!props.purchasable}
        onClick = {props.ordered}
        >ORDER NOW</button>
    </div>
    );
}

export default buildControls;