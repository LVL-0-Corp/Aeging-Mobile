import React, { Fragment, useEffect, useState } from 'react';
import {
    Text,
    SafeAreaView,
    ScrollView,
    StatusBar,
    Dimensions,
    Image,
    Linking
} from "react-native";
import { View } from 'native-base';
import NewsTile from "../Component/NewsTile";
import { getNews } from "../../API/newsLink";


function NewsView({ navigation, route }) {
    const { height } = Dimensions.get("window");
    const [currentNewsList, setCurrentNewsList] = useState([])
    const TABNEWS = currentNewsList;
    let TABTILES = null;

    const updateNews = async () => {
        const wait = await getNews();
        setCurrentNewsList(wait);  
    }

    useEffect(() => {
        updateNews();
    }, [])

    Date.twDateDiff = function(sDatePortion, dDateDe, dDateA) {	
        sDatePortion = sDatePortion.toLowerCase();	
        var nDifference = dDateA - dDateDe;	
        var divideBy = { annees:31536000000, mois:2628000000, semaines:604800000, jours:86400000, heures:3600000, minutes:60000, secondes:1000 };
        return Math.floor( nDifference/divideBy[sDatePortion]);
    }

    if(TABNEWS.length > 0){
        TABNEWS.sort(
            function(a, b){
                return Date.twDateDiff("heures", new Date(a.dateNews), new Date())-Date.twDateDiff("heures", new Date(b.dateNews), new Date());
            }
        );
        TABTILES = TABNEWS.map((news)=>{
            return (
                <NewsTile
                    key={news._id}
                    title={news.title}
                    imageNews={news.imageNews}
                    textNews={news.textNews}
                    autorNews={news.autorNews}
                    dateNews={news.dateNews}
                />
            );
        })

    }

    return (
        <Fragment>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    automaticallyAdjustContentInsets={true}
                >
                    <View style={{paddingLeft: 20, paddingRight: 20, backgroundColor: '#F4FFF9', paddingTop: 20}}>
                        {TABTILES}
                    </View>
                </ScrollView>
            </SafeAreaView>
        </Fragment>
    );
}

export default NewsView;