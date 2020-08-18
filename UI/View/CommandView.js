import React, { Fragment } from 'react';
import {
    Text,
    SafeAreaView,
    ScrollView,
    StatusBar,
    Image,
    Linking
} from "react-native";
import { View } from 'native-base';

function CommandView({ navigation, route }) {
    return (
        <Fragment>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    automaticallyAdjustContentInsets={true}
                >
                    <View 
                    style= {{ flex: 1, flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center'}}>
                        <Text>Commandes</Text>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </Fragment>
    );
}

export default CommandView;