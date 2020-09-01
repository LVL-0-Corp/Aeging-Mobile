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
import Icon from 'react-native-vector-icons/Fontisto';
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
                    <View style={{ backgroundColor:"#F4FFF9" }}>
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
                        <View style={{ margin:15}}>
                            <Text style={{ fontSize: 20, fontFamily: 'futura-medium-bt', color: '#35D19E' }}>{shopName}</Text>
                            <Text style={{ color: '#37D2A0', marginBottom: 2, textDecorationLine: 'underline' }} onPress={() => Linking.openURL('http://' + shopWebSite)}>{shopWebSite}</Text>
                            <Text style={{color:'#37D2A0', marginBottom: 20}}>{shopAddress}</Text>
                            <View style={{ display: 'flex', flexDirection: 'row', marginBottom: 20 }}
                            >
                                <Icon
                                    name="email"
                                    size={25}
                                    style={{ paddingRight: 15, paddingLeft: 15, paddingTop: 15, paddingBottom: 15, backgroundColor: '#37D2A0', borderRadius: 50, color: 'white' }}
                                    onPress={() => Linking.openURL('mailto:' + shopMail)}
                                />
                                <Icon
                                    name="phone"
                                    size={25}
                                    style={{ marginLeft: 10, paddingRight: 15, paddingLeft: 15, paddingTop: 15, paddingBottom: 15, backgroundColor: '#37D2A0', borderRadius: 50, color: 'white' }}
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
                                <Icon
                                    name="facebook"
                                    size={25}
                                    style={{ marginLeft:10, paddingRight: 20, paddingLeft: 20, paddingTop: 15, paddingBottom: 15, backgroundColor: '#37D2A0', borderRadius: 50, color: 'white' }}
                                    onPress={() => Linking.openURL('mailto:' + shopMail)}
                                />
                            </View>
                            <Text>
                                <Text style={{ color:'#37D2A0', fontFamily: "AEH" }}>Horaires : </Text>
                                <Text style={{ color:'#37D2A0',fontFamily: "AvenirLTStd-Book" }}>{shopTimeTable}</Text>
                            </Text>
                            <View style={{ flexDirection: 'row', width: 400, marginTop: 15 }}>
                                <Text style={{ backgroundColor:'#94FBAF', color:'#3DD58E', paddingLeft: 15, paddingRight: 15, paddingBottom: 5, paddingTop: 5, marginRight: 10, borderRadius: 5 }}>
                                    {shopCertif}
                                </Text>
                            </View>
                            <View style={{ flexDirection: 'row', width: 400, marginTop: 15, marginBottom: 15 }}>
                                <Text style={{ backgroundColor:'#D3FFEE', color:'#3DD58E', paddingLeft: 15, paddingRight: 15, paddingBottom: 5, paddingTop: 5, marginRight: 10, borderRadius: 5 }}>
                                    {shopProductType}
                                </Text>
                            </View>
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
                    </View>
                </ScrollView>
            </SafeAreaView>
        </Fragment>
    );
}


export default ShopView;