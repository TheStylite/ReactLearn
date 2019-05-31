
import React from 'react';   //创建组件，虚拟DM元素，生命周期
import ReactDOM from 'react-dom';   //创建好的组件和虚拟DOM放到页面上展示的


let a = 10;
const h1 = <h1>444</h1>
const h2 = [
  <h2>33</h2>,
  <h2>44</h2>
];

let arr = ['aa','bbv'];

//React中需要把key添加给被forEach、map、for循环直接控制的元素
//Jsx中给html元素添加class必须使用className来代替  ,label的for属性必须使用htmlFor来代替


ReactDOM.render(<div>
  {a > 10 ? 10 : 5}
  {h1}
  { /**/ }
  {arr.map(item => <div key={item}>{item}</div>)}
  </ div>,document.getElementById('app'));
