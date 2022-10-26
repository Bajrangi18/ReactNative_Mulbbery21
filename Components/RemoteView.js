import { StyleSheet, Text, View, Image, TouchableNativeFeedback } from "react-native";

function RemoteView(props) {
    return (
        <Text style={[styles.TextView]}>{props.type}</Text>

    );
}

const styles = StyleSheet.create({
    TextView: {
        color: 'black',
        fontSize: 50
    }
}); 
    
export default RemoteView