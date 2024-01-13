import './styles.css'
import Item from './item'

import OrderContext from '../OrderContext'
import { useContext } from 'react'

/* Icon Imports */

import { VscCoffee } from "react-icons/vsc";

export default function Home() {

    const status = "Taking Orders"
    return (
        <div className="Home">
            <div className="head">
                <h1 className="main">Brewd.</h1>
                <p>Order espresso based coffee straight to your dorm, or anywhere in Alice LLoyd.</p>
                <p className='hours'>6:00 PM - 11:00 PM</p>
                <p>Hours may vary, check status below.</p>
                <h2 className="main">Status: <span className='main'>{status}</span></h2>
            </div>
            <Order />
        </div>
    )
}

function Order () {

    const { menu, newData, updateOrder } = useContext(OrderContext)
    var total = 0;
    return (
        <>
            <div className="menu">
                <h1 className='main'>Menu</h1>
                {menu.map(item => {
                    return <Item key={item.id} name={item.name} info={item.info} price={item.price} func={updateOrder} id={item.id}/>
                })}
            </div>
            <div className="order">
                {newData.length > 0 ? 
                <> <h2 className='main cart-empty'><VscCoffee id='icon'/> Your Brew</h2>
                {newData.map(item=>{
                    total = total + (item.quantity*item.price)
                    return <h3 key={item.id}>{item.name} x {item.quantity} (${item.quantity*item.price}.00)</h3>
                })}
                <div className="total main">Total: ${total}.00</div> 
                <div className="checkout main">
                    $ Pay
                </div>
                </>
                : <h2 className='main cart-empty'><VscCoffee id='icon'/> Nothing Brewing Yet...</h2>}
            </div>
        </>
    )
}
