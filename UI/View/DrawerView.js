import React from 'react';
import {
    View,
    StyleSheet,
    Dimensions,
    Image
} from "react-native";
import {
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer
} from 'react-native-paper';
import { DrawerContentScrollView, DrawerItem, useIsDrawerOpen } from '@react-navigation/drawer';
import { color } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function DrawerContent(props){
    return(
        
        <View style={styles.backgroundDrawer}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <Image
                            key={0}
                            source={require('../../assets/couleur_sur_vert.png')}
                            style={{ width:140, height:30, resizeMode: 'cover' }}/>
                        <View style={{flexDirection:'column', marginTop: 15}}>
                            <Avatar.Image
                                source={{
                                    uri: "https://s1.qwant.com/thumbr/0x0/b/a/c2dd2bec69def6abf497b9b2add3d89e2c74d5d722a1be1c16b325635a8ead/_Ninja-2-256.png?u=https%3A%2F%2Fcdn3.iconfinder.com%2Fdata%2Ficons%2Favatars-15%2F64%2F_Ninja-2-256.png&q=0&b=1&p=0&a=1"
                                }}
                                size={75}
                            />
                            <View style={{ flexDirection: 'column'}}>
                                <Title style={styles.title}>User Name</Title>
                                <Caption style={styles.caption}>Hautmont</Caption>
                            </View>
                        </View>
                        {/* A voir ce truc pas sur c'est utile */}
                        {/* <View style={styles.row}>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>
                                    2
                                </Paragraph>
                                <Caption style={styles.caption}>
                                    Magasins
                                </Caption>
                            </View>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>
                                    10
                                </Paragraph>
                                <Caption style={styles.caption}>
                                    Favoris
                                </Caption>
                            </View>
                        </View> */}

                    </View>

                    <Drawer.Section style={styles.drawerSection, {alignItems:'center'}}>
                        <DrawerItem
                            label="ACCUEIL"
                            labelStyle={{color:'white', textAlign:'center', fontFamily:'futura-medium-bt'}}
                            onPress={() => {props.navigation.navigate('ACCUEIL')}}
                        />
                        <DrawerItem
                            label="MES COMMANDES"
                            labelStyle={{color:'white', fontFamily:'futura-medium-bt'}}
                            onPress={() => {props.navigation.navigate('MES COMMANDES')}}
                        />
                        <DrawerItem
                            label="ACTUALITÉS"
                            labelStyle={{color:'white', fontFamily:'futura-medium-bt'}}
                            onPress={() => {props.navigation.navigate('ACTUALITÉS')}}
                        />
                        <DrawerItem
                            label="CERTIFICATIONS"
                            labelStyle={{color:'white', fontFamily:'futura-medium-bt'}}
                            onPress={() => {props.navigation.navigate('CERTIFICATIONS')}}
                        />
                        <DrawerItem
                            label="QUI SOMMES-NOUS ?"
                            labelStyle={{color:'white', fontFamily:'futura-medium-bt'}}
                            onPress={() => {props.navigation.navigate('QUI SOMMES-NOUS ?')}}
                        />
                        <DrawerItem
                            label="ESPACE COMMERÇANTS"
                            labelStyle={{color:'#35D19E', backgroundColor:'white', paddingLeft:20, paddingRight:20, paddingBottom:10, paddingTop:10, borderRadius:7}}
                            onPress={() => {props.navigation.navigate('Certification')}}
                        />
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={StyleSheet.bottomDrawerSection}>
                <DrawerItem
                    icon={(color, size) => (
                        <Icon
                            name="exit-to-app"
                            color={color}
                            size={size}
                        />
                    )}
                    label="Sign out"
                    onPress={() => {}}
                />
            </Drawer.Section>
        </View>
    );
}

const styles = StyleSheet.create({
    backgroundDrawer: {
        flex: 1,
        backgroundColor: '#39D3A2',
        alignItems:'center',
    },
    drawerContent: {
        flex: 1,
        alignItems: 'center',
        flexDirection:'column',
        flexWrap:'nowrap',
    },
    userInfoSection: {
        flex:1,
        alignItems:'center',
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
    },
    section: {
      flexDirection: 'row',
    },
    paragraph: {
      fontWeight: 'bold',
    },
    drawerSection: {
        marginTop: 15,
        flex:1,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
    },
  });

export default DrawerContent;