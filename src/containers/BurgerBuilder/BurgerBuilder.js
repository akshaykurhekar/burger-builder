import React,{useState} from 'react';
import Aux from "../../hoc/Auxiliary";
import Burger from "../../component/Burger/Burger";
import BurgerControls from "../../component/Burger/BuildControls/BuildControls";
import Modal from "../../component/UI/Modal/Modal";
import OrderSummary from "../../component/Burger/OrderSummary/OrderSummary"; 

function BurgerBuilder(){
   const [Ingredient,setIngredient] = useState(
       {
           salad:0,
           bacon:0,  
           cheese:0,             
           meat:0
       });

    const [Prices,setPrices] = useState(10);
    
    const [purchasable,setPurchasable] = useState(false);

   const Ingredient_Prices ={
        salad:0.5,
        cheese:0.4,
        bacon:1.3,    
        meat:2
     }    

 const updatePurchaseState = (ingredient) => {
        const sum = Object.keys(ingredient)
            .map(igKey =>{
                return ingredient[igKey];
            }).reduce( (sum,el)=>{
                return sum + el;
            },0)

            setPurchasable(sum > 0);
    } 
          
    const addIngredientHandler = (type) => {
        
    const oldCount = Ingredient[type]; 
    
    const newCount = oldCount + 1;  
    const updatedItem = {
        ...Ingredient
    };    
    updatedItem[type] = newCount;
    setIngredient(updatedItem);

    const pricesAddition = Ingredient_Prices[type];
    const oldPrice = Prices;
    setPrices(pricesAddition + oldPrice);
    updatePurchaseState(updatedItem);
    }

    const removeIngredientHandler = (type) => {
        
        const oldCount = Ingredient[type]; 
        if(oldCount <= 0){
            return ;  
        }else{
            const newCount = oldCount - 1;  
            const updatedItem = {
            ...Ingredient
          };    
          updatedItem[type] = newCount;
          setIngredient(updatedItem);
          updatePurchaseState(updatedItem);
        }

        const pricesAddition = Ingredient_Prices[type];
        const oldPrice = Prices;
        setPrices(oldPrice - pricesAddition);
    
        }

       const disabledInfo = {...Ingredient};
       
       for(let key in disabledInfo){
           disabledInfo[key] = disabledInfo[key] <= 0
       } 

       // {"meat":true,"cheese": false, ...}

    return( 
    <Aux>
        <Modal>
            <OrderSummary ingredients={Ingredient} />
        </Modal>        
        <Burger ingredient={Ingredient} />
        <BurgerControls 
        addIngredient={addIngredientHandler}
        removeIngredient={removeIngredientHandler}
        disabled={disabledInfo} 
        price={Prices} 
        purchasable ={purchasable}
        />
                
    </Aux>);
}

export default BurgerBuilder;