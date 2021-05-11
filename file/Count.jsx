class Count extends React.Component{
  constructor(props) {
    super(props)  
    this.state = {
      age:8,
      count:0,
      obj: {
        x:1,
        y:2,
      }
    }
  } 
  inc = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
  dec = () => {
    this.setState({
      count: this.state.count - 1
    })
  }
  render() {
    return(
      <div>
        <button onClick={ this.inc }>+</button>  
        <span>{ this.state.count }</span>
        <button onClick={ this.dec }>-</button>
      </div>
    ) 
  }
}