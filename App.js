

import { AntDesign } from '@expo/vector-icons';
import { createAppContainer, createSwitchNavigator } from "react-navigation";
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Componn from "./signup/Componn";
import { useFonts } from 'expo-font';
import Change_State from "./Mypage/Change_State.js/Change_state";
import good_list from "./Mypage/good_list";
import AppLoading from "expo-app-loading";
import Enroll_page from "./Enroll_page/Enroll";
import Edit from "./component/Edit";
import point from "./Mypage/point/point";
//import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createBottomTabNavigator } from 'react-navigation-tabs';
//import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from "react-navigation-stack";
import Gisa from './Gisa.js/Gisa';
import first from "./signup/first";
import second from "./signup/second";
import Ranking from './Ranking/Ranking';
import Danger from "./Mypage/Danger";
import search_item_first from "./search_item/search_item_first";
import fifth from "./signup/fifth";
import like_list from "./Mypage/like_list/like_list";
import main from "./component/main";
import Barcode from "./component/Barcode";
import Qna from "./Mypage/Qna/Qna";
//import Barcode from "./redux/Barcode";
import final from "./signup/fian";
import ingredient from "./signup/ingredient";
import nickname from "./signup/nickname";
import { Provider } from "react-redux";
import store from "./redux/store";
import Barcode_main from "./component/Barcode_main";
import Mypage_main from './Mypage/Mypage_main';
import Change_ingre from './Mypage/Change_State.js/Change_ingre';
import Search_item_seconde from "./search_item/Search_item_seconde";
//import Mypage_main from "./Mypage/Mypage_main";
const navigator =
  createSwitchNavigator({
    //Mypage_main: Mypage_main,
    //Danger: Danger,

    ///Qna: Qna,
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
      Empty: {

        screen: Ranking,
        navigationOptions: {
          tabBarLabel: '랭킹',
          tabBarIcon: ({ tintColor }) => (

            <AntDesign name="Trophy" size={25} style={{ color: tintColor }} />


          ),
          activeColor: '#404040',
          inactiveColor: '#404040',
          barStyle: { backgroundColor: '#DDEEF2' },
        }

      },

      mainn: createStackNavigator({
        main: main,
        Barcode_main: Barcode_main,
        search_item_first: search_item_first,
        Search_item_seconde: Search_item_seconde,
        Gisa: Gisa

      },
        {
          navigationOptions: {
            tabBarLabel: '메인',
            tabBarIcon: ({ tintColor }) => (

              <AntDesign name="home" size={25} style={{ color: tintColor }} />


            ),
            activeColor: '#404040',
            inactiveColor: '#404040',
            barStyle: { backgroundColor: '#DDEEF2' },
          }
        })
      ,
      Enroll_page: createStackNavigator({
        Enroll_page: Enroll_page,
        Barcode: Barcode
      }, {
        navigationOptions: {
          tabBarLabel: '등록',
          tabBarIcon: ({ tintColor }) => (

            <AntDesign name="upload" size={25} style={{ color: tintColor }} />


          ),
          activeColor: '#404040',
          inactiveColor: '#404040',
          barStyle: { backgroundColor: '#DDEEF2' },
        }
      }),

      Mypage_main: createStackNavigator({

        Mypage_main: Mypage_main,
        good_list: good_list,
        like_list: like_list,
        point: point,
        Danger: Danger,
        Change_State: Change_State,
        Change_ingre: Change_ingre,
        Qna: Qna


      }, {
        navigationOptions: {
          tabBarLabel: '설정',
          tabBarIcon: ({ tintColor }) => (

            <AntDesign name="setting" size={25} style={{ color: tintColor }} />


          ),
          activeColor: '#404040',
          inactiveColor: '#404040',
          barStyle: { backgroundColor: '#DDEEF2' },
        },

      }, {

        shifting: true,
      })



    }, {

      tabBarOptions: {
        activeTintColor: 'black',
        inactiveTintColor: 'black',
        style: {
          backgroundColor: '#DDEEF2',
        },
      },
    },)


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