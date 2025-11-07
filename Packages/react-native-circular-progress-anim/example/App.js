import React from 'react'
import CustomCircularProgress from 'react-native-circular-progress-anim';

const App = () => {
  return (
    <CustomCircularProgress progress={5} BaseDotRadius={0.5} CircleHeight={325} CircleWidth={325} stop1={"#C7FFC2"} stop2={"#3A82CF"} stop3={"#FFDBDB"} />
  )
}

export default App