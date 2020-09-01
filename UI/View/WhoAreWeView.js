import React, { Fragment } from 'react';
import {
    Text,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    StatusBar,
    Dimensions,
    Image,
    Linking
} from "react-native";
import { View } from 'native-base';
import Icon from 'react-native-vector-icons/Fontisto';

function WhoAreWeView({ navigation, route }) {
    return (
        <Fragment>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    automaticallyAdjustContentInsets={true}
                >
                    <View style= {{ backgroundColor:'#F4FFF9' }}>
                        <View style={{ marginLeft:15, marginRight:15 }}>
                            <Image
                                key={0}
                                source={require('../../assets/couleur_sur_vert.png')}
                                style={{ width:365, height:300, resizeMode: 'contain' }}
                            />
                            <View style= {{flex: 1, flexDirection:'row', justifyContent: 'center'}}>
                                <View style={styles.contactIcon}>
                                    <Icon
                                        onPress={() => Linking.openURL('mailto:localgo.france@gmail.com') }
                                        name="email"
                                        color="#FFFFFF"
                                        size={25}
                                    />
                                </View> 
                                <View style={styles.contactIcon}>
                                    <Icon
                                        onPress={
                                            () => {
                                                let phone = '0750332318';
                                                if (Platform.OS === 'android') {
                                                    phone = 'tel:' + phone
                                                } else {
                                                    phone = 'telprompt:' + phone
                                                }
                                                Linking.openURL(phone);
                                            }
                                        }
                                        name="phone"
                                        color="#FFFFFF"
                                        size={25}
                                    />
                                </View>
                                <View style={ styles.contactIconFb}>
                                    <Icon
                                    onPress={
                                        Linking.openURL('https://www.facebook.com/LocalGo.france')
                                    }
                                        name="facebook"
                                        color="#FFFFFF"
                                        size={25}
                                        flex={1}
                                        style={{flex: 1}}
                                    />
                                </View>
                            </View>
                            <Text style={styles.title}>Nous</Text>
                            <Text style={styles.texts}>
                                Nous sommes une équipe de 3 personnes (Un Président, un développeur, un web designer).
                                Jeunes et dynamiques, nous avons travaillé sur ce projet, qui nous tenait à cœur, car nous voulons aussi avoir un impact dans notre économie locale en aidant les producteurs et commerces locaux.
                                Ayant chacun des convictions dans le domaine, nous sommes certains que cette application sera utile autant aux professionnels qu’aux particuliers !
                            </Text>
                            <Text style={styles.title}>Objectifs</Text>
                            <Text style={styles.texts}>
                                Le but de ce projet est de donner accès à des produits locaux au meilleur prix pour les professionnels de la restauration et aux familles qui veulent du « made in France », et tout ça d’un simple clic.
                                Aidons nos paysans à nous fournir des aliments de qualité pour nos jeunes et moins jeunes en limitant les intermédiaires. En améliorant leur rôle dans leur environnement économique et sociale directe, nous leur permettons de travailler d’une manière différente avec un outils simple à porter de main.
                            </Text>
                            <Text style={styles.title}>Enjeux</Text>
                            <Text style={styles.texts}>
                                Dans une démarche éco-responsable, nous n’utilisons que des entreprises françaises. Que se soit pour les produits dérivés ou le système de serveur. 
                                Le principe et de développer l’économie locale par région, l’agroéconomie étant un des piliers économiques de notre grand pays réputé dans le monde entier pour ses produits alimentaire !
                            </Text>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </Fragment>
    );
}

export default WhoAreWeView;

const styles = StyleSheet.create({
    title: {
        color:"#35D19E",
        fontSize: 20,
        fontFamily:'futura-medium-bt',
        marginTop:20,
    },
    texts: {
        color:"#37D2A0",
        marginTop:15,
        marginBottom:10,
    },
    contactIcon: {
        backgroundColor: "#37D2A0", 
        borderRadius: 100, 
        padding: 15,
        alignItems:'center',
        margin: 7,
    },
    contactIconFb: {
        backgroundColor: "#37D2A0", 
        borderRadius: 100, 
        padding: 15,
        alignItems:'center',
        paddingLeft:20,
        paddingRight:20,
        margin: 7,
    }
})