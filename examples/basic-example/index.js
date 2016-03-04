import './index.css';
import React, { Component } from 'react';
import { render } from 'react-dom';
import { mation } from 'react-mation';
import { presets } from 'mation';

@mation('xSpring')
@mation('ySpring')
class Test extends Component {
  state = {
    x: 0,
    y: 0,
  }

  componentWillReceiveProps(props) {
    if (!this.props.toggle && props.toggle) {
      this.setState({x: Math.random() * 500, y: Math.random() * 500});
    } else if (this.props.toggle && !props.toggle) {
      this.setState({x: 0, y: 0});
    }
  }

  render() {
    const { xSpring, ySpring } = this.props;
    const { x, y } = this.state;

    return (
      <div
        className="bouncy"
        style={{transform: `translate(${xSpring(x, presets.wobbly)}px, ${ySpring(y, presets.wobbly)}px)`}}/>
    );
  }
}

const array = Array.apply(null, {length: 50}).map(Number.call, Number);

class Tests extends Component {
  state = {
    toggle: false,
  };

  render() {
    return (
      <div onClick={ () => this.setState({ toggle: !this.state.toggle }) } style={{width: '100%', height: '100%', overflow: 'none'}}>
        { array.map(k => <Test key={k} toggle={this.state.toggle}/>) }
      </div>
    );
  }
}


render(<Tests/>, document.getElementById('container'));
