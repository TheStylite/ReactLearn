class Movie extends React.Component {

  constructor(){
    super()
    this.state = {
      message:'大家好'
    }
  }
  render(){
      //无论是function还是class创建组件的props都是只读属性

    this.state.message = 'hahah'
    return <div>
      {this.props.name}
      <hr />
      {this.state.message}
    </div>
  }
}
