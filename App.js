import { createAppContainer, createSwitchNavigator } from "react-navigation";
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Componn from "./signup/Componn";
import { useFonts } from 'expo-font';
import AppLoading from "expo-app-loading";
import Edit from "./component/Edit";
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from "react-navigation-stack";
import first from "./signup/first";
import second from "./signup/second";
import fifth from "./signup/fifth";
import main from "./component/main";
import Barcode from "./component/barCode";
//import Barcode from "./redux/Barcode";
import final from "./signup/fian";
import ingredient from "./signup/ingredient";
import nickname from "./signup/nickname";
import { Provider } from "react-redux";
import store from "./redux/store";
import Barcode_main from "./component/Barcode_main";
import Mypage_main from './Mypage/Mypage_main';
//import Mypage_main from "./Mypage/Mypage_main";
const navigator =
  createSwitchNavigator({
    //Mypage_main: Mypage_main,
    Edit: Edit,
    signnup: createStackNavigator({
      Edit: Edit,
      first: first,
      nickname: nickname,
      second: second,
      fifth: fifth,
      ingredient: ingredient,



    }),
    botton: createBottomTabNavigator({


      mainn: createStackNavigator({
        main: main,
        Barcode_main: Barcode_main

      })
      ,

      Mypage_main: Mypage_main


    })



  })



const App = createAppContainer(navigator);

export default () => {

  const [fontsLoading] =
    useFonts({
      'Aullia': require('./assets/fonts/Aullia.otf'),
      'Nam-Bold': require('./assets/fonts/NanumMyeongjo-Bold.ttf'),
      'Nam-ExtraBold': require('./assets/fonts/NanumMyeongjo-ExtraBold.ttf'),
    })
  if (!fontsLoading) {
    return <AppLoading></AppLoading>
  }


  return (
    <Provider store={store}>
      <App></App>
    </Provider>
  )

}