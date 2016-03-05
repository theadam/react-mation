# react-mation

`react-mation` makes animating react components easy!

[Demo with react-inform](http://theadam.github.io/react-inform/examples/mation-example/)

## Installation

`npm install --save react-mation`

## Usage

### mation(name = "spring", [config])

`mation` is a function that can be used as a React Component decorator to provide a single prop to your wrapped component that enables simple animations.

The name of the property is the name passed to the `mation` function, so by default it will be `spring`.

The spring prop should be used in the render function to animate values.

It is as simple as:
```
const { yOffset } = this.state;
const { spring } = this.props;

return <h4 style={{transform: `translateY(${spring(yOffset)})`}}>HELLO!!!</h4>;
```
