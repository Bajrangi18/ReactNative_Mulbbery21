import React from "react";
import {
  useState
} from "react"; 
import { StyleSheet, Text, View, Image, TouchableNativeFeedback } from "react-native";
import { IconButton } from 'react-native-paper';
import DataView from './Components/DataView';
import RemoteView from './Components/RemoteView';
import DetectView from './Components/DetectView';



const App = () => {
  const [screen, setScreen] = useState(2);
  console.log(screen);
  
  return (
    <View style={[styles.mainView]}>
      <View style={{flex: 13, backgroundColor: "white",width: '100%'}} >
       <MainView typeScreen={screen} style={{flex: 1}} />
      </View> 
      <View style={[styles.navBar, styles.elevation]} >
        <View style={[{flex: 1, paddingLeft: '7%'}]}  >
        <IconButton
          icon="remote"
          iconColor={"lightgreen"}
          size={31}
          onPress={() => setScreen(1)}
        />
        </View>
        <View style={[{flex: 1}]}>
        <IconButton
          icon="chart-areaspline"
          iconColor={"lightgreen"}
          size={32}
          onPress={() => setScreen(2)}
        />
        </View>
        <View style={[{ flex: 1}]}>
        <IconButton
          icon="camera"
          iconColor={"lightgreen"}
          size={32}
          onPress={() => setScreen(3)}
        />
        </View>
      </View>
    </View>
  );
};

const navIcon = () => {
  return (
      <View/>
  );
};
const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white",
    paddingBottom: 7,
    justifyContent: "center",
    alignItems: "center",
  },
  navBar: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "lightgreen",
    borderRadius: 30,
    width: "80%",
    paddingLeft: "5%",
    paddingRight: "5%"
    },
  elevation: {
    shadowColor: '#000000',  
    elevation: 5  
  },
  navBarButton: {
    paddingTop: '8%'
  }
});

function MainView(props) {
 if(props.typeScreen===1) {
  return (
    <RemoteView type={props.typeScreen}/>
  );
 }
 if(props.typeScreen===2) {
  return (
    <DataView type={props.typeScreen} style={{flex:1}}/>
  );
 }
 if(props.typeScreen===3) {
  return (
    <DetectView type={props.typeScreen}/>
  );
 }
}


export default App;