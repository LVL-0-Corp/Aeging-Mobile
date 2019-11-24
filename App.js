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

import { 
  Header
 } from 'react-native-elements';

const App: () => React$Node = () => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Header
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'Aeging Mobile', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
        />
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View style={{flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',}}>
            <View style={{flex: 2,
              height: 400,
              flexDirection: 'column',
              justifyContent: 'space-between',}}>
              <Text>test</Text>
              <Text>test2</Text>
            </View>
            <View style={{flex: 2,
              flexDirection: 'column',
              justifyContent: 'space-between',}}>
              <Text>test</Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </Fragment>
  );
};

export default App;
