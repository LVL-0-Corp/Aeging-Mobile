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

    constructor (props) {
        super(props);
        this.state = { currentShopsList: [] };
    }

    async updateShops() {
        this.setState({
            currentShopsList: await getShops()
        });
    }
    
    componentDidMount() {
       this.updateShops();
    }

    render() {       
        const TABSHOPS = this.state.currentShopsList;        
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
                            () => this.props.navigation
                                                    .navigate('Shop',{
                                                        shopName: shop.name,
                                                        shopShortDescription: shop.shortDescription,
                                                        shopImagesUrl: shop.imagesUrl,
                                                        shopLongDescription: shop.longDescription,
                                                        shopAddress: shop.address,
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