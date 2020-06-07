import React, { Fragment } from 'react';
import {
    Text,
    Image,
    SafeAreaView,
    ScrollView,
    StatusBar,
    Dimensions,
    View
} from "react-native";

class ShopView extends React.Component {
    render(){
        const { shopName, shopImagesUrl, shopLongDescription, shopAddress } = this.props.route.params;
        console.log(this.props.route.params);
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
                            style={{width,height}}
                        >
                            {
                                shopImagesUrl.map((image, index) => 
                                    <Image 
                                        key={index}
                                        source={{ uri: image }}
                                        style={{ width,height, resizeMode: 'cover' }}
                                    />
                                )
                            }
                        </ScrollView>
                    </View>
                    <ScrollView 
                        showsVerticalScrollIndicator={false}
                        automaticallyAdjustContentInsets={true}
                    >
                        <Text>{ shopName }</Text>
                        <Text>{ shopLongDescription }</Text>
                        <Text>{ shopAddress }</Text>
                    </ScrollView> 
                </SafeAreaView>
            </Fragment>
        );
    }
}

export default ShopView;