import React, { Fragment } from 'react';
import {
    Text,
    SafeAreaView,
    ScrollView,
    Dimensions,
    StatusBar,
    Image,
    Linking
} from "react-native";
import { View } from 'native-base';

function NewsView({ navigation, route }) {
    const { height } = Dimensions.get("window");
    return (
        <Fragment>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    automaticallyAdjustContentInsets={true}
                >
                    <View 
                    style= {{ flex: 1, flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center',backgroundColor:'#F4FFF9', height}}>
                        <Text></Text>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </Fragment>
    );
}

export default NewsView;