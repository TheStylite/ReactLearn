import React from 'react';   //创建组件，虚拟DM元素，生命周期
import Cmt from  './CmtItem'

export default class Movie extends React.Component {

  constructor(){
    super()
    this.state = {
      comList:[
        {id:'0',user:'张三'},
        {id:'1',user:'张三'},
        {id:'2',user:'张三'},
        {id:'3',user:'张三'},
      ]
    }
  }
  render(){
      //无论是function还是class创建组件的props都是只读属性
    return <div>
      <h1>这是评论父组件</h1>
      {this.state.comList.map(item =>
        <Cmt {...item} key={item.id}></Cmt>
      )}
    </div>
  }
}
