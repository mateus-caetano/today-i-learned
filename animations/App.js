import React from 'react';
import {
  View,
  StatusBar,
} from 'react-native';

import TaskList from "./src/tasksList";

function App() {
  return(
    <View>
      <StatusBar backgroundColor='#fff' barStyle='dark-content' />
      <TaskList />
    </View>
  )
}

export default App;
