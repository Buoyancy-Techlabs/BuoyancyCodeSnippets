import React, { useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Svg, { Circle, Defs, Stop, RadialGradient } from 'react-native-svg';
import Animated, {
    useSharedValue,
    useAnimatedProps,
    withTiming,
    withRepeat,
    Easing,
} from 'react-native-reanimated';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const CustomCircularProgress = ({ progress, BaseDotRadius,CircleHeight, CircleWidth,stop1, stop2, stop3 }) => {
    const dots = 100;
    const circleRadius = 90;
    const baseDotRadius = BaseDotRadius ? BaseDotRadius : 0.5
    const colorStop1 = stop1 ? stop1 : "#C7FFC2";
    const colorStop2 = stop2 ? stop2 : "#3A82CF";
    const colorStop3 = stop3 ? stop3 : "#FFDBDB";
    const Cheight = CircleHeight ? CircleHeight : 325;
    const Cwidth = CircleWidth ? CircleWidth : 325;
    const animatedProgress = useSharedValue(0);
    const animatedRotation = useSharedValue(0); // Shared value for dot rotation
    const animatedRadius = useSharedValue(baseDotRadius); // Shared value for dot radius
    

    useEffect(() => {
        // Animate progress change with easing
        animatedProgress.value = withTiming(progress, {
            duration: 1000,
            easing: Easing.out(Easing.cubic),
        });
        
    }, [progress]);

    useEffect(() => {
        animatedRotation.value = withRepeat(
          withTiming(180, { duration: 2500, easing: Easing.linear }), 
          -1,
          false 
        );
        
        animatedRadius.value = baseDotRadius * 5
    }, []);

    // Function to calculate dot positions around a circle
    const calculateDotPosition = (index, totalDots, circleRadius) => {
        const angle = ((index / totalDots) * 2 * Math.PI) + (Math.PI / 2);
        const x = 100 + circleRadius * Math.cos(angle); 
        const y = 100 + circleRadius * Math.sin(angle); 
        return { x, y };
    };

    return (
        <View style={styles.container}>
            <Svg width={Cwidth} height={Cheight} viewBox="0 0 200 200">
                <Defs>
                    
                    <RadialGradient id="grad1A" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                        <Stop offset="0%" stopColor={colorStop1} stopOpacity="0.5" />
                        <Stop offset="20%" stopColor={colorStop2} stopOpacity="0.5" />
                    </RadialGradient>
                    <RadialGradient id="grad1B" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                        <Stop offset="20%" stopColor={colorStop1} stopOpacity="0.5" />
                        <Stop offset="40%" stopColor={colorStop2} stopOpacity="0.5" />
                    </RadialGradient>
                    <RadialGradient id="grad1C" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                        <Stop offset="40%" stopColor={colorStop1} stopOpacity="0.5" />
                        <Stop offset="60%" stopColor={colorStop2} stopOpacity="0.5" />
                    </RadialGradient>
                    <RadialGradient id="grad1D" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                        <Stop offset="60%" stopColor={colorStop1} stopOpacity="0.5" />
                        <Stop offset="80%" stopColor={colorStop2} stopOpacity="0.5" />
                    </RadialGradient>
                    <RadialGradient id="grad1E" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                        <Stop offset="80%" stopColor={colorStop1} stopOpacity="0.5" />
                        <Stop offset="100%" stopColor={colorStop2} stopOpacity="0.5" />
                    </RadialGradient>
                    

               
                    <RadialGradient id="grad2A" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                        <Stop offset="0%" stopColor={colorStop2} stopOpacity="0.5" />
                        <Stop offset="20%" stopColor={colorStop1} stopOpacity="0.5" />
                    </RadialGradient>
                    <RadialGradient id="grad2B" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                        <Stop offset="20%" stopColor={colorStop2} stopOpacity="0.5" />
                        <Stop offset="40%" stopColor={colorStop1} stopOpacity="0.5" />
                    </RadialGradient>
                    <RadialGradient id="grad2C" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                        <Stop offset="40%" stopColor={colorStop2} stopOpacity="0.5" />
                        <Stop offset="60%" stopColor={colorStop1} stopOpacity="0.5" />
                    </RadialGradient>
                    <RadialGradient id="grad2D" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                        <Stop offset="60%" stopColor={colorStop2} stopOpacity="0.5" />
                        <Stop offset="80%" stopColor={colorStop1} stopOpacity="0.5" />
                    </RadialGradient>
                    <RadialGradient id="grad2E" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                        <Stop offset="80%" stopColor={colorStop2} stopOpacity="0.5" />
                        <Stop offset="100%" stopColor={colorStop1} stopOpacity="0.5" />
                    </RadialGradient>

                
                    <RadialGradient id="grad3A" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                        <Stop offset="0%" stopColor={colorStop3} stopOpacity="0.5" />
                        <Stop offset="20%" stopColor={colorStop2} stopOpacity="0.5" />
                    </RadialGradient>
                    <RadialGradient id="grad3B" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                        <Stop offset="20%" stopColor={colorStop3} stopOpacity="0.5" />
                        <Stop offset="40%" stopColor={colorStop2} stopOpacity="0.5" />
                    </RadialGradient>
                    <RadialGradient id="grad3C" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                        <Stop offset="40%" stopColor={colorStop3} stopOpacity="0.5" />
                        <Stop offset="60%" stopColor={colorStop2} stopOpacity="0.5" />
                    </RadialGradient>
                    <RadialGradient id="grad3D" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                        <Stop offset="60%" stopColor={colorStop3} stopOpacity="0.5" />
                        <Stop offset="80%" stopColor={colorStop2} stopOpacity="0.5" />
                    </RadialGradient>
                    <RadialGradient id="grad3E" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                        <Stop offset="80%" stopColor={colorStop3} stopOpacity="0.5" />
                        <Stop offset="100%" stopColor={colorStop2} stopOpacity="0.5" />
                    </RadialGradient>

               

                    <RadialGradient id="grad4A" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                        <Stop offset="0%" stopColor={colorStop2} stopOpacity="0.5" />
                        <Stop offset="20%" stopColor={colorStop3} stopOpacity="0.5" />
                    </RadialGradient>
                    <RadialGradient id="grad4B" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                        <Stop offset="20%" stopColor={colorStop2} stopOpacity="0.5" />
                        <Stop offset="40%" stopColor={colorStop3} stopOpacity="0.5" />
                    </RadialGradient>
                    <RadialGradient id="grad4C" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                        <Stop offset="40%" stopColor={colorStop2} stopOpacity="0.5" />
                        <Stop offset="60%" stopColor={colorStop3} stopOpacity="0.5" />
                    </RadialGradient>
                    <RadialGradient id="grad4D" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                        <Stop offset="60%" stopColor={colorStop2} stopOpacity="0.5" />
                        <Stop offset="80%" stopColor={colorStop3} stopOpacity="0.5" />
                    </RadialGradient>
                    <RadialGradient id="grad4E" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                        <Stop offset="80%" stopColor={colorStop2} stopOpacity="0.5" />
                        <Stop offset="100%" stopColor={colorStop3} stopOpacity="0.5" />
                    </RadialGradient>
                </Defs>
                {Array.from({ length: dots }).map((_, index) => {
                    const { x, y } = calculateDotPosition(index, dots, circleRadius);

                    let selectedColor = index <= 7 ? '#3A82CF'
                        :index === 8 ? 'url(#grad3A)'
                        :index === 9 ? 'url(#grad3B)'
                        :index === 10 ? 'url(#grad3C)'
                        :index === 11 ? 'url(#grad3D)'
                        :index === 12 ? 'url(#grad3E)'
                                : index > 12 && index <= 37 ? '#FFDBDB'
                                :index === 38 ? 'url(#grad4A)'
                                :index === 39 ? 'url(#grad4B)'
                                :index === 40 ? 'url(#grad4C)'
                                :index === 41 ? 'url(#grad4D)'
                                :index === 42 ? 'url(#grad4E)'
                                    :index > 42 && index <= 57 ? '#3A82CF'
                                    :index === 58 ? 'url(#grad1A)'
                                    :index === 59 ? 'url(#grad1B)'
                                    :index === 60 ? 'url(#grad1C)'
                                    :index === 61 ? 'url(#grad1D)'
                                    :index === 62 ? 'url(#grad1E)'
                                            :index > 62 && index <= 87 ? '#C7FFC2'
                                            :index === 88 ? 'url(#grad2A)'
                                            :index === 89 ? 'url(#grad2B)'
                                            :index === 90 ? 'url(#grad2C)'
                                            :index === 91 ? 'url(#grad2D)'
                                            :index === 92 ? 'url(#grad2E)'
                                                    : '#3A82CF';
                    // Determine the color based on progress
                    const color =
                        index <= (progress / 10) * dots ? selectedColor : '#C3C3C3';
                    const animatedProps = useAnimatedProps(() => ({
                        r:
                            index <= (animatedProgress.value / 10) * dots
                                ? baseDotRadius + 0.7
                                : baseDotRadius,
                    }));

                    return (
                        <>
                        
                        <AnimatedCircle
                            key={index}
                            cx={x}
                            cy={y}
                            r={baseDotRadius}
                            fill={color}
                            animatedProps={animatedProps}
                        />
                        
                        </>
                    );
                })}

                 
            </Svg>
            <Text style={styles.text}>{progress}</Text>
            <View style={{borderWidth:0,position:'absolute', bottom:90, flexDirection:'row', gap:5}}>
            {[1,2,3,4,5,6,7,8,9,10].map((el)=>(
                <View style={{width:4,height:4,borderRadius:50,backgroundColor:el<=progress ? '#3A82CF':'#C3C3C3', opacity:1}}></View>
            ))}
            </View>
            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 100,
        lineHeight: 121.02,
        color: 'black',
        position: 'absolute'
    },
});

export default CustomCircularProgress;