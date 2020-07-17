import React from 'react';
import { Text, View ,Button,FlatList} from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
export default function HomeScreen({route,navigation}){
    return(
        <View>
            <Text>Home Screen component</Text>
            <TouchableHighlight onPress={()=>navigation.navigate('Video')}>
                <Text>To Video</Text>
            </TouchableHighlight>
        </View>
    )
}