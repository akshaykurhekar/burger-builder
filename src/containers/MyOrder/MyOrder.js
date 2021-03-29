import { useEffect, useState} from 'react'; 
import "./MyOrder.css";

import Order from "../../component/Orders/Order";
import axios from "../../axios-orders";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

function MyOrder (props) {

    const [orders,setOrders] = useState([]);
    const [loading,setLoading] = useState(true);

    useEffect( () => {
        axios.get('/orders.json')
        .then(res => {
            const fetchedOrder = [];
            for(let key in res.data ){
                  fetchedOrder.push({
                      ...res.data[key],
                      id: key
                  });  
            }
            setOrders(fetchedOrder);
            setLoading(false);
        }).catch(err =>{
            setLoading(false);
        })
    }, []);

    return (
        <div>
            {orders.map(order =>(
                <Order key={order.id}
                 ingredients = {order.ingredient}
                 price = { +order.price} 
                />
            ) )}
        </div>
    );
}

export default withErrorHandler( MyOrder, axios);