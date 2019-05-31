
import React from 'react';   //创建组件，虚拟DM元素，生命周期
import ReactDOM from 'react-dom';   //创建好的组件和虚拟DOM放到页面上展示的

import Hello from '@/components/Hello'


const dog = {
  name:'大黄',
  age:'3',
  gender:'雄'
}


ReactDOM.render(<div>


   {/*直接把组件的名称以标签形式丢到页面上即可  给组件传值  给组件传值可直接用扩展运算符*/}
  {/*<Hello name={dog.name} age={dog.age}></Hello>*/}
  {<Hello {...dog}></Hello>}
  </ div>,document.getElementById('app'));
