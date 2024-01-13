import { createContext, useState, useEffect } from "react";
import data from './dev/db.json'

const OrderContext = createContext();

export function OrderProvider({children}) {
    
    var total = 0;
    
    const [order, setOrder] = useState([])
    const [newData, setNewData] = useState([])
    const [menu, setMenu] = useState(data.menu)
    
    function updateOrder(x, name, price, id) {
        total = 0;
        setOrder(order => [...order, {
            "name": name,
            "price": price,
            "id": id,
            "quantity": x
        }])
        
    }

    function cleanUp (key) {
        var localOrder = order;
        const cleanList = []
        localOrder = [...new Map(localOrder.map(x => [key(x),x]))]
        localOrder.forEach(item => {
            if (item[1].quantity > 0) {
                cleanList.push(item[1])
            }
        })
        setNewData(cleanList)
    }

    useEffect(() => {
        setMenu(data.menu)
    }, [])

    useEffect(()=>{
        cleanUp(it=>it.id)
    }, [order])

    return (
        <OrderContext.Provider value={{menu, newData, total, updateOrder}}>
            {children}
        </OrderContext.Provider>
    )
}

export default OrderContext