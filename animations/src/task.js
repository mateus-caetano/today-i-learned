import React from "react";
import {
    StyleSheet,
    View,
    Text,
    CheckBox,
    Dimensions,
    PanResponder,
    Animated,
    LayoutAnimation,
    UIManager
} from 'react-native';

import Icon from "react-native-vector-icons/Feather";

const width = Dimensions.get('window').width
const width_thereshold = -width * 0.25

if (
    Platform.OS === "android" &&
    UIManager.setLayoutAnimationEnabledExperimental
  ) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

export default function Task(props) {
    const [ isExcluded, setIsExcluded ] = React.useState(false)
    const [ position ] = React.useState(new Animated.Value(width))
    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: (e, gestureState) => {
            position.setValue(
                (gestureState.dx) < width_thereshold ? 
                    width * 0.75 :
                    width + gestureState.dx
            )
        },
        onPanResponderRelease: (e, gestureState) => {   
            if(gestureState.dx <= width_thereshold){
                setIsExcluded(true)
                LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
            }

            if(gestureState.dx < 0)
                Animated.timing(position, {
                toValue: width,
                duration: 250,
                useNativeDriver: false
                }).start()
        }
    })

    return(
        <View>
            { !isExcluded && (
            <>
            <View style={[styles. listItem, { backgroundColor: "red", width: width * 0.25, alignSelf: 'flex-end', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', position: 'relative',  }]}>
                <Icon name='trash' color='#fff' size={30} />
            </View>

            <Animated.View
                {...panResponder.panHandlers}
                style={[
                    styles.listItem,
                    { width: position }
                ]}
            >
                <CheckBox style={{ marginHorizontal: 10 }} />
                <Text style={styles.taskTitle}>{props.task.task}</Text>
            </Animated.View>
            </>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    listItem: {
        width,
        height: 100,
        backgroundColor: '#555',
        marginBottom: 10,
        position: 'absolute',
        alignItems: 'center',
        flexDirection: 'row'
    },

    taskTitle: {
        textAlign: 'left',
        color: '#fff',
        fontSize: 20,
        fontWeight: '500',
    }
})