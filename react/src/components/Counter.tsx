import { useState } from "react";

const Counter = () => {
    const [orderCount, setOrderCount] = useState<number>(0);

    return (
        <div>
            <h3>Order Quantity: {orderCount}</h3>
            <button
            onClick={() => setOrderCount(orderCount+1)}
            >Order More</button>
        </div>
    )
}

export default Counter;