
import React, { useState, useContext, useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { View, ScrollView, TextInput, TouchableOpacity, Button, StyleSheet, Text } from "react-native"
import Change_ingre_Com from "./Change_ingre_Com";
import SeachBar from "../../signup/SearchBar";
import Ms from "../../signup/Ms";
import axios from "axios";


var chekc = -1;
var chek = 0;
var text_input = 0;
import { changeAction } from "../../redux/change";

import { Ionicons } from '@expo/vector-icons';


const Change_ingre = function ({ navigation }) {
    const dispatch = useDispatch();
    const token = useSelector((state) => state.token.token);




    const check_array_list = useSelector((state) => state.change.array_list_2);

    const [MS_good, misu] = Ms();
    // const [chna, mos_original] = fian();

    const [checkhey, setcheck] = useState(false);
    //console.log(misu);
    //  console.log('에러십활')
    //const final = useSelector((state) => state.change.array_list)
    // const data_change = navigation.getParam('data');
    const mos = useSelector((state) => state.change.ingredient)
    const original = useSelector((state) => state.change.ingre_original);
    const check = function () {

        if (checkhey == true) {
            console.log('1 맞냐고')

            return false;

        }
        else
            return true;



    }


    console.log('오리지널', original);

    //console.log(mos)

    const misugo = function (el) {
        dispatch(changeAction.setallergy_1(el))


    }
    const check_most = function (el) {

        if (el == "") {
            chekc = -1;
            chek = mos;

            text_input = 0;

            return;

        }

        //console.log(mos)
        chek = mos.filter(evlv => {
            return evlv.kr == el
        })
        //console.log(`chek ${chek}`)


        if (chek.length > 0) {
            chekc = 11;
            text_input = 33;
        }
        else if (chek.length == 0) {
            chekc = 0
            console.log('ERROR CHECK')
            text_input = 1;
        }



        return;




    }
    const check_good = function () {


        if (chekc == 11) {
            // console.log('11인데요')
            chekc = 10;
            return true;
        }
        else
            // console.log('11아닌데요 ')
            return false;

    }



    // console.log(Context._currentValue.state);
    // console.log(Context._currentValue.state.length);
    // var mos = Context._currentValue.state.AddComponent

    /*
    // console.log(mos, chekc)
    
    const check_most = function (el) {
    
        if (el == "") {
            chekc = -1;
            chek = mos;
    
            text_input = 0;
    
            return;
    
        }
    
        console.log(mos)
        chek = mos.filter(evlv => {
            return evlv.kr == el
        })
        //console.log(`chek ${chek}`)
    
    
        if (chek.length > 0) {
            chekc = 11;
            text_input = 33;
        }
        else if (chek.length == 0) {
            chekc = 0
            console.log('ERROR CHECK')
            text_input = 1;
        }
    
    
    
        return;
    
    
    
    
    }
    
    
    
    const check_good = function () {
    
    
        if (chekc == 11) {
            // console.log('11인데요')
            chekc = 10;
            return true;
        }
        else
            // console.log('11아닌데요 ')
            return false;
    
    }
    
    
    //const shpw = put_state.slice(0, 5);
    
    
    
   */
    return (

        <View style={{
            backgroundColor: '#DDEEF2',
            height: '100%'
        }}>
            <View style={{
                width: '100%',
                height: 70,
                backgroundColor: 'pink',
                flexDirection: 'row'
            }}>
                <View style={{
                    width: '18%',
                    backgroundColor: '#DDEEF2',

                }}>
                    <TouchableOpacity onPress={() => {

                        console.log('엥')
                        navigation.navigate("Mypage_main");
                    }}>
                        <Ionicons style={{

                            marginLeft: 15,
                            marginTop: 20,
                        }} name="arrow-back-circle" size={50} color="black" />

                    </TouchableOpacity>
                </View>
                <View style={{
                    width: '43%',
                    backgroundColor: '#DDEEF2',
                }}>
                    <Text style={{
                        fontFamily: 'Nam-Bold',
                        fontSize: 15,
                        marginTop: 30,
                        marginLeft: 15
                    }}>
                        비선호 성분 수정
                    </Text>
                </View>
                <View style={{
                    width: '43%',
                    backgroundColor: 'white'
                }}>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('Change_State')
                    }}>


                        <Text style={{
                            fontFamily: 'Nam-Bold',
                            fontSize: 15,
                            marginTop: 30,
                            marginLeft: 15
                        }}>
                            알레르기 성분 수정
                        </Text>
                    </TouchableOpacity>
                </View>

            </View>



            <View style={{
                marginTop: '3%',
                marginLeft: '3%'
            }}>
                <Text style={{
                    marginLeft: 13,
                }}>
                    <Text style={{
                        fontSize: 22,
                        color: '#545252',

                        fontWeight: 'bold',
                        fontFamily: 'Nam-Bold',
                    }}>
                        비선호 성분수정
                    </Text>

                </Text>

            </View>
            <SeachBar onfinsh={(vl) => {
                MS_good()

                check_most(vl);
            }} >

            </SeachBar>
            <View>
                {
                    !check() && <Text style={{
                        fontSize: 12,
                        color: '#FF4444',
                        marginLeft: 140,
                        flexDirection: 'column',
                        fontWeight: 'bold',
                        fontFamily: 'Nam-Bold',
                    }}>
                        아전과 바뀐 상태가 존재하지 않습니다
                    </Text>

                }

            </View>


            {
                text_input == 1 && <Text style={{
                    fontSize: 22,
                    color: '#545252',
                    marginLeft: 20,

                    fontWeight: 'bold'
                }}>
                    검색되는 상품이 없습니다

                </Text>
            }
            <View style={{
                height: '60%'
            }}>


                <ScrollView style={styles.border}>



                    <View style={styles.frined}>



                        {


                            chekc == 11 && check_good() && < Change_ingre_Com vale={chek[0]}></Change_ingre_Com>

                        }
                        {
                            chekc == -1 && mos.map((el, index) => {
                                return < Change_ingre_Com key={index} gogo={(el) => misugo(el)} vale={el}></Change_ingre_Com>
                            })

                        }




                    </View>



                </ScrollView>
            </View>
            < TouchableOpacity onPress={() => {

                var ob = {
                    ingredient: {

                    }
                }

                var final = {
                    ingredient: [{
                        name: 'natrium',
                        check: 0,
                        kr: '나트륨'


                    },
                    {
                        name: "carbohydrates",
                        check: 0,
                        kr: '탄수화물'

                    }, {
                        name: "sugar",
                        check: 0,
                        kr: '당류'

                    },
                    {

                        name: "fat",
                        check: 0,
                        kr: '지방'


                    }
                        , {
                        name: 'trans_fat',
                        check: 0,
                        kr: '트랜스지방'

                    },
                    {
                        name: "saturated_fat",
                        check: 0,
                        kr: '포화지방'
                    },
                    {
                        name: "cholesterol",
                        check: 0,
                        kr: '콜레스테롤'

                    },
                    {
                        name: "protein",
                        check: 0,
                        kr: '단백질'

                    },
                    {
                        name: "calorie",
                        check: 0,
                        kr: '칼로리'

                    }]
                }

                check_array_list.map(ev => {
                    final.ingredient.map(el => {
                        if (ev == el.name) {
                            el.check = 1;
                        }
                    })

                })
                console.log(final.ingredient);
                for (var pro in final.ingredient) {
                    var cc = final.ingredient[pro];
                    var oj_ = Object.values(cc);
                    //console.log(oj_)
                    ob.ingredient[oj_[0]] = oj_[1];


                }



                axios.patch(`http://172.30.1.31:5000/mypage/updateUser`, {
                    "ingredient": ob.ingredient
                },

                    {
                        headers: {
                            'X-AUTH-TOKEN': token

                        }
                    }
                ).then((response) => {
                    if (response) {
                        console.log('성공했습니다')
                        console.log(response.data);
                        if (response.data == true) {
                            dispatch(changeAction.setingre_change_list());//dispatch(changeAction.setarray_list());
                        }
                        else if (response.data == false) {
                            dispatch(changeAction.set_ingre_change_list());
                            setcheck(true)

                        }


                    } else {
                        alert("failed to ");
                    }
                }).catch((err) => {
                    console.log(err.message);
                    console.log(err)
                    console.log('?');
                });

                //navigation.navigate('ingredient');

            }

            }>
                <View style={{
                    backgroundColor: '#ffffff'
                    , width: '45%',
                    height: '25%',
                    borderRadius: 10,
                    marginTop: 5,
                    alignSelf: 'center',
                    alignContent: 'center'




                }}>
                    <Text style={{
                        fontSize: 16,
                        alignItems: 'center',
                        alignContent: 'center',
                        textAlign: 'center',
                        color: '#545252',
                        marginTop: 10,
                        fontWeight: 'bold',
                        fontFamily: 'Nam-Bold',
                    }}>
                        수정 완료
                    </Text>
                </View>

            </TouchableOpacity>





        </View >


    )

}
Change_ingre.navigationOptions = () => {
    return {
        header: () => false,
    };
};

const styles = StyleSheet.create({


    border: {
        width: '90%',
        height: 800,

        borderWidth: 3,
        margin: 10,
        borderColor: 'transparent'


    },
    frined: {

        flexDirection: 'row',

        height: 700,
        // justifyContent: 'space-between',
        backgroundColor: '#DDEEF2',
        // justifyContent: 'flex-start',
        flexWrap: 'wrap'
    }




})
export default Change_ingre;