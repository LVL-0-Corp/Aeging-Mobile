import React from 'react';
import { Dimensions, Text } from 'react-native';
import { Tile } from 'react-native-elements';
import PropTypes from 'prop-types';

const ShopTile = (props) => {
    const { shopName, shopShortDescription, shopImageUrl } = props;
    var {height: heightWindow, width: widthWindow} = Dimensions.get('window');
    let tileWidth = Math.floor((widthWindow-50)/2);
    let tileHeight = Math.floor((heightWindow)/4);

    return (
        <Tile
            containerStyle={{
                marginVertical: 10,
                borderWidth:1,
                borderStyle: "solid",
                borderRadius: 5,
                backgroundColor: '#fff',
            }}
            width= {tileWidth}
            height= {tileHeight}
            imageSrc={{ uri: shopImageUrl, }}
            imageProps={{
                resizeMode: "contain",
            }}
            imageContainerStyle={{
                marginHorizontal: 5,
                marginTop: 10,
                borderStyle: "solid",
                borderWidth: 1,
                backgroundColor: '#eee',
            }}
            title={shopName} 
            titleStyle={{
                textAlign: "center",
            }}
        >
            <Text>{shopShortDescription}</Text>
        </Tile>
    );
}

ShopTile.propTypes = {
    shopName: PropTypes.string.isRequired,
    shopShortDescription: PropTypes.string.isRequired,
    shopImageUrl: PropTypes.string.isRequired,
}

export default ShopTile;