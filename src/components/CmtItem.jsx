
import React from 'react';   //创建组件，虚拟DM元素，生命周期

const itemStyle = {
  border:'1px solid #ccc'
}



export default function CmtList(props) {     //抽离为子组件
  return <div style={itemStyle}>
    <h1>评论人:{props.user}</h1>
    <p>{props.user}</p>
  </div>
}
