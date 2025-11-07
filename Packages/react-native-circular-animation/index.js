import React, { useEffect, useRef } from 'react';
import { View, Animated, StyleSheet } from 'react-native';

const CircleAnimation = ({ progress,stop1,stop2,stop3,defaultColor, startAnimationTime,circleHeight,dotWidth,dotHeight, circleRadius, Xpos, Ypos }) => {
  const totalDots = 100;
  const colorStop1 = stop1 ? stop1 : "#C7FFC2";
  const colorStop2 = stop2 ? stop2 : "#3A82CF";
  const colorStop3 = stop3 ? stop3 : "#FFDBDB";
  const CircleColor = defaultColor? defaultColor : "grey"
  const dotRefs = useRef([]);
  const intervalRef = useRef(null);
  const colorRefs = useRef([]);

  useEffect(() => {
    let currentDot = 0;
    let animationTimeout;
    let isAnimating = false;

    const animateDots = () => {
      let totalDots = progress * 10;
      let AnimDuration = 50;
      if (currentDot < totalDots) {
        Animated.sequence([
          Animated.parallel([
            Animated.timing(dotRefs.current[currentDot], {
              toValue: 1.5, // Scale up by 4x
              duration: AnimDuration, // 1 second
              useNativeDriver: true,
            }),
            currentDot + 1 < totalDots && Animated.timing(dotRefs.current[currentDot + 1], {
              toValue: 2, // Scale up by 4x
              duration: AnimDuration, // 1 second
              useNativeDriver: true,
            }),
            currentDot + 2 < totalDots && Animated.timing(dotRefs.current[currentDot + 2], {
              toValue: 2.5, // Scale up by 4x
              duration: AnimDuration, // 1 second
              useNativeDriver: true,
            }),
            currentDot + 3 < totalDots && Animated.timing(dotRefs.current[currentDot + 3], {
              toValue: 3, // Scale up by 4x
              duration: AnimDuration, // 1 second
              useNativeDriver: true,
            }),
            currentDot + 4 < totalDots && Animated.timing(dotRefs.current[currentDot + 4], {
              toValue: 3.5, // Scale up by 4x
              duration: AnimDuration, // 1 second
              useNativeDriver: true,
            }),
            currentDot + 5 < totalDots && Animated.timing(dotRefs.current[currentDot + 5], {
              toValue: 4, // Scale up by 4x
              duration: AnimDuration, // 1 second
              useNativeDriver: true,
            }),
            currentDot + 6 < totalDots && Animated.timing(dotRefs.current[currentDot + 6], {
              toValue: 3.5, // Scale up by 4x
              duration: AnimDuration, // 1 second
              useNativeDriver: true,
            }),
            currentDot + 7 < totalDots && Animated.timing(dotRefs.current[currentDot + 7], {
              toValue: 3, // Scale up by 4x
              duration: AnimDuration, // 1 second
              useNativeDriver: true,
            }),
            currentDot + 8 < totalDots && Animated.timing(dotRefs.current[currentDot + 8], {
              toValue: 2.5, // Scale up by 4x
              duration: AnimDuration, // 1 second
              useNativeDriver: true,
            }),
            currentDot + 9 < totalDots && Animated.timing(dotRefs.current[currentDot + 9], {
              toValue: 2, // Scale up by 4x
              duration: AnimDuration, // 1 second
              useNativeDriver: true,
            }),
            currentDot + 10 < totalDots && Animated.timing(dotRefs.current[currentDot + 10], {
              toValue: 1.5, // Scale up by 4x
              duration: AnimDuration, // 1 second
              useNativeDriver: true,
            }),

            //color
            Animated.timing(colorRefs.current[currentDot], {
              toValue: 1,
              duration: AnimDuration,
              useNativeDriver: true,
            }),
            currentDot + 1 < totalDots && Animated.timing(colorRefs.current[currentDot + 1], {
              toValue: 1, // Scale up by 4x
              duration: AnimDuration, // 1 second
              useNativeDriver: true,
            }),
            currentDot + 2 < totalDots && Animated.timing(colorRefs.current[currentDot + 2], {
              toValue: 1, // Scale up by 4x
              duration: AnimDuration, // 1 second
              useNativeDriver: true,
            }),
            currentDot + 3 < totalDots && Animated.timing(colorRefs.current[currentDot + 3], {
              toValue: 1, // Scale up by 4x
              duration: AnimDuration, // 1 second
              useNativeDriver: true,
            }),
            currentDot + 4 < totalDots && Animated.timing(colorRefs.current[currentDot + 4], {
              toValue: 1, // Scale up by 4x
              duration: AnimDuration, // 1 second
              useNativeDriver: true,
            }),
            currentDot + 5 < totalDots && Animated.timing(colorRefs.current[currentDot + 5], {
              toValue: 1, // Scale up by 4x
              duration: AnimDuration, // 1 second
              useNativeDriver: true,
            }),
            currentDot + 6 < totalDots && Animated.timing(colorRefs.current[currentDot + 6], {
              toValue: 1, // Scale up by 4x
              duration: AnimDuration, // 1 second
              useNativeDriver: true,
            }),
            currentDot + 7 < totalDots && Animated.timing(colorRefs.current[currentDot + 7], {
              toValue: 1, // Scale up by 4x
              duration: AnimDuration, // 1 second
              useNativeDriver: true,
            }),
            currentDot + 8 < totalDots && Animated.timing(colorRefs.current[currentDot + 8], {
              toValue: 1, // Scale up by 4x
              duration: AnimDuration, // 1 second
              useNativeDriver: true,
            }),
            currentDot + 9 < totalDots && Animated.timing(colorRefs.current[currentDot + 9], {
              toValue: 1, // Scale up by 4x
              duration: AnimDuration, // 1 second
              useNativeDriver: true,
            }),
            currentDot + 10 < totalDots && Animated.timing(colorRefs.current[currentDot + 10], {
              toValue: 1, // Scale up by 4x
              duration: AnimDuration, // 1 second
              useNativeDriver: true,
            }),
          ]),
          Animated.parallel([
            Animated.timing(dotRefs.current[currentDot], {
              toValue: 1, // Scale up by 4x
              duration: AnimDuration, // 1 second
              useNativeDriver: true,
            }),
            currentDot + 1 < totalDots && Animated.timing(dotRefs.current[currentDot + 1], {
              toValue: 1.5, // Scale up by 4x
              duration: AnimDuration, // 1 second
              useNativeDriver: true,
            }),
            currentDot + 2 < totalDots && Animated.timing(dotRefs.current[currentDot + 2], {
              toValue: 2, // Scale up by 4x
              duration: AnimDuration, // 1 second
              useNativeDriver: true,
            }),
            currentDot + 3 < totalDots && Animated.timing(dotRefs.current[currentDot + 3], {
              toValue: 2.5, // Scale up by 4x
              duration: AnimDuration, // 1 second
              useNativeDriver: true,
            }),
            currentDot + 4 < totalDots && Animated.timing(dotRefs.current[currentDot + 4], {
              toValue: 3, // Scale up by 4x
              duration: AnimDuration, // 1 second
              useNativeDriver: true,
            }),
            currentDot + 5 < totalDots && Animated.timing(dotRefs.current[currentDot + 5], {
              toValue: 3.5, // Scale up by 4x
              duration: AnimDuration, // 1 second
              useNativeDriver: true,
            }),
            currentDot + 6 < totalDots && Animated.timing(dotRefs.current[currentDot + 6], {
              toValue: 4, // Scale up by 4x
              duration: AnimDuration, // 1 second
              useNativeDriver: true,
            }),
            currentDot + 7 < totalDots && Animated.timing(dotRefs.current[currentDot + 7], {
              toValue: 3.5, // Scale up by 4x
              duration: AnimDuration, // 1 second
              useNativeDriver: true,
            }),
            currentDot + 8 < totalDots && Animated.timing(dotRefs.current[currentDot + 8], {
              toValue: 3, // Scale up by 4x
              duration: AnimDuration, // 1 second
              useNativeDriver: true,
            }),
            currentDot + 9 < totalDots && Animated.timing(dotRefs.current[currentDot + 9], {
              toValue: 2.5, // Scale up by 4x
              duration: AnimDuration, // 1 second
              useNativeDriver: true,
            }),
            currentDot + 10 < totalDots && Animated.timing(dotRefs.current[currentDot + 10], {
              toValue: 2, // Scale up by 4x
              duration: AnimDuration, // 1 second
              useNativeDriver: true,
            }),
            currentDot + 11 < totalDots && Animated.timing(dotRefs.current[currentDot + 11], {
              toValue: 1.5, // Scale up by 4x
              duration: AnimDuration, // 1 second
              useNativeDriver: true,
            }),
            currentDot + 12 < totalDots && Animated.timing(dotRefs.current[currentDot + 12], {
              toValue: 1, // Scale up by 4x
              duration: AnimDuration, // 1 second
              useNativeDriver: true,
            }),

            //color
            // Animated.timing(colorRefs.current[currentDot], {
            //   toValue: 0, // Scale up by 4x
            //   duration: AnimDuration, // 1 second
            //   useNativeDriver: true,
            // }),
            currentDot + 1 < totalDots && Animated.timing(colorRefs.current[currentDot + 1], {
              toValue: 1, // Scale up by 4x
              duration: AnimDuration, // 1 second
              useNativeDriver: true,
            }),
            currentDot + 2 < totalDots && Animated.timing(colorRefs.current[currentDot + 2], {
              toValue: 1, // Scale up by 4x
              duration: AnimDuration, // 1 second
              useNativeDriver: true,
            }),
            currentDot + 3 < totalDots && Animated.timing(colorRefs.current[currentDot + 3], {
              toValue: 1, // Scale up by 4x
              duration: AnimDuration, // 1 second
              useNativeDriver: true,
            }),
            currentDot + 4 < totalDots && Animated.timing(colorRefs.current[currentDot + 4], {
              toValue: 1, // Scale up by 4x
              duration: AnimDuration, // 1 second
              useNativeDriver: true,
            }),
            currentDot + 5 < totalDots && Animated.timing(colorRefs.current[currentDot + 5], {
              toValue: 1, // Scale up by 4x
              duration: AnimDuration, // 1 second
              useNativeDriver: true,
            }),
            currentDot + 6 < totalDots && Animated.timing(colorRefs.current[currentDot + 6], {
              toValue: 1, // Scale up by 4x
              duration: AnimDuration, // 1 second
              useNativeDriver: true,
            }),
            currentDot + 7 < totalDots && Animated.timing(colorRefs.current[currentDot + 7], {
              toValue: 1, // Scale up by 4x
              duration: AnimDuration, // 1 second
              useNativeDriver: true,
            }),
            currentDot + 8 < totalDots && Animated.timing(colorRefs.current[currentDot + 8], {
              toValue: 1, // Scale up by 4x
              duration: AnimDuration, // 1 second
              useNativeDriver: true,
            }),
            currentDot + 9 < totalDots && Animated.timing(colorRefs.current[currentDot + 9], {
              toValue: 1, // Scale up by 4x
              duration: AnimDuration, // 1 second
              useNativeDriver: true,
            }),
            currentDot + 10 < totalDots && Animated.timing(colorRefs.current[currentDot + 10], {
              toValue: 1, // Scale up by 4x
              duration: AnimDuration, // 1 second
              useNativeDriver: true,
            }),
            currentDot + 11 < totalDots && Animated.timing(colorRefs.current[currentDot + 11], {
              toValue: 1, // Scale up by 4x
              duration: AnimDuration, // 1 second
              useNativeDriver: true,
            }),
            // currentDot + 12 < totalDots && Animated.timing(colorRefs.current[currentDot + 12], {
            //   toValue: 0, // Scale up by 4x
            //   duration: AnimDuration, // 1 second
            //   useNativeDriver: true,
            // })
          ]),
        ]).start(() => {
          currentDot = currentDot + 1;
          animateDots(); // Animate the next dot
        });
      }else {
        isAnimating = false; 
      }
    };

    const startAnimation = () => {
      if (isAnimating) return;
      currentDot = 0; 
      isAnimating = true;
      animateDots(); 
    };

  const resetAnimation = () => {
    clearInterval(intervalRef.current);
    clearTimeout(animationTimeout);

    dotRefs.current.forEach(ref => ref.setValue(1)); 
    colorRefs.current.forEach(ref => ref.setValue(0)); 

    animationTimeout = setTimeout(() => {
      startAnimation();
      intervalRef.current = setInterval(startAnimation, 2500*progress);
    }, startAnimationTime || 25000);
  };

  resetAnimation();

    return () => {
      clearInterval(intervalRef.current); 
      clearTimeout(animationTimeout);
    };
  }, [progress]);

  const renderDots = () => {
    const dots = [];
    const radius = circleRadius || 146;
    const centerX = Xpos || 4.5;
    const centerY = Ypos || 179;

    for (let i = 0; i < totalDots; i++) {
      const angle = ((i / totalDots) * 2 * Math.PI) + (Math.PI / 2);
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);

      dotRefs.current[i] = dotRefs.current[i] || new Animated.Value(1);
      colorRefs.current[i] = colorRefs.current[i] || new Animated.Value(0);

      let selectedColor = i <= 10 || (i >= 42 && i < 60) || (i > 90) ? colorStop2 : (i > 10 && i < 42) ? colorStop3 : colorStop1
      const backgroundColor = colorRefs.current[i].interpolate({
        inputRange: [0, 1],
        outputRange: [CircleColor, selectedColor], 
      });

      dots.push(
        <Animated.View
          key={i}
          style={[
            {
                position: 'absolute',
                width: dotWidth || 2,
                height: dotHeight || 2,
                borderRadius: 5,
              transform: [{ scale: dotRefs.current[i] }],
              top: y - 5, 
              left: x - 5,
              backgroundColor
            },
          ]}
        >

        </Animated.View>
      );
    }
    return dots;
  };

  return <View style={{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: circleHeight || 350,
    backgroundColor: CircleColor,
    position: 'absolute'
  }}>{renderDots()}</View>;
};

export default CircleAnimation;