

import React, { useState, useContext, useEffect, useRef } from "react"
import { useSelector, useDispatch } from 'react-redux'


import { authAction } from "../redux/auth";
//import { Context } from "../contextv/DetailContext";



export default () => {
 var [obj_cha, obj_set] = useState();


 //var mos = (Context._currentValue.state).slice(0, 17);
 //var ingredient = (Context._currentValue.state).slice(17, 26);
 //var mos_original = (Context._currentValue.state)
 var final_objec = {

 }
 var ob = {
  allergy: {

  }
 }
 var ob_grien = {
  ingredient: {

  }
 }
 const chna = function () {

  var arr_ingre = ['밀가루', '우유', '메밀', '콩', '고등어', '게', '새우', '돼지 고기',
   '복숭아', '토마토', '땅콩', '닭', '쇠고기', '오징어', '조개']


  var arry_list = useSelector((state) => state.auth.array_list)

  var last = arry_list.map(elv => {

   arr_ingre.filter(el => {

    return el == elv
   })

  })

  console.log('미수야')
  console.log(last)


  chna = 0;

  //console.log(ob, ob_grien, mos_original)
  console.log('마지막')

  obj_set(19);
  console.log('MICHEJ')
  //return final_objec
  return 10;

 }


 return (
  [chna, obj_cha]
 )



}
