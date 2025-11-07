# react-native-circular-progress-anim

A lightweight, customizable circular progress visualization built with `react-native-svg` and `react-native-reanimated`.

This component renders a ring of small dots around a circle and animates their radii and fill colors to show progress in a smooth, visually appealing way. It uses Reanimated shared values and SVG radial gradients for color transitions.

## Features

- Dotted circular progress visualization
- Smooth easing animation for progress changes
- Configurable sizes, base dot radius, and color stops
- Uses `react-native-reanimated` (v2+) and `react-native-svg` for performant rendering

## Installation

Install the package dependencies in your project if you haven't already:

```bash
npm install react-native-svg react-native-reanimated
# or
yarn add react-native-svg react-native-reanimated
```

Then import `CustomCircularProgress` from this package path (or from your build output if published):

```js
import CustomCircularProgress from 'react-native-circular-progress-anim';
```

## Usage

```jsx
import React from 'react';
import { View } from 'react-native';
import CustomCircularProgress from 'react-native-circular-progress-anim';

export default function App() {
	return (
		<View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
			<CustomCircularProgress
				progress={5}
				BaseDotRadius={0.6}
				CircleHeight={325}
				CircleWidth={325}
				stop1="#C7FFC2"
				stop2="#3A82CF"
				stop3="#FFDBDB"
			/>
		</View>
	);
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `progress` | number | required | Value controlling how much of the circle is "filled". The component computes filled dots as (progress / 10) * 100. Typical range: 0–10 (e.g., 5 shows ~50% of dots filled). |
| `BaseDotRadius` | number | 0.5 | Base radius for each dot in the circle. The animation slightly increases radius for active dots. |
| `CircleHeight` | number | 325 | SVG container height in pixels. |
| `CircleWidth` | number | 325 | SVG container width in pixels. |
| `stop1` | string | `#C7FFC2` | Primary color stop used in radial gradients and fills. |
| `stop2` | string | `#3A82CF` | Secondary color stop used in gradients. |
| `stop3` | string | `#FFDBDB` | Tertiary color stop used in gradients. |

Notes:
- The component internally uses a fixed logical `circleRadius` of 90 in the SVG coordinate system (viewBox 0 0 200 200). If you need a different radius you can fork/modify the component.

## Behavior and animation details

- The component renders 100 dots positioned around the circle.
- Each dot's radius is animated using Reanimated shared values and `withTiming` so progress changes ease smoothly.
- Fill colors are derived from a lookup that mixes plain color values and radial gradients (defined in `<Defs>`). The currently active dots (based on `progress`) are filled with `selectedColor`, while inactive dots use `#C3C3C3`.
- A repeating rotation animation is started via `withRepeat` and `withTiming` to create a subtle rotating effect (180 degrees every ~2.5s in the implementation).

## Example explanation

- Passing `progress={5}` will mark roughly half of the dots as active because the code computes the active count by `(progress / 10) * dots` where `dots === 100`.
- The component also renders a large central text showing the raw `progress` value and a small row of ten indicator dots at the bottom illustrating the progress in 10 discrete steps.

## Dependencies

- react-native-svg — used to draw the dots, gradients and SVG primitives.
- react-native-reanimated (v2+) — used for performant animation via shared values and animated props.

Make sure both are installed and configured correctly in your React Native project (Reanimated requires native setup and babel plugin).

## Edge cases & recommendations

- Progress values outside the expected range (less than 0 or greater than 10) may result in unexpected visual output — clamp or validate `progress` in the calling code.
- For very small base radii (close to 0) the dots may be hard to see; increase `BaseDotRadius` if needed.
- If you change `CircleHeight`/`CircleWidth`, the internal viewBox remains `0 0 200 200` so spacing scales but `circleRadius` remains 90 in the current code.

## Contributing

Feel free to open issues or PRs. Useful improvements: make `circleRadius` configurable, expose rotation speed, and provide TypeScript types.

## License

See the repository `LICENSE` file for license terms.

