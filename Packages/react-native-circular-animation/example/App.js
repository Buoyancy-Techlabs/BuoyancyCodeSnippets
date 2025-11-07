import React from 'react'
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
    stop1={"#C7FFC2"} 
    stop2={"#3A82CF"} 
    stop3={"#FFDBDB"} 
    circleRadius={146}
    />
  )
}

export default App