import { StyleSheet, Text, View} from "react-native";
import {Switch, RadioButton} from "react-native-paper"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useState} from "react"; 
  import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";
import { Dimensions } from "react-native";

  const screenWidth = Dimensions.get("window").width;
function DataView(props) {
    const [isSwitchOn, setIsSwitchOn] = useState(false);
    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

    const [isSwitchTwoOn, setIsSwitchTwoOn] = useState(false);
    const onToggleSwitchTwo = () => setIsSwitchTwoOn(!isSwitchTwoOn);

    const [checked, setChecked] = useState('temp');
  
    return ( 
        <View style={{flex: 1, flexDirection: "column", width: '100%'}}>
            <View style={{flex: 7,flexDirection: 'row'}}> 
                    <View style={{flex: 1,padding: 15}}>
                            <SoilInfoCard cardType="eyedropper" cardValue="6.8" mVal="pH" />  
                    </View >
                    <View style={{flex: 1,padding: 15}}>
                            <SoilInfoCard cardType="water" cardValue="400" mVal="bH"/>
                    </View>  
                    <View style={{flex: 1,padding: 15}}>
                            <SoilInfoCard cardType="sun-wireless" cardValue="250" mVal="mW"/>
                    </View>  
            </View>
            <View style={{flex: 5, flexDirection: 'row'}}>
                    <View style={{flex: 1,padding: 15,paddingTop: 5}}>
                            <EnvInfoCard cardType="thermometer" cardValue="25" mVal="temperature-celsius" infVal="Medium"/>
                    </View>
                    <View style={{flex: 1,padding: 15,paddingTop: 5}}>
                            <EnvInfoCard cardType="water-opacity" cardValue="76" mVal="percent" infVal="High"/>
                    </View>
            </View>
            <View style={{flex: 3, alignItems: "center",paddingTop: 10}}>
                <View style={{flex: 1,flexDirection: 'row', padding: 5, backgroundColor: 'lightgreen',width: '92%',borderRadius: 20, shadowColor: '#000000',  
        elevation: 6}}>
                <View style={{flex: 1,justifyContent: "center", alignItems: "center"}}>
                <Switch value={isSwitchOn} onValueChange={onToggleSwitch} color="green"   />
                <Text style={{fontSize: 18,fontWeight:'500',color:"white"}}>Water Release</Text>
                    </View>
                <View style={{flex: 1,justifyContent: "center", alignItems: "center"}}>
                <Switch value={isSwitchTwoOn} onValueChange={onToggleSwitchTwo} color="green"/>
                <Text style={{fontSize: 18,fontWeight:'500',color:"white"}}>Oxygen Release</Text>
                </View>
                </View>
            </View>
            <View style={{flex: 9, alignItems: 'center',paddingTop: 15}}>
            <View>
                    <LineChart
                        data={{
                        labels: ["12PM", "1PM", "2PM", "3PM", "4PM", "5PM","6PM","7PM"],
                        datasets: [
                            {
                            data: [
                                Math.random(15,40) * 100,
                                Math.random(15,40) * 100,
                                Math.random(15,40) * 100,
                                Math.random(15,40) * 100,
                                Math.random(15,40) * 100,
                                Math.random(15,40) * 100,
                                Math.random(15,40) * 100, 
                                Math.random(15,40) * 100,                           
                            ]
                            }
                        ]
                        }}
                        width={360} // from react-native
                        height={220}
                        yAxisLabel=""
                        yAxisSuffix="*C"
                        yAxisInterval={0.5} // optional, defaults to 1
                        chartConfig={{
                        backgroundColor: "lightgreen",
                        backgroundGradientFrom: "lightgreen",
                        backgroundGradientTo: "#ffa726",
                        decimalPlaces: 0, // optional, defaults to 2dp
                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        style: {
                            borderRadius: 10
                        },
                        propsForDots: {
                            r: "4",
                            strokeWidth: "2",
                            stroke: "green"
                        }
                        }}
                        bezier
                        style={{
                        marginVertical: 8,
                        borderRadius: 16,
                        shadowColor: '#000000',
                        elevation: 6
                        }}
                    />
                </View>
            </View>
            <View style={{flex: 4.5 ,flexDirection: 'row'}}>
                <View style={{flex:1, justifyContent: "center", alignItems: "center"}}>
                <RadioButton
                color="lightgreen"
                value="temp"
                status={ checked === 'temp' ? 'checked' : 'unchecked' }
                onPress={() => setChecked('temp')}
                />
                <Icon name="thermometer"size={45} color="lightgreen" />
                </View>
                <View style={{flex:1, justifyContent: "center", alignItems: "center"}}>
                <RadioButton
                color="lightgreen"
                value="humid"
                status={ checked === 'humid' ? 'checked' : 'unchecked' }
                onPress={() => setChecked('humid')}
                />
                <Icon name="water-opacity"size={45} color="lightgreen" />
                </View>
                <View style={{flex:1, justifyContent: "center", alignItems: "center"}}>
                <RadioButton
                color="lightgreen"
                value="pH"
                status={ checked === 'pH' ? 'checked' : 'unchecked' }
                onPress={() => setChecked('pH')}
                />
                <Icon name="eyedropper"size={45} color="lightgreen" />
                </View>
                <View style={{flex:1, justifyContent: "center", alignItems: "center"}}>
                <RadioButton
                color="lightgreen"
                value="moist"
                status={ checked === 'moist' ? 'checked' : 'unchecked' }
                onPress={() => setChecked('moist')}
                />
                <Icon name="water"size={45} color="lightgreen" />
                </View>
                <View style={{flex:1, justifyContent: "center", alignItems: "center"}}>
                <RadioButton
                color="lightgreen"
                value="solar"
                status={ checked === 'solar' ? 'checked' : 'unchecked' }
                onPress={() => setChecked('solar')}
                />
                <Icon name="sun-wireless"size={45} color="lightgreen" />
                </View>
           
            </View>
        </View>          
    );
};

const styles = StyleSheet.create({
    elevation: {
        shadowColor: '#000000',  
        elevation: 6,  
        flex: 1, 
        flexDirection: 'column',
        borderRadius: 20,
        justifyContent: "center", 
        alignItems: "center",
        backgroundColor: "lightgreen"
      }
}); 
export default DataView

function SoilInfoCard(props) {
    return (
        <View style={[styles.elevation]}>
            <Icon name={props.cardType} size={50} color="white" />
            <Text style={{fontSize: 30,fontWeight:'900',paddingTop: '10%',color:"white"}}>{props.cardValue}</Text>
            <Text style={{fontSize: 18,fontWeight:'500',color:"white"}}>{props.mVal}</Text>
        </View>
    );
};

function EnvInfoCard(props) {
    return (
            <View style={{flex:1, flexDirection: 'row', backgroundColor: "lightgreen",borderRadius: 20, 
            shadowColor: '#000000',  elevation: 6, alignItems: "center"}}>
                <View style={{flex: 2,justifyContent: "center", alignItems: "center",paddingLeft: 7}}>
                        <Icon name={props.cardType} size={70} color="white" />
                </View>
                <View style={{flex: 4,flexDirection: 'column',justifyContent: "center", alignItems: "center"}}>
                        <Text style={{fontSize: 40,fontWeight:'900',color: 'white'}}>
                            {props.cardValue}
                            <Icon name={props.mVal} size={25} color="white" />
                        </Text>
                        <Text style={{fontSize: 18,fontWeight:'400',color: 'white'}}>
                            {props.infVal}
                        </Text>
                </View>
            </View>
    );
};