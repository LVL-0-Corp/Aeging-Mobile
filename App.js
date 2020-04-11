/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeView from './UI/View/HomeView';
import TilesShopView from './UI/View/TilesShopView';
import ShopView from './UI/View/ShopView';


const NavigationApp = createStackNavigator({
  Home: HomeView,
  TilesShop: TilesShopView,
  Shop: ShopView,
  },{
    initialRouteName: 'Home',
  }
);

const App: () => React$Node = () => {
  return (<NavigationApp/>);
};

/*
const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeView} />
      <Stack.Screen name="TilesShop" component={TilesShopView} />
      <Stack.Screen name="Shop" component={ShopView} />
    </Stack.Navigator>
  );
}

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
export default App();*/

export default createAppContainer(NavigationApp);