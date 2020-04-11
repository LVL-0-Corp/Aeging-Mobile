import React, { Fragment } from 'react';
import {
    Text,
    SafeAreaView,
    ScrollView,
    StatusBar
} from "react-native";

class ShopView extends React.Component {
    render(){
        return (
            <Fragment>
                <StatusBar barStyle="dark-content" />
                <SafeAreaView>
                    <ScrollView 
                        showsVerticalScrollIndicator={false}
                        automaticallyAdjustContentInsets={true}
                    >
                       <Text>ozdodkzodk okdokdeokde</Text>
                    </ScrollView>
                </SafeAreaView>
            </Fragment>
        );
    }
}

export default ShopView;