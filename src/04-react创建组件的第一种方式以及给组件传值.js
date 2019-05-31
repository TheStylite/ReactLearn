
import React from 'react';   //创建组件，虚拟DM元素，生命周期
import ReactDOM from 'react-dom';   //创建好的组件和虚拟DOM放到页面上展示的


//第一种创建组件的方式
function Hello(props){      //用props接收传过来的数据
  //如果在一个组件中return一个null，则表示此组件什么都不会渲染
  // return null;

  console.log(props);
  //在组件中，必须返回一个合法的JSX虚拟dom元素
  return  <div>这是一个组件{props.name} -- {props.age}</div>;
}

const dog = {
  name:'大黄',
  age:'3',
  gender:'雄'
}


ReactDOM.render(<div>


   {/*直接把组件的名称以标签形式丢到页面上即可  给组件传值  给组件传值可直接用扩展运算符*/}
  {/*<Hello name={dog.name} age={dog.age}></Hello>*/}
  <Hello {...dog}></Hello>
  </ div>,document.getElementById('app'));
