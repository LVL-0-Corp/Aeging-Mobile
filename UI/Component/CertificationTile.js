import React from 'react';
import { Dimensions, Text, Linking, View, Image } from 'react-native';
import { Tile } from 'react-native-elements';
import PropTypes from 'prop-types';

const CertificationTile = (props) => {
    const { imageCertif, titleCertif, describeCertif, urlCertif } = props;
    var {height: heightWindow, width: widthWindow} = Dimensions.get('window');
    let tileWidth = Math.floor((widthWindow-20));
    let tileHeight = Math.floor((heightWindow)/4);

    return (
        // <Tile
        //     containerStyle={{
        //         position:'relative',
        //         marginVertical: 10,
        //         borderStyle: "solid",
        //         shadowColor: "#000",
        //         shadowOffset: {
        //             width: 20,
        //             height: 16,
        //         },
        //         shadowOpacity: 50,
        //         shadowRadius: 50,
        //         elevation: 8,
        //         borderRadius: 10,
        //         backgroundColor: '#fff',
        //     }}
        //     width= {tileWidth}
        //     height= {tileHeight}
        //     imageSrc={{ uri: imageCertif, }}
        //     imageProps={{
        //         resizeMode: "cover",
        //         borderTopLeftRadius: 10,
        //         borderTopRightRadius: 10,
        //     }}
        //     imageContainerStyle={{
        //         width: 100,
        //         position:'relative',
        //         top: 10,
        //     }}
        //     title={titleCertif} 
        //     titleStyle={{
        //         textAlign: "center",
        //     }}
        // >
        //     <Text>{describeCertif}</Text>
        //     <Text onPress={ () => Linking.openURL({urlCertif}) } >{urlCertif}</Text>
        // </Tile>
        <View style={{flex:1, flexDirection:'row', marginBottom: 20}}>
            <View style={{flex: 2}}>
                    <Image
                        key={0}
                        source={{uri: imageCertif}}
                        style={{ borderRadius: 100, marginRight: 10, height: 100, width: 100, resizeMode:'cover'}}
                    />
            </View>
            <View style={{flex:4, flexDirection:'column'}}>
                <Text style= {{ fontSize: 20, color: '#35D19E', fontFamily:'futura-medium-bt', marginBottom:10}}>
                    {titleCertif}
                </Text>
                <Text style={{color: '#37D2A0', marginBottom: 10}}>
                    {describeCertif}
                </Text>
                <Text style={{color:'#37D2A0', textDecorationLine:'underline'}} onPress={() => Linking.openURL(urlCertif)}>
                    Plus d'informations ici
                </Text>
            </View>
        </View>
    );
}

CertificationTile.propTypes = {
    imageCertif: PropTypes.string.isRequired,
    titleCertif: PropTypes.string.isRequired,
    describeCertif: PropTypes.string.isRequired,
    urlCertif: PropTypes.string.isRequired,
}

export default CertificationTile;