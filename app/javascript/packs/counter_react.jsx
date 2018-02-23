import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton'

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {count:0}
  }

  onClickCountUp() {
    this.setState({count: this.state.count + 1})
  }

  render() {

    const style = {
      margin: 12,
    }

    return (
      <div>
        <RaisedButton label="Count Up" style={style} onClick={() => this.onClickCountUp()} />
        <div>クリック回数:{this.state.count}</div>
      </div>
    )
  }
}

export default Counter