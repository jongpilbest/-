import { createAppContainer, createSwitchNavigator } from "react-navigation";
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Componn from "./signup/Componn";
import { useFonts } from 'expo-font';
import good_list from "./Mypage/good_list";
import AppLoading from "expo-app-loading";
import Edit from "./component/Edit";
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from "react-navigation-stack";
import first from "./signup/first";
import second from "./signup/second";
import search_item_first from "./search_item/search_item_first";
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
import Search_item_seconde from "./search_item/Search_item_seconde";
//import Mypage_main from "./Mypage/Mypage_main";
const navigator =
  createSwitchNavigator({
    //Mypage_main: Mypage_main,
    //Search_item_seconde: Search_item_seconde,
    Edit: Edit,
    search: createStackNavigator({
      search_item_first: search_item_first,
      Search_item_seconde: Search_item_seconde


    }),



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
        //search_item_first: search_item_first,
        Barcode_main: Barcode_main

      })
      ,

      Mypage_main: createStackNavigator({

        Mypage_main: Mypage_main,
        good_list: good_list,

      })



    })



  })



const App = createAppContainer(navigator);

export default () => {

  const [fontsLoading] =
    useFonts({
      'Aullia': require('./assets/fonts/Aullia.otf'),
      'Nam-Regular': require('./assets/fonts/NanumMyeongjo-Bold.ttf'),
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