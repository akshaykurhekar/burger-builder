import "./Burger.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger =(props)=>{

    let Ingredients = Object.keys(props.ingredient)
    .map(igKey =>{
        return [...Array(props.ingredient[igKey])].map((_,i)=>{
            return <BurgerIngredient key={igKey + i} type={igKey} />;
        })
    }).reduce((arr,el)=>{
        return arr.concat(el)
    },[]);

    if(Ingredients.length === 0){
        Ingredients = <p> Start Inserting Ingredients </p>
    }

    return(
        <div className="Burger">
            <BurgerIngredient type="bread-top" />
            {Ingredients}
            <BurgerIngredient type="bread-bottom" /> 
        </div>
    );    
}

export default burger;