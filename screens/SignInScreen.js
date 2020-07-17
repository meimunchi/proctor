import React from 'react';
import { Text, View ,Button,FlatList} from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
export default function SignInScreen({route,navigation}){
    return(
        <View>
            <Text>SignIn Screen component</Text>
            <TouchableHighlight onPress={()=>navigation.navigate('Home')}>
                <Text>To Home</Text>
            </TouchableHighlight>
        </View>
    )
}