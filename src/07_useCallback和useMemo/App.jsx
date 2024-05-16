import React, { memo, useState, useCallback } from 'react'




const App = memo(() => {

    const [count, setCount] = useState(0)
    const increment = useCallback(function() {
        setCount(count + 1)
    })
    return (
        <div>
            <h2>Counter: {count}</h2>
            <button onClick={increment}>Add 1</button>
        </div>
    )
})

export default App