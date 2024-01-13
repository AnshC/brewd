import './styles.css'
import { useState, useEffect } from "react"

export default function Item(props) {
    const [counter, setCounter] = useState(0)

    return (
        <div className="Item">
            <div className="content">
                <div className="text">
                    <h1>{props.name}</h1>
                    <p>{props.info}</p>
                </div>
                <h1 className="price">${props.price}.00</h1>
            </div>
            <div className="quantity">
                <div className="number">
                    <div className="button" onClick={() => {
                        if (counter > 0) {
                            props.func(counter - 1, props.name, props.price, props.id)
                            setCounter(counter - 1)
                        } else {
                            props.func(0, props.name, props.price, props.id)
                        }
                    }}>-</div>
                    <div className='counter main'>{counter}</div>
                    <div className="button" onClick={() => {
                        props.func(counter + 1, props.name, props.price, props.id)
                        setCounter(counter + 1)
                    }}>+</div>
                </div>
            </div>
        </div>
    )
}