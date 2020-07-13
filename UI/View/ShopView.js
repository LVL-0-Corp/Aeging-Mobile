import React, { Fragment } from 'react';
import {
    Text,
    Image,
    SafeAreaView,
    ScrollView,
    StatusBar,
    Dimensions,
    View,
    Linking
} from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function ShopView({ navigation, route }) {
    const { shopName, shopImagesUrl, shopLongDescription, shopAddress, shopMail, shopPhone, shopTimeTable, shopWebSite, shopCertif,shopProductType } = route.params;
    console.log(route.params);
    const { width } = Dimensions.get("window");
    const height = width * 0.6;

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
                        {
                            shopImagesUrl.map((image, index) =>
                                <Image
                                    key={index}
                                    source={{ uri: image }}
                                    style={{ width, height, resizeMode: 'cover' }}
                                />
                            )
                        }
                    </ScrollView>
                </View>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    automaticallyAdjustContentInsets={true}
                    style={{ margin: 15 }}
                >
                    <Text style={{ fontSize: 25 }}>{shopName}</Text>
                    <Text style={{ color:'blue', textDecorationLine:'underline' }} onPress={ ()=> Linking.openURL('http://'+shopWebSite) }>{shopWebSite}</Text>
                    <Text>{shopAddress}</Text>
                    <View style={{ display:'flex', flexDirection:'row' }}
>
                        <Icon
                            name="email"
                            size={25}
                            style={{ paddingRight: 10, paddingLeft: 10, paddingTop: 3, paddingBottom: 3, backgroundColor: 'lightgrey', borderRadius: 8 }}
                            onPress={ ()=> Linking.openURL('mailto:'+shopMail) }
                        />
                        <Icon
                            name="phone"
                            size={25}
                            style={{ marginLeft: 10, paddingRight: 10, paddingLeft: 10, paddingTop: 3, paddingBottom: 3, backgroundColor: 'lightgrey', borderRadius: 8 }}
                            onPress={ 
                                () => {
                                    let phone = '';
                                    if (Platform.OS === 'android') {    
                                        phone = 'tel:'+shopPhone
                                    } else {
                                        phone = 'telprompt:'+shopPhone
                                    }
                                    Linking.openURL(phone);
                                }
                            }
                        />
                    </View>
                    <Text>{shopTimeTable}</Text>
                    <Text>{shopCertif}</Text>
                    <Text>{shopProductType}</Text>
                    <Text>{shopLongDescription}</Text>
                </ScrollView>
            </SafeAreaView>
        </Fragment>
    );
}

export default ShopView;