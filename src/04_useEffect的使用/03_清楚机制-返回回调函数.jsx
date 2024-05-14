import React, { memo } from "react";
import { useState } from "react";
import { useEffect } from "react";

const App = memo(() => {
  const [count, setCount] = useState(0);
  // 负责告知React, 在执行完当前组件渲染之后要执行的副作用的代码
  useEffect(() => {
    //   // 1.监听事件
    //   const unubscribe = store.subscribe(() => {});

    //   function foo() {}
    //   eventBus.on("why", foo);
    console.log("监听redux中数据变量, 监听eventBus中的why事件.");

    return () => {
      console.log("取消监听redux数据变化, 取消监听eventBus中why事件")
    }
  });

  return (
    <div>
      <button onClick={(e) => setCount(count + 100)}>+100({count})</button>
    </div>
  );
});

export default App;
