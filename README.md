# react-mation

`react-mation` makes animating react components with [mation](https://github.com/theadam/mation) easy!

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

[Full Example Here](https://jsfiddle.net/theadam/08ymvyuu/3/embedded/result%2Cjs%2Chtml/)

Instead of just calling the spring prop with the destination of the animation, you can also pass it a config value:

`spring(destination, presets.wobbly)`


