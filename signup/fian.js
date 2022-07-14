

import React, { useState, useContext, useEffect, useRef } from "react"

//import { Context } from "../contextv/DetailContext";



export default () => {
 var [obj_cha, obj_set] = useState({});


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
  for (var pro in mos) {
   var cc = (mos[pro]);
   var oj_ = Object.values(cc);
   console.log(oj_)
   ob.allergy[oj_[0]] = oj_[1];


  }
  for (var pro in ingredient) {
   var cvc = (ingredient[pro]);
   var oj_c = Object.values(cvc);
   console.log(oj_c)
   ob_grien.ingredient[oj_c[0]] = oj_c[1];


  }


  //console.log(ob, ob_grien, mos_original)
  console.log('마지막')
  final_objec = {
   "id": Object.values(mos_original[26]).toString(),

   "nickname": Object.values(mos_original[27]).toString(),
   "password": Object.values(mos_original[28]).toString(),
   "ingredient": ob_grien.ingredient,
   "allergy": ob.allergy
  }

  obj_set(final_objec);
  console.log('MICHEJ')
  return final_objec


 }


 return (
  [chna, obj_cha]
 )



}
