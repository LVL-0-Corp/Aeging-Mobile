import React, {Fragment} from 'react';
import { createDrawerNavigator, DrawerContent } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  Text,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Dimensions,
  View,
  Linking
} from "react-native";


import Icon from 'react-native-vector-icons/Feather';

import HomeView from './UI/View/HomeView';
import TilesShopView from './UI/View/TilesShopView';
import DrawerView from './UI/View/DrawerView';
import ShopView from './UI/View/ShopView';
import SignInView from './UI/View/SignInView';
import SignUpView from './UI/View/SignUpView';
import CommandView from './UI/View/CommandView';
import ProfilView from './UI/View/ProfilView';
import NewsView from './UI/View/NewsView';
import WhoAreWeView from './UI/View/WhoAreWeView';
import CertificationView from './UI/View/CetificationView';
import OnBoarding from './UI/View/OnBoarding';
import { getVersion } from 'jest';

const OnBoardingStack = createStackNavigator();
// const HomeStack = createStackNavigator();
const TileStack = createStackNavigator();
// const SignInStack = createStackNavigator();
// const SignUpStack = createStackNavigator();
const ProfilStack = createStackNavigator();
const CertificationStack = createStackNavigator();
const CommandStack = createStackNavigator();
const NewsStack = createStackNavigator();
const WhoAreWeStack = createStackNavigator();
// const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

// function HomeStackScreen({navigation},props) {
//   return(
//     <HomeStack.Navigator initialRouteName="Home">
//       <HomeStack.Screen name="Home" component={HomeView} 
//         options={{
//           title:'Bienvenue',
//           headerTitleAlign: 'center',
//           headerTintColor: '#000',
//           headerLeft: () => (
//             <Icon.Button name="menu" size={25}
//             color="black" backgroundColor="white" onPress={() => navigation.openDrawer()}></Icon.Button>
//           )
//         }}
//       />
//     </HomeStack.Navigator>
//   )
// }

function TileStackScreen({navigation},props) {
  return(
    <TileStack.Navigator initialRouteName="TilesShop">
      <TileStack.Screen 
        name="TilesShop" 
        component={TilesShopView} 
        options={{
          headerStyle:{backgroundColor:'#2CBF91',height: 100},
          headerTitleAlign: 'center',
          title: " ddd",
          headerLeft: () => (
            // <View>
              <Icon.Button 
                name="menu" 
                size={25}
                color="white" 
                backgroundColor="#2CBF91" 
                onPress={() => navigation.openDrawer()}>
              </Icon.Button>
            //   <View style={{ flexDirection:'row'}}>
            //     <Text style={{ marginLeft: 10, paddingLeft: 13, paddingRight: 13, backgroundColor: 'white', color: '#3DD58E', borderRadius: 5, paddingBottom:3, paddingTop:3}}>Filtres</Text>
            //     <Text style={{ marginLeft: 10, paddingLeft: 8, paddingRight: 8, backgroundColor: 'white', color: '#3DD58E', borderRadius: 100, paddingBottom:3, paddingTop:3}}>+</Text>
            //   </View>
            // </View>
          )
        }}
      />
      <TileStack.Screen 
        name="Shop" 
        component={ShopView} 
        options={{ 
          headerTransparent: true, 
          headerTitle: false, 
          headerRight: () => (<Text>lalaal</Text>)
        }}/>
    </TileStack.Navigator>
  )
}

// function SignInStackScreen({navigation},props) {
//   return(
//     <SignInStack.Navigator initialRouteName="SignIn">
//       <SignInStack.Screen name="SignIn" component={SignInView} />
//     </SignInStack.Navigator>
//   )
// }

// function SignUpStackScreen({navigation},props) {
//   return(
//     <SignUpStack.Navigator initialRouteName="SignUp">
//       <SignUpStack.Screen name="SignUp" component={SignUpView} />
//     </SignUpStack.Navigator>
//   )
// }

// function SignUpStackScreen2({navigation},props) {
//   return(
//     <SignUpStack.Navigator initialRouteName="SignUp">
//       <SignUpStack.Screen name="SignUp" component={SignUpView} 
//         options={{
//           headerTitleAlign: 'center',
//           title:'SignUp',
//           headerLeft: () => (
//             <Icon.Button name="menu" size={25}
//             color="black" backgroundColor="white" onPress={() => navigation.openDrawer()}></Icon.Button>
//           )
//         }}
//       />
//     </SignUpStack.Navigator>
//   )
// }

function ProfilStackScreen({navigation},props) {
  return(
    <ProfilStack.Navigator initialRouteName="Profil">
      <ProfilStack.Screen name="Profil" component={ProfilView} 
        options={{
          headerTitleAlign: 'center',
          title:'Profil',
          headerLeft: () => (
            <Icon.Button name="menu" size={25}
            color="black" backgroundColor="white" onPress={() => navigation.openDrawer()}></Icon.Button>
          )
        }}
      />
    </ProfilStack.Navigator>
  )
}

function CertificationStackScreen({navigation},props) {
  return(
    <CertificationStack.Navigator initialRouteName="Certification">
      <CertificationStack.Screen name="Certification" component={CertificationView} 
        options={{
          headerTitleAlign: 'center',
          title:'Certification',
          headerTitleStyle:{color:'#35D19E'},
          headerStyle:{backgroundColor:'#F4FFF9'},
          headerLeft: () => (
            <Icon.Button name="menu" size={25}
            color="#37D2A0" backgroundColor="#F4FFF9" onPress={() => navigation.openDrawer()}></Icon.Button>
          )
        }}
      />
    </CertificationStack.Navigator>
  )
}

