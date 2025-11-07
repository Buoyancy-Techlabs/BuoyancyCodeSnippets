# React Native Circular Animation

A customizable React Native component that creates an engaging circular animation with dots that pulse and change colors in a wave-like pattern around a circle.

## Installation

```bash
npm install react-native-circular-animation
# or
yarn add react-native-circular-animation
```

## Features

- Smooth circular animation with pulsing dots
- Customizable colors with three color stops
- Configurable circle size and dot dimensions
- Adjustable animation timing and progress
- Native driver support for optimal performance
- Customizable positioning

## Usage

```jsx
import CircleAnimation from 'react-native-circular-animation';

const App = () => {
  return (
    <CircleAnimation 
      progress={5}
      defaultColor="grey"
      startAnimationTime={2500}
      circleHeight={350}
      dotWidth={2}
      dotHeight={2}
      stop1="#C7FFC2"
      stop2="#3A82CF"
      stop3="#FFDBDB"
      circleRadius={146}
    />
  );
};
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `progress` | number | required | Controls the animation speed and number of active dots (progress * 10) |
| `defaultColor` | string | "grey" | Background color of the dots when not animated |
| `stop1` | string | "#C7FFC2" | First color stop for the animated dots |
| `stop2` | string | "#3A82CF" | Second color stop for the animated dots |
| `stop3` | string | "#FFDBDB" | Third color stop for the animated dots |
| `startAnimationTime` | number | 25000 | Delay before starting the animation (in milliseconds) |
| `circleHeight` | number | 350 | Height of the circle container |
| `dotWidth` | number | 2 | Width of each dot |
| `dotHeight` | number | 2 | Height of each dot |
| `circleRadius` | number | 146 | Radius of the circle |
| `Xpos` | number | 4.5 | X-coordinate of the circle center |
| `Ypos` | number | 179 | Y-coordinate of the circle center |

## Animation Behavior

The component creates a circle of dots that animate in a wave-like pattern:
1. Dots scale up and down in sequence
2. Colors transition from the default color to the specified color stops
3. Animation repeats at intervals based on the progress value
4. Uses React Native's Animated API with native driver for smooth performance

## Example

```jsx
import React from 'react';
import CircleAnimation from 'react-native-circular-animation';

const Example = () => {
  return (
    <CircleAnimation 
      progress={5}
      defaultColor="#333333"
      stop1="#FF0000"
      stop2="#00FF00"
      stop3="#0000FF"
      startAnimationTime={1000}
      circleHeight={400}
      circleRadius={180}
    />
  );
};
```

## License

See the LICENSE file for details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
