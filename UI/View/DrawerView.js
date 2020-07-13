import React from 'react';
import {
    View,
    StyleSheet
} from "react-native";
import {
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer
} from 'react-native-paper';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { color } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function DrawerContent(props){
    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row', marginTop: 15}}>
                            <Avatar.Image
                                source={{
                                    uri: "https://s1.qwant.com/thumbr/0x0/b/a/c2dd2bec69def6abf497b9b2add3d89e2c74d5d722a1be1c16b325635a8ead/_Ninja-2-256.png?u=https%3A%2F%2Fcdn3.iconfinder.com%2Fdata%2Ficons%2Favatars-15%2F64%2F_Ninja-2-256.png&q=0&b=1&p=0&a=1"
                                }}
                                size={75}
                            />
                            <View style={{marginLeft:15, flexDirection: 'column'}}>
                                <Title style={styles.title}>User Name</Title>
                                <Caption style={styles.caption}>@Pseudo</Caption>
                            </View>
                        </View>
                        {/* A voir ce truc pas sur c'est utile */}
                        <View style={styles.row}>
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
                        </View>

                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            icon={({color, size}) => (
                                <Icon 
                                    name="home-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Home"
                            onPress={() => {props.navigation.navigate('TilesShop')}}
                        />
                        <DrawerItem
                            icon={({color, size}) => (
                                <Icon 
                                    name="account-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Profil"
                            onPress={() => {props.navigation.navigate('Profil')}}
                        />
                        <DrawerItem
                            icon={({color, size}) => (
                                <Icon 
                                    name="certificate"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Certification"
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
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
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
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
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
      paddingHorizontal: 16,
    },
  });

export default DrawerContent;