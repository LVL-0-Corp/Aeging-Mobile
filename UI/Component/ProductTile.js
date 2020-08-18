import React from 'react';
import { Dimensions, Text } from 'react-native';
import { Tile } from 'react-native-elements';
import PropTypes from 'prop-types';

const ProductTile = (props) => {
    const { productName, productPrice, productImageUrl, productCat,infosRouting } = props;
    var {height: heightWindow, width: widthWindow} = Dimensions.get('window');
    let tileWidth = Math.floor((widthWindow-50)/2);
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
            imageSrc={{ uri: productImageUrl, }}
            imageProps={{
                resizeMode: "cover",
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
            }}
            imageContainerStyle={{
                
            }}
            title={productName} 
            titleStyle={{
                textAlign: "center",
            }}
        >
            <Text>{productCat}</Text>
        </Tile>
    );
}

ProductTile.propTypes = {
    productName: PropTypes.string.isRequired,
    productCat: PropTypes.string.isRequired,
    productImageUrl: PropTypes.string.isRequired,
}

export default ProductTile;