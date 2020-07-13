import React, { Fragment } from 'react';
import {
    View,
    SafeAreaView,
    ScrollView,
    StatusBar,
    Button
} from "react-native";

function HomeView({ navigation }) {
    return (
        <Fragment>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    automaticallyAdjustContentInsets={true}
                >
                    <View>
                        <Button
                            title="Bio"
                            onPress={() => navigation.navigate('TilesShop')}
                        />
                    </View>
                    <View>
                        <Button
                            title="Local"
                            onPress={() => navigation.navigate('TilesShop')}
                        />
                    </View>
                    <View>
                        <Button
                            title="Tout"
                            onPress={() => navigation.navigate('TilesShop')}
                        />
                    </View>
                </ScrollView>
            </SafeAreaView>
        </Fragment>
    );
}

export default HomeView;