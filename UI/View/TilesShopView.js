import React, { Fragment, useState, useEffect } from 'react';
import {
    View,
    SafeAreaView,
    Text,
    ScrollView,
    StatusBar
} from "react-native";
import ShopTile from "../Component/ShopTile";
import { getShops, getShops3 } from "../../API/shopLink";

import Geolocation from '@react-native-community/geolocation';
import Icon from 'react-native-vector-icons/Fontisto';

// Geolocation.setRNConfiguration(config);
Geolocation.getCurrentPosition(info => console.log(info));


function TilesShopView({ navigation }) {
    const [lat, setLat] = useState(null);
    const [long, setLong] = useState(null);
    const [currentShopsList, setCurrentShopsList] = useState([])
    const [loc, setLoc] = useState([])

    const updtGeoLoc = () => {
        Geolocation.getCurrentPosition((data) => {
            setLat(data.coords.latitude)
            setLong(data.coords.longitude)
        })
    }
    // Geolocation.getCurrentPosition(data=>{
    //     setLat(data.coords.latitude)
    // });
    // Geolocation.getCurrentPosition(data=>{
    //     setLong(data.coords.longitude)
    // });

    /*constructor (props) {
        super(props);
        this.state = { currentShopsList: [] };
    }*/

    const updateLoc = async (newLat, newLong) => {
        /*this.setState({*/
        //     currentShopsList: await getShops()
        // });
        console.log('Appel de getShops3 avec comme param : ', newLat, newLong);
        const wait = await getShops3(newLat, newLong);
        console.log('Sorti de getShops3 avec comme param : ', newLat, newLong, ' et comme resultat : ', wait);
        setLoc(wait);
    }
    /*async updateShops() {*/
    const updateShops = async () => {
        /*this.setState({*/
        //     currentShopsList: await getShops()
        // });
        const wait = await getShops();
        setCurrentShopsList(wait);
    }

    // componentDidMount() {
    //    this.updateShops();
    // }
    useEffect(() => {
        updtGeoLoc();
        updateShops();
    }, [])

    useEffect(() => {
        if (lat && long) {
            console.log("eee", lat, long);
            updateLoc(lat, long);
        }
    }, [lat, long]);

    // useEffect(() => {
    //     // this.updateShops();
    //     // return () => {
    //     //     cleanup
    //     // }
    // }, []);


    // render() {       
    // const TABSHOPS = this.state.currentShopsList;        
    const TABSHOPS = currentShopsList;
    const loca = loc;
    let TABTILES = null;
    if (TABSHOPS.length > 0) {
        TABTILES = TABSHOPS.map((shop) => {
            return (
                <ShopTile
                    key={shop._id}
                    shopName={shop.name}
                    shopShortDescription={shop.shortDescription}
                    shopImageUrl={shop.imageUrl}
                    productType={shop.productType}
                    infosRouting={
                        // () => this.props.navigation
                        () => navigation.navigate('Shop', {
                            shopName: shop.name,
                            shopShortDescription: shop.shortDescription,
                            shopImagesUrl: shop.imagesUrl,
                            shopLongDescription: shop.longDescription,
                            shopAddress: shop.address,
                            shopMail: shop.mail,
                            shopPhone: shop.phone,
                            shopTimeTable: shop.timeTable,
                            shopWebSite: shop.webSite,
                            shopCertif: shop.certification,
                            shopProductType: shop.productType
                        })
                    }
                />
            );
        });
    }
    // import Geolocation from '@react-native-community/geolocation';

    // Geolocation.getCurrentPosition(info => console.log(info));
    return (
        <Fragment>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    automaticallyAdjustContentInsets={true}

                >
                    <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        backgroundColor: '#fbfff9',
                        paddingLeft: 20,
                        paddingTop: 15,
                    }}>
                        <Icon
                            name='map-marker-alt'
                            size={20}
                            color="#3DD58E"
                            style={{ marginRight: 15 }}
                        />
                        <Text style={{color:'#3DD58E', fontSize:16}}>{loca}</Text>
                    </View>
                    <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        justifyContent: 'space-around',
                        backgroundColor: '#fbfff9'
                    }}>
                        
                        {TABTILES}
                    </View>
                </ScrollView>
            </SafeAreaView>
        </Fragment>
    );
    // }
}

export default TilesShopView;

