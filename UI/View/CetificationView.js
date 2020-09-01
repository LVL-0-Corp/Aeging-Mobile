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
import CertificationTile from "../Component/CertificationTile";
import { getCertif } from "../../API/certifLink";


function CertificationView({ navigation, route }) {
    const { height } = Dimensions.get("window");
    const [currentCertifList, setCurrentCertifList] = useState([])

    const updateCertif = async () => {
        const wait = await getCertif();
        setCurrentCertifList(wait);  
    }

    useEffect(() => {
        updateCertif();
    }, [])

    const TABCERTIF = currentCertifList;
    let TABTILES = null;
    if(TABCERTIF.length > 0){
        TABTILES = TABCERTIF.map((certif)=>{
            return (
                <CertificationTile
                    key={certif._id}
                    titleCertif={certif.titleCertif}
                    imageCertif={certif.imageCertif}
                    describeCertif={certif.describeCertif}
                    urlCertif={certif.urlCertif}
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
                    <View style={{paddingLeft: 20, paddingRight: 20, backgroundColor: '#F4FFF9', paddingTop: 20, paddingBottom: 40}}>
                        {TABTILES}
                    </View>
                </ScrollView>
            </SafeAreaView>
        </Fragment>
    );
}

export default CertificationView;