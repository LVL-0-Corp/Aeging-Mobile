import React, { Fragment } from 'react';
import {
    View,
    SafeAreaView,
    ScrollView,
    StatusBar,
    Button,
    Dimensions,
    Image
} from "react-native";

function OnBoarding({ navigation }) {

    const { width } = Dimensions.get("window");
    const height = width * 1;
    return (
        <Fragment>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                <View style={{ width, height }}>
                    <ScrollView
                        pagingEnabled
                        horizontal
                        style={{ width, height }}
                    >
                        <Image
                            key={0}
                            source={{ uri: 'https://s2.qwant.com/thumbr/0x380/f/3/7fd3364e35a68d4d7431af51141039b9d216b85bb6d6d9097934cb6c86a3ed/202770.svg.jpg?u=https%3A%2F%2Fimage.flaticon.com%2Ficons%2Fsvg%2F202%2F202770.svg&q=0&b=1&p=0&a=1' }}
                            style={{ width, height, resizeMode: 'cover' }}
                        />
                        <Image
                            key={1}
                            source={{ uri: 'https://s2.qwant.com/thumbr/0x380/f/3/7fd3364e35a68d4d7431af51141039b9d216b85bb6d6d9097934cb6c86a3ed/202770.svg.jpg?u=https%3A%2F%2Fimage.flaticon.com%2Ficons%2Fsvg%2F202%2F202770.svg&q=0&b=1&p=0&a=1' }}
                            style={{ width, height, resizeMode: 'cover' }}
                        />
                        <Image
                            key={2}
                            source={{ uri: 'https://s2.qwant.com/thumbr/0x380/f/3/7fd3364e35a68d4d7431af51141039b9d216b85bb6d6d9097934cb6c86a3ed/202770.svg.jpg?u=https%3A%2F%2Fimage.flaticon.com%2Ficons%2Fsvg%2F202%2F202770.svg&q=0&b=1&p=0&a=1' }}
                            style={{ width, height, resizeMode: 'cover' }}
                        />
                    </ScrollView>
                </View>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    automaticallyAdjustContentInsets={true}
                >
                    <View>
                        <Button
                            title="connexion"
                            onPress={() => navigation.navigate('SignIn')}
                        />
                    </View>
                    <View>
                        <Button
                            title="inscription"
                            onPress={() => navigation.navigate('SignUp')}
                        />
                    </View>
                    <View>
                        <Button
                            title="Tout"
                            onPress={() => navigation.navigate('DrawerHome')}
                        />
                    </View>
                </ScrollView>
            </SafeAreaView>
        </Fragment>
    );
}

export default OnBoarding;