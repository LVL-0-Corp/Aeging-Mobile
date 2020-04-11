import React, { Fragment } from 'react';
import {
    View,
    SafeAreaView,
    ScrollView,
    StatusBar
} from "react-native";
import ShopTile from "../Component/ShopTile";
import { getShops } from "../../API/shopLink";

class TilesShopView extends React.Component {
    render(){
        const TABSHOPS = getShops();
        const TABTILES = TABSHOPS.map((shop)=>{
            return (
                <ShopTile   
                    shopName={shop.shopName} 
                    shopShortDescription={shop.shopShortDescription} 
                    shopImageUrl={shop.shopImageUrl}
                    infosRouting={ () => this.props.navigation.navigate('Shop',{
                                                                                    shopName: shop.shopName,
                                                                                    shopShortDescription: shop.shopShortDescription,
                                                                                    shopImageUrl: shop.shopImageUrl,
                                                                                }) }
                />
            );
        });
        return (
            <Fragment>
                <StatusBar barStyle="dark-content" />
                <SafeAreaView>
                    <ScrollView 
                        showsVerticalScrollIndicator={false}
                        automaticallyAdjustContentInsets={true}
                    >
                        {/*<AppHeader/>*/}
                        <View style={{
                            flex: 1,
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            justifyContent: 'space-around',
                        }}>
                            {TABTILES}
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </Fragment>
        );
    }
}

export default TilesShopView;