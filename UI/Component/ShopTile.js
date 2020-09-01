import React from 'react';
import { Dimensions, Text, View } from 'react-native';
import { Tile } from 'react-native-elements';
import PropTypes from 'prop-types';

const ShopTile = (props) => {
    const { shopName, shopShortDescription, shopImageUrl, infosRouting, productType } = props;
    var {height: heightWindow, width: widthWindow} = Dimensions.get('window');
    let tileWidth = Math.floor((widthWindow-40)/2);
    let tileHeight = Math.floor((heightWindow)/4);

    return (
        <Tile
            onPress = {infosRouting}
            containerStyle={{
                marginVertical: 10,
                borderStyle: "solid",
                shadowColor: "#000",
                shadowOffset: {
                    width: 20,
                    height: 16,
                },
                shadowOpacity: 50,
                shadowRadius: 50,
                elevation: 8,
                borderRadius: 10,
                backgroundColor: '#fff',
            }}
            width= {tileWidth}
            height= {tileHeight}
            imageSrc={{ uri: shopImageUrl, }}
            imageProps={{
                resizeMode: "cover",
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
            }}
        >
            <Text style={{ color:'#39D3A2', fontSize: 16, marginTop:-45, fontFamily: 'futura-medium-bt', marginBottom: 5, textTransform: 'uppercase', marginLeft: -7, marginRight: -7 }}>{shopName}</Text>
            <Text style={{ color:'#39D3A2', marginLeft: -7, marginRight: -7, marginBottom: 8 }}>{productType}</Text>
        </Tile>
    );
}

ShopTile.propTypes = {
    shopName: PropTypes.string.isRequired,
    shopShortDescription: PropTypes.string.isRequired,
    shopImageUrl: PropTypes.string.isRequired,
}

export default ShopTile;