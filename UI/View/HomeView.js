import React, { Fragment } from 'react';
import {
    View,
    SafeAreaView,
    ScrollView,
    StatusBar,
    Button
} from "react-native";

class HomeView extends React.Component {
    render(){
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
                                onPress={() => this.props.navigation.navigate('TilesShop')}
                            />
                        </View>
                        <View>
                            <Button
                                title="Local"
                                onPress={() => this.props.navigation.navigate('TilesShop')}
                            />
                        </View>
                        <View>
                            <Button
                                title="Tout"
                                onPress={() => this.props.navigation.navigate('TilesShop')}
                            />
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </Fragment>
        );
    }
}

export default HomeView;