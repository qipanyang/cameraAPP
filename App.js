import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import CameraPage from './components/CameraPage';
import Home from './components/home'


const App = () => {
  const [page, setpage] = useState(1);
  if (page == 1){
    return (
        <Home
            pagestate={{page, setpage}}
        />
    )
  }
  else{
    return(
        <CameraPage/>
    )
  }
};



export default App;
