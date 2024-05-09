import React, { PureComponent } from "react";

class HelloWorld extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello World"
    };
  }

  changeText() {
    this.setState({
      message: "Hello Hooks."
    })
  }
  render() {
    const { message } = this.state

    return (
      <div>
        <h2>内容: {message}</h2>
        <button onClick={e => this.changeText()}>修改文本</button>
      </div>
    );
  }
}

function HelloWorld2(props) {
  let message = "Hello World"


  // 函数式组件存在的最大的缺陷:
  // 1.组件不会被重新渲染：修改message之后，组件是否知道自己需要重新渲染？
  // 2.如果页面重新渲染: 函数会被重新执行, 第二次重新执行时,会被重新给message赋值为hello world
  // 3.类似于生命周期的函数回调: 也是没有的
  return (
    <div>
      <h2>内容2: {message}</h2>
      <button onClick={e => message= "Hello啊 李银河"}>修改文本</button>
    </div>
  )
}

export class App extends PureComponent {
  render() {
    return (
      <div>
        <h1>App page</h1>
        <HelloWorld/>
        <hr />
        <HelloWorld2/>
      </div>
    );
  }
}

export default App;
