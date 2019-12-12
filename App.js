/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import ShopTile from './UI/Components/ShopTile';

import {getShops} from './API/shopLink';

import { 
  Header
 } from 'react-native-elements';

const App: () => React$Node = () => {

  const TABSHOPS = getShops();
  const TABTILES = TABSHOPS.map((shop)=>{
    return (<ShopTile shopName={shop.shopName} shopShortDescription={shop.shopShortDescription} shopImageUrl={shop.shopImageUrl}/>)
  });

  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Header
          leftComponent={{ icon: 'menu', color: '#fff', onPress: () => alert('Menu burger') }}
          centerComponent={{ text: 'Aeging Mobile', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff', onPress: () => alert('Home ou back') }}
        />
        <ScrollView 
          showsVerticalScrollIndicator={false}
          automaticallyAdjustContentInsets={true}
          >
          <View style={{
            flex: 1,
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
          }}>
            {TABTILES}
          </View>
          <Text>eoijdzoindzoin</Text>
        </ScrollView>
      </SafeAreaView>
    </Fragment>
  );
};

export default App;
