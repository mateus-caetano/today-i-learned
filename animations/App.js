import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  Dimensions,
  PanResponder,
  Animated
} from 'react-native';

const width = Dimensions.get('window').width

function App() {

  const [ position ] = React.useState(new Animated.Value(width))
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (e, gestureState) => {
      if(gestureState.dx < 0 && gestureState.dx > -width * 0.25)
        position.setValue(width + gestureState.dx)
    },
    onPanResponderRelease: (e, gestureState) => {
      if(gestureState.dx < 0)
        Animated.timing(position, {
          toValue: width,
          duration: 250,
          useNativeDriver: false
        }).start()
    }
  })

  return(
    <View style={styles.container}>
      <StatusBar backgroundColor='#fff' barStyle='dark-content' />
      
      <View style={[styles.listItem, { backgroundColor: "red", width }]}>
        <Text style={{textAlign: 'right', marginRight: 15}} >Apagar</Text>
      </View>
      
      <Animated.View
        {...panResponder.panHandlers}
        style={[
          styles.listItem,
          { width: position }
        ]}
      >
        <Text>Hello world</Text>
      </Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },

  listItem: {
    height: 100,
    backgroundColor: '#ddd',
    justifyContent: 'center',
    marginVertical: 15,
    position: 'absolute'
  },

})

export default App;
