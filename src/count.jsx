import { useState } from "react";
// cls-3,4
export default function Counter() {
    const [count, setCount] = useState(0);

    const handleAdd = () => {
        const newCount = count + 1;
        setCount(newCount);
    }

    //style
    const countStyle = {
        border: '2px solid yellow'
    }
    return (
        <div style={countStyle}>
            <h3>Count: {count}</h3>
            <button onClick={handleAdd}>Add</button>
        </div>
    )
}