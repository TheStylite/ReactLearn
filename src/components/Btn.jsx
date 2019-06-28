import React from  'react'


const btnClass = {
  display:'inline-block',
  width:'100px',
  height:'50px',
  backgroundColor:'white'
}


export default class Button extends React.Component{
  constructor() {
    super()
    this.state = {
      msg:'init'
    }
  }
  render(){

    return <div>
    <input  style={btnClass} type='button' value='点击'
    onClick={() => this.say()}/>
    <span>{this.state.msg}</span>

    {/* 当为文本框绑定值以后，要么同时提供一个readOnly.要么提供一个onChange处理函数 */}
    <input  type='text' value={this.state.msg} onChange={(e) => this.textChange(e)}/>
     </div>

  }
  say(){
    console.log('jajajajaj');
    this.setState({       //异步执行
      msg:'hahhaahh'
    },() => {       //回调拿到最新的值
      console.log(this.state.msg);
    })
  }
  textChange(e){
     console.log('发生变化',e.target.value);
     this.setState({
       msg:e.target.value
     })
  }


}
