import React, { Fragment, useState, useEffect } from 'react';
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
import ProductTile from "../Component/ProductTile";
import { getProduct } from "../../API/productLink";

function ShopView({ navigation, route }) {
    const { shopName, shopImagesUrl, shopLongDescription, shopAddress, shopMail, shopPhone, shopTimeTable, shopWebSite, shopCertif, shopProductType } = route.params;
    console.log(route.params);
    const { width } = Dimensions.get("window");
    const height = width * 0.6;

    const [currentProductList, setCurrentProductList] = useState([])
    const updateProduct = async () => {
        const wait = await getProduct();
        setCurrentProductList(wait);
    }
    useEffect(() => {
        updateProduct();
    }, []);

    const TABPRODUCTSHOP = currentProductList;
    let TABPRODUCT = null;
    if (TABPRODUCTSHOP.length > 0) {
        TABPRODUCT = TABPRODUCTSHOP.map((product) => {
            return (
                <ProductTile
                    key={product._id}
                    productName={product.name}
                    productCat={product.productType}
                    productImageUrl={product.imageUrl}
                    infosRouting={
                        // () => this.props.navigation
                        () => navigation.navigate('Shop', {})
                    }
                />
            );
        });
    }
    console.log(TABPRODUCT);

    return (
        <Fragment>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    automaticallyAdjustContentInsets={true}
                >
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
                    <View style={{ margin:15 }}>
                        <Text style={{ fontSize: 20, fontFamily: 'Futura', color: '#35D19E' }}>{shopName}</Text>
                        <Text style={{ color: 'blue', textDecorationLine: 'underline' }} onPress={() => Linking.openURL('http://' + shopWebSite)}>{shopWebSite}</Text>
                        <Text>{shopAddress}</Text>
                        <View style={{ display: 'flex', flexDirection: 'row' }}
                        >
                            <Icon
                                name="email"
                                size={25}
                                style={{ paddingRight: 10, paddingLeft: 10, paddingTop: 3, paddingBottom: 3, backgroundColor: 'lightgrey', borderRadius: 8 }}
                                onPress={() => Linking.openURL('mailto:' + shopMail)}
                            />
                            <Icon
                                name="phone"
                                size={25}
                                style={{ marginLeft: 10, paddingRight: 10, paddingLeft: 10, paddingTop: 3, paddingBottom: 3, backgroundColor: 'lightgrey', borderRadius: 8 }}
                                onPress={
                                    () => {
                                        let phone = '';
                                        if (Platform.OS === 'android') {
                                            phone = 'tel:' + shopPhone
                                        } else {
                                            phone = 'telprompt:' + shopPhone
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
                        <View style={{
                                flex: 1,
                                flexDirection: 'row',
                                flexWrap: 'wrap',
                                justifyContent: 'space-around',
                                backgroundColor: '#fbfff9'
                            }}>
                            {TABPRODUCT}
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </Fragment>
    );
}


export default ShopView;