import React, { memo } from 'react'
import { useMemo, useState } from 'react'

const App = memo(() => {
    const [count, setCount ] = useState(0)
  return (
    <div>
        <h2>计算结果: {count}</h2>
    </div>
  )
})

export default App