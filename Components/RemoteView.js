import {AppRegistry, StyleSheet, Text, View } from "react-native";
import Video from 'react-native-video';
import {Slider} from '@miblanchard/react-native-slider';
import React from "react";
import { IconButton } from 'react-native-paper';
import {useState} from "react";
import database from '@react-native-firebase/database';


function RemoteView(props) {
    const [movement,setMovement] = useState('HALT');
    const movementForward = item => {
        database()
        .ref('/RemoteView/Movement')
        .update({
          'Forward': item,
        });
    };
    const movementBackward = item => {
        database()
        .ref('/RemoteView/Movement')
        .update({
          'Backward': item,
        });
    };
    const movementHalt = item => {
        database()
        .ref('/RemoteView/Movement')
        .update({
          'Halt': item,
        });
    };
    const movementLeft = item => {
        database()
        .ref('/RemoteView/Movement')
        .update({
          'Left': item,
        });
    };
    const movementRight = item => {
        database()
        .ref('/RemoteView/Movement')
        .update({
          'Right': item,
        });
    };
    return (
        <View style={{flex: 1, flexDirection: 'column', alignItems: 'center',paddingTop: '5%'}}>
            <Video source={{uri: "https://assets.mixkit.co/videos/download/mixkit-countryside-meadow-4075.mp4"}} 
            style={styles.backgroundVideo}  />
            <View style={{flex: 1, flexDirection: 'row', padding: '5%'}}>
                <View style={{flex: 1,flexDirection: 'column', justifyContent: 'center',alignItems: 'center'}}>
                <IconButton
                        icon="fast-forward"
                        iconColor={"black"}
                        size={45}
                        style={{transform: [{ scale: 1 }], transform: [{ rotate: "-90deg" }]}}
                        onPress={() => {setMovement("MOVING FORWARD"); 
                        movementForward(true);
                        movementBackward(false);
                        movementHalt(false);
                        movementLeft(false);
                        movementRight(false);
                        }}
                        />
                </View>
               <View style={{flex: 5, flexDirection: 'column'}}>
               <View style={{flex: 1}}>
                <Text style={{textAlign: 'center'}}>X Axis</Text>
               <SliderExampleX />
                </View>
                <View style={{flex: 1,flexDirection: 'row'}}> 
                <View style={{flex: 1, paddingLeft: '5%'}}>
                <IconButton
                        icon="arrow-left-bold"
                        iconColor={"black"}
                        size={45}
                        style={{transform: [{ scale: 1.2 }]}}
                        onPress={() => {setMovement("TURNING LEFT");
                        movementForward(false);
                        movementBackward(false);
                        movementHalt(false);
                        movementLeft(true);
                        movementRight(false);}}
                        />
                </View>
                <View style={{flex: 1}}>
                <IconButton
                        icon="stop-circle"
                        iconColor={"black"}
                        size={45}
                        style={{transform: [{ scale: 1.2 }]}}
                        onPress={() => {setMovement("HALT");
                        movementForward(false);
                        movementBackward(false);
                        movementHalt(true);
                        movementLeft(false);
                        movementRight(false);}}
                        />
                </View>
                <View style={{flex: 1, paddingRight: '6%'}}>
                <IconButton
                        icon="arrow-right-bold"
                        iconColor={"black"}
                        size={45}
                        style={{transform: [{ scale: 1.2 }]}}
                        onPress={() => {setMovement("TURNING RIGHT");
                        movementForward(false);
                        movementBackward(false);
                        movementHalt(false);
                        movementLeft(false);
                        movementRight(true);}}
                        />
                </View>
                </View>
                <View style={{flex: 1}}>
                <Text style={{textAlign: 'center'}}>Y Axis</Text>
                <SliderExampleY />
                </View>
               </View>
               <View style={{flex: 1, justifyContent: 'center',alignItems: 'center'}}>
               <IconButton
                        icon="fast-forward"
                        iconColor={"black"}
                        size={45}
                        style={{transform: [{ scale: 1 }], transform: [{ rotate: "90deg" }]}}
                        onPress={() => {setMovement("MOVING BACKWARD");
                        movementForward(false);
                        movementBackward(true);
                        movementHalt(false);
                        movementLeft(false);
                        movementRight(false);}}
                        />
               </View>
            </View>
            <Text style={{color: 'black', fontSize: 25,flex: 0.2,fontWeight: '700'}}>{movement}</Text>
        </View>

    );
}

const styles = StyleSheet.create({
    backgroundVideo: {
        flex: 2,
        width: '90%',
        height: '40%',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        backgroundColor: 'lightgreen',
        borderRadius: 20
      },
      container: {
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
        alignItems: 'stretch',
        justifyContent: 'center'
    }
}); 
    
class SliderExampleX extends React.Component {
    state = {
        value: 0,
    };
   
    render() {
        renderComp = () => {
            return (
                <View>
                    <Text style={{color: 'gray', fontSize: 15,fontWeight: '600'}} >{this.state.value}°</Text>
                </View>
            );
        }
        const rotX = item => {
            database()
            .ref('/RemoteView/Camera')
            .update({
              'X': item,
            });
        };
      
        return (
            <View style={styles.container}>
                <Slider
                     minimumValue={-90}
                     maximumValue={90}
                     step={1}
                    value={this.state.value}
                    onValueChange={value => {this.setState({value});
                    rotX(Number(this.state.value));
                    }}
                    animateTransitions={true}
                    containerStyle={styles.TextView}
                    renderAboveThumbComponent={renderComp}
                />
            </View>
        );
    }
}
class SliderExampleY extends React.Component {
    state = {
        value: 0,
    };
   
    render() {
        renderComp = () => {
            return (
                <View>
                    <Text style={{color: 'gray', fontSize: 15,fontWeight: '600'}} >{this.state.value}°</Text>
                </View>
            );
        }
        const rotY = item => {
            database()
            .ref('/RemoteView/Camera/')
            .update({
              'Y': item,
            });
        };
        return (
            <View style={styles.container}>
                <Slider
                     minimumValue={-90}
                     maximumValue={90}
                     step={1}
                    value={this.state.value}
                    onValueChange={value => {this.setState({value});
                    rotY(Number(this.state.value));
                    }}
                    animateTransitions={true}
                    containerStyle={styles.TextView}
                    renderAboveThumbComponent={renderComp}
                />
            </View>
        );
    }
}


AppRegistry.registerComponent('SliderExample', () => SliderExample);
export default RemoteView