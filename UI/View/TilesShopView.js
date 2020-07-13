import React, { Fragment, useState, useEffect } from 'react';
import {
    View,
    SafeAreaView,
    ScrollView,
    StatusBar
} from "react-native";
import ShopTile from "../Component/ShopTile";
import { getShops } from "../../API/shopLink";

function TilesShopView ({navigation}) {
    const [currentShopsList, setCurrentShopsList] = useState([])
    /*constructor (props) {
        super(props);
        this.state = { currentShopsList: [] };
    }*/

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
        // this.updateShops();
        updateShops();
        // return () => {
        //     cleanup
        // }
    }, []);

    // render() {       
        // const TABSHOPS = this.state.currentShopsList;        
        const TABSHOPS = currentShopsList;        
        let TABTILES = null;
        if(TABSHOPS.length > 0){
            TABTILES = TABSHOPS.map((shop)=>{
                return (
                    <ShopTile  
                        key={shop._id} 
                        shopName={shop.name} 
                        shopShortDescription={shop.shortDescription} 
                        shopImageUrl={shop.imageUrl}
                        infosRouting={ 
                            // () => this.props.navigation
                            () => navigation.navigate('Shop',{
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

