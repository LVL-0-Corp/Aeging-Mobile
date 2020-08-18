import React, { Fragment } from 'react';
import {
    Text,
    SafeAreaView,
    ScrollView,
    StatusBar,
    Dimensions,
    Image,
    Linking
} from "react-native";
import { View } from 'native-base';

function CertificationView({ navigation, route }) {
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
                    style= {{ flex: 1, flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', backgroundColor:'#F4FFF9'}}>
                        <View style={{
                                flex: 1,
                                flexDirection: 'row',
                                flexWrap: 'nowrap',
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                                marginTop: 15,
                            }}>
                            <Image source={require('../../assets/ce.jpg')}  style={{ flex: 2 }}/>
                            <Text style={{ width: 250, marginLeft: 15, flex: 3 }}>
                                Le label bio de l'Union européenne est un label de qualité certifiant qu'un produit commercialisé est conforme au règlement de <Text style={{ color: 'blue'}} onPress={ ()=> Linking.openURL('https://fr.wikipedia.org/wiki/Union_europ%C3%A9enne') }>l'Union européenne</Text> sur <Text style={{ color: 'blue'}} onPress={ ()=> Linking.openURL('https://fr.wikipedia.org/wiki/Agriculture_biologique') }>l'agriculture biologique</Text>
                            </Text>
                        </View>
                        <View style={{
                                flex: 1,
                                flexDirection: 'row',
                                flexWrap: 'nowrap',
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                                marginTop: 15,
                            }}>
                            <View style={{ flex: 2, alignItems: 'center'}}>
                                <Image source={require('../../assets/abf.jpg')}  style={{ width: 80, height: 100 }}/>
                            </View>
                            <Text style={{ width: 250, marginLeft: 15, flex: 3 }}>
                                Le label bio de l'Union européenne est un label de qualité certifiant qu'un produit commercialisé est conforme au règlement de l'Union européenne sur l'agriculture biologique
                            </Text>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </Fragment>
    );
}

export default CertificationView;