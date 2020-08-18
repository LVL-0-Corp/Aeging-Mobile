import React, { Fragment } from 'react';
import {
    View,
    SafeAreaView,
    ScrollView,
    StatusBar,
    Dimensions,
    Image,
    Text
} from "react-native";
import { Button } from 'react-native-elements';

function OnBoarding({ navigation }) {

    const { width } = Dimensions.get("window");
    const height = width * 0.8;
    return (
        <Fragment>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                <View style={{ width, height, marginBottom: 20, marginTop: 60 }}>
                    <ScrollView
                        pagingEnabled
                        horizontal
                        style={{ width, height }}
                    >
                        <Image
                            key={0}
                            source={require('../../assets/Onboarding1.png')}
                            style={{ width, height, resizeMode: 'contain' }}
                        />
                        <Image
                            key={1}
                            source={require('../../assets/Onboarding2.png')}
                            style={{ width, height, resizeMode: 'contain' }}
                        />
                        <Image
                            key={2}
                            source={require('../../assets/Onboarding3.png')}
                            style={{ width, height, resizeMode: 'contain' }}
                        />
                    </ScrollView>
                </View>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    automaticallyAdjustContentInsets={true}
                >
                    <View style={{ marginRight: 20, marginLeft: 20, display:"flex", flexDirection:"row", justifyContent:"space-between", marginBottom: 10}}>
                        <Text 
                            style={{ color: "#FFFFFF", backgroundColor: "#37D2A0", paddingTop: 15, paddingBottom: 15, paddingLeft: 20, paddingRight: 20, borderWidth: 1, textAlign: "center", borderColor: "#37D2A0", borderRadius: 7, flex: 1, marginRight: 5 }}
                            onPress={() => navigation.navigate('SignUp')} >
                            Créer un compte
                        </Text>
                        {/* <Button
                            title="Se connecter"
                            onPress={() => navigation.navigate('SignIn')}
                        /> */}
                        <Text 
                            style={{ color: "#FFFFFF", backgroundColor: "#37D2A0", paddingTop: 15, paddingBottom: 15, paddingLeft: 20, paddingRight: 20, borderWidth: 1, textAlign: "center", borderColor: "#37D2A0", borderRadius: 7, flex:1, marginLeft: 5 }}
                            onPress={() => navigation.navigate('SignIn')} >
                            Se connecter
                        </Text>
                        {/* <Button
                            title="Créer un compte"
                            backgroundColor="#37D2A0"
                            color="#fff"
                            onPress={() => navigation.navigate('SignUp')}
                        /> */}
                    </View>
                    <View style={{ marginRight: 20, marginLeft: 20 }}>
                        <Text 
                            style={{ color:"#37D2A0", paddingTop: 15, paddingBottom: 15, paddingLeft: 20, paddingRight: 20, borderWidth: 1, textAlign: "center", borderColor: "#37D2A0", borderRadius: 7 }}
                            onPress={() => navigation.navigate('DrawerHome')} >
                            Voir les commerçants locaux
                        </Text>
                        {/* <Button
                            title="Voir les commerçants locaux"
                            type='outline'
                            backgroundColor='yellow'
                            onPress={() => navigation.navigate('DrawerHome')}
                        /> */}
                    </View>
                </ScrollView>
            </SafeAreaView>
        </Fragment>
    );
}

export default OnBoarding;