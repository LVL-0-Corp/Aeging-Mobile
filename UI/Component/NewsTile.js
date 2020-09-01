import React from 'react';
import { Dimensions, Text, Linking, View, Image } from 'react-native';
import { Tile } from 'react-native-elements';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Fontisto';

const NewsTile = (props) => {
    const { imageNews, title, textNews, dateNews, autorNews } = props;
    var { height: heightWindow, width: widthWindow } = Dimensions.get('window');
    let tileWidth = Math.floor((widthWindow - 40));
    let tileHeight = Math.floor((heightWindow) / 3);
    let dAujourdhui = new Date();
    let dateNewsCast = new Date(dateNews);
    let diffDate = null;

    Date.twDateDiff = function(sDatePortion, dDateDe, dDateA) {	
        sDatePortion = sDatePortion.toLowerCase();	
        var nDifference = dDateA - dDateDe;	
        var divideBy = { annees:31536000000, mois:2628000000, semaines:604800000, jours:86400000, heures:3600000, minutes:60000, secondes:1000 };
        return Math.floor( nDifference/divideBy[sDatePortion]);
    }
    
    if(Date.twDateDiff("heures", dateNewsCast, dAujourdhui) > 23){
        diffDate = "Il y a "+Date.twDateDiff("jours", dateNewsCast, dAujourdhui)+" jours";
    }else{
        diffDate = "Il y a "+Date.twDateDiff("heures", dateNewsCast, dAujourdhui)+" heures";
    }

    return (
        <View style={{marginBottom: 65}}>
            <Image
                key={0}
                source={{ uri: imageNews }}
                style={{ marginRight: 10, height: tileHeight, width: tileWidth, resizeMode: 'contain' }}
            />
            <Text style={{ fontSize: 20, color: '#35D19E', fontFamily: 'futura-medium-bt', marginBottom: 12, marginTop: 22 }}>
                {title}
            </Text>
            <Text style={{ color: '#37D2A0', marginBottom: 10, fontSize: 13 }}>
                {textNews}
            </Text>
            <View style={{ flexDirection: 'row', marginTop: 10 }}>
                <Icon
                    name="earth"
                    size={16}
                    style={{ color: '#37D2A0', marginRight: 10 }}
                />
                <Text style={{ color: '#37D2A0', fontSize: 12 }}>
                    {autorNews}
                </Text>
                <Icon
                    name="clock"
                    size={16}
                    style={{ color: '#37D2A0', marginRight: 10, marginLeft: 45 }}
                />
                <Text style={{ color: '#37D2A0', fontSize: 12 }}>
                    {diffDate}
                </Text>
            </View>
        </View>
    );
}

NewsTile.propTypes = {
    imageNews: PropTypes.string.isRequired,
    textNews: PropTypes.string.isRequired,
    autorNews: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}

export default NewsTile;