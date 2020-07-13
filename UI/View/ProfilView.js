import React, { Fragment } from 'react';
import {
    Text,
    SafeAreaView,
    ScrollView,
    StatusBar
} from "react-native";

function ProfilView({ navigation, route }) {
    return (
        <Fragment>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    automaticallyAdjustContentInsets={true}
                >
                    <Text>
                        Profil
                    </Text>
                </ScrollView>
            </SafeAreaView>
        </Fragment>
    );
}

export default ProfilView;