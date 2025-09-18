// cls-6
//1. fetch with json conversion
//2. wrap the data loading component under suspense
//3.
//4.

import { use } from "react"

export default function User({ fetchUser }) {

    const user = use(fetchUser);

    // console.log(user);

    const styleSheet = {
        border: '2px solid gold',
        borderRadius: '10px',
        padding: "10px",
        margin: "10px"
    }

    return (
        <div style={styleSheet}>
            <h3>User: {user.length}</h3>
        </div>
    )
}