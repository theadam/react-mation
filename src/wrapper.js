import React, { Component, PropTypes } from 'react';
import Mation, { spring } from 'mation';

export default function wrapper(name, config, InnerComponent) {
  return class WrappedMation extends Component {
    displayName = `WrappedMation-${name}`;
    shouldSkip = true;

    handler = (value) => {
      if (!this.shouldSkip) {
        this.setState({value});
      } else {
        this.shouldSkip = false;
      }
    }

    spring = (v, newConfig) => {
      if (!this.mation) {
        this.mation = Mation(v, config);
        this.destination = v;
        this.mation.on(this.handler);
        this.state = {
          value: v,
        };
        return v;
      }
      if (v !== this.destination) {
        this.destination = v;
        this.mation.moveTo(newConfig ? spring(v, newConfig) : v);
      }
      return this.state.value;
    }

    componentWillUnmount() {
      if (this.mation) this.mation.off(this.handler);
    }

    extraProps() {
      return {
        [name]: this.spring,
      };
    }

    render() {
      return (
        <InnerComponent {...this.props} {...this.extraProps()}/>
      );
    }
  };
}
