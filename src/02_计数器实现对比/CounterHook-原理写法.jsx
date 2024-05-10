import { memo,useState } from "react"


function CounterHook(props) {
    // useState是一个数组，第一个存的值，第二个是组件设置值的

    const arr = useState(0)

    return(
        <div>
            <h2>当前计数: {arr[0]}</h2>
            <button onClick={ e=> arr[1](100)}>+1</button>
            <button onClick={e => arr[1](-100)}>-1</button>
        </div>
    )

}

export default memo(CounterHook)