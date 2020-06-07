import React, {Fragment} from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeView from './UI/View/HomeView';
import TilesShopView from './UI/View/TilesShopView';
import ShopView from './UI/View/ShopView';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const BottomTab = createBottomTabNavigator();

function Home(props) {
  console.log("hey",props.route,"hey");
  return(
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeView} />
      <Stack.Screen name="TilesShop" component={TilesShopView} />
      <Stack.Screen name="Shop" component={ShopView} />
    </Stack.Navigator>
  )
}
/*
function Tile(props) {
  console.log("hey",props.route,"hey");
  return(
    <Stack.Navigator initialRouteName="TilesShop">
      <Stack.Screen name="Home" component={HomeView} />
      <Stack.Screen name="TilesShop" component={TilesShopView} />
      <Stack.Screen name="Shop" component={ShopView} />
    </Stack.Navigator>
  )
}

function HomeV2() {
  return(
    <BottomTab.Navigator initialRouteName="TilesShop">
      <BottomTab.Screen name="Tout" component={TilesShopView} />
      <BottomTab.Screen name="Shop" component={ShopView} />
    </BottomTab.Navigator>
  )
}
*/
export default function App() {
  return (
    <Fragment>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={Home}/>
          <Stack.Screen name="Profil" component={TilesShopView} />
        </Drawer.Navigator>
      </NavigationContainer>
    </Fragment>
  );
}