
import React from 'react';   //创建组件，虚拟DM元素，生命周期
import ReactDOM from 'react-dom';   //创建好的组件和虚拟DOM放到页面上展示的




//创建虚拟DOM元素
//参数1：创建的元素的类型，字符串，表示元素的名称
//参数2:是一个对象或null，表示当前DOM的属性
//参数3:子节点（包括其他虚拟dom或文本子节点）
//参数n:其他子节点
// const myH1 = React.createElement('h1',{id:'myh1',title:'this is a div'},'这是一个子节点')
//
// const mydiv = React.createElement('div',{id:'mydiv',title:'this is a div'},'这是一个div节点',myH1)


const mydiv2 = <div>这是啥</div>


//使用ReactDOM渲染到页面上
//参数1 ：要渲染的那个虚拟DOM
//参数2 ：指定页面上一个容器
ReactDOM.render(mydiv2,document.getElementById('app'));