function CommandStackScreen({navigation},props) {
  return(
    <CommandStack.Navigator initialRouteName="Command">
      <CommandStack.Screen name="Command" component={CommandView} 
        options={{
          headerTitleAlign: 'center',
          title:'Command',
          headerLeft: () => (
            <Icon.Button name="menu" size={25}
            color="black" backgroundColor="white" onPress={() => navigation.openDrawer()}></Icon.Button>
          )
        }}
      />
    </CommandStack.Navigator>
  )
}

function NewsStackScreen({navigation},props) {
  return(
    <NewsStack.Navigator initialRouteName="News">
      <NewsStack.Screen name="News" component={NewsView} 
        options={{
          headerTitleAlign: 'center',
          headerTransparent:true,
          title:'Actualités',
          headerTitleStyle:{color:'#35D19E', fontFamily:'futura-medium-bt'},
          headerLeft: () => (
            <Icon.Button name="menu" size={25}
            color="#37D2A0" backgroundColor="#F4FFF9" onPress={() => navigation.openDrawer()}></Icon.Button>
          )
        }}
      />
    </NewsStack.Navigator>
  )
}

function WhoAreWeStackScreen({navigation},props) {
  return(
    <WhoAreWeStack.Navigator initialRouteName="WhoAreWe">
      <WhoAreWeStack.Screen name="WhoAreWe" component={WhoAreWeView} 
        options={{
          headerTitleAlign: 'center',
          title:'Qui somme nous ?',
          headerTitleStyle:{color:'#35D19E', fontFamily:'futura-medium-bt'},
          headerStyle:{backgroundColor:'#F4FFF9'},
          headerLeft: () => (
            <Icon.Button name="menu" size={25}
            color="#37D2A0" backgroundColor="#F4FFF9" onPress={() => navigation.openDrawer()}></Icon.Button>
          )
        }}
      />
    </WhoAreWeStack.Navigator>
  )
}

// function GeneralTab() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Tout" component={TileStackScreen} />
//       <Tab.Screen name="Bio" component={TileStackScreen} />
//       <Tab.Screen name="Local" component={TileStackScreen} />
//     </Tab.Navigator>
//   );
// }


// function LoginTab() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Sign in" component={SignInStackScreen} />
//       <Tab.Screen name="Sign up" component={SignUpStackScreen} />
//     </Tab.Navigator>
//   );
// }

function DrawerHomeTab() {
  return (
    <Drawer.Navigator
          drawerContent={props => <DrawerView {...props} />}
          initialRouteName="ACCUEIL"
        >
          <Drawer.Screen name="Profil" component={ProfilStackScreen} />
          <Drawer.Screen name="ACCUEIL" component={TileStackScreen}/>
          <Drawer.Screen name="MES COMMANDES" component={CommandStackScreen}/>
          <Drawer.Screen name="ACTUALITÉS" component={NewsStackScreen}/>
          <Drawer.Screen name="CERTIFICATIONS" component={CertificationStackScreen} />
          <Drawer.Screen name="QUI SOMMES-NOUS ?" component={WhoAreWeStackScreen} />

          {/* <Drawer.Screen name="Login" component={LoginTab} /> */}
    </Drawer.Navigator>
  )
}


export default function App() {
  return (
    <Fragment>
      <NavigationContainer>
        <OnBoardingStack.Navigator >
          <OnBoardingStack.Screen 
            name="Local go" 
            component={OnBoarding} 
            options={{ 
              headerTitle: () => (
                <Image key={1} source={require('./assets/couleur_sur_vert.png')} style={{ width: 200, resizeMode:'contain'}}></Image>
              ),
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: "#39D3A2", 
              }, 
            }}
          />
          <OnBoardingStack.Screen name="SignIn" component={SignInView}
            options={{ 
              headerTitle: () => (
                <Image key={1} source={require('./assets/couleur_sur_vert.png')} style={{ width: 200, resizeMode:'contain', alignContent: 'center'}}></Image>
              ),
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: "#39D3A2", 
              }, 
            }}
          />
          <OnBoardingStack.Screen name="SignUp" component={SignUpView}
            options={{ 
              headerTitle: () => (
                <Image key={1} source={require('./assets/couleur_sur_vert.png')} style={{ width: 200, resizeMode:'contain', alignContent: 'center'}}></Image>
              ),
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: "#39D3A2", 
              }, 
            }}
          />
          <OnBoardingStack.Screen name="DrawerHome" component={DrawerHomeTab} options={{ headerShown:false }}/>
        </OnBoardingStack.Navigator>
      </NavigationContainer>
    </Fragment>
  );
}



// name="TilesShop" 
// component={TilesShopView} 
// options={{
//   headerStyle:{backgroundColor:'#2CBF91',height: 100},
//   headerTitleAlign: 'center',
//   headerTitle: () => (
//     <Image key={1} source={require('./assets/couleur_sur_vert.png')} style={{ width: 200, resizeMode:'contain'}}></Image>
//   ),
//   headerLeft: () => (
//     <View>
//         <Icon.Button 
//           name="menu" 
//           size={25}
//           color="white" 
//           backgroundColor="#2CBF91" 
//           onPress={() => navigation.openDrawer()}>
//         </Icon.Button>
      
//       <View style={{ flexDirection:'row'}}>
//         <Text style={{ marginLeft: 10, paddingLeft: 13, paddingRight: 13, backgroundColor: 'white', color: '#3DD58E', borderRadius: 5, paddingBottom:3, paddingTop:3}}>Filtres</Text>
//         <Text style={{ marginLeft: 10, paddingLeft: 8, paddingRight: 8, backgroundColor: 'white', color: '#3DD58E', borderRadius: 100, paddingBottom:3, paddingTop:3}}>+</Text>
//       </View>
//     </View>
//   )
// }}