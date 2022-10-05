
import React, { useState, useContext, useEffect } from "react"

import axios from "axios"
import { useSelector, useDispatch } from 'react-redux'
export default () => {

 const [ran2, setranking2] = useState([]);
 const [ran, setranking] = useState([]);
 const token = useSelector((state) => state.token.token);
 const api = function () {
  axios.get("http://172.30.1.31:5000/mypage/ranking",
   {
    headers: {
     'X-AUTH-TOKEN': token,

    }
   }
  ).then((response) => {
   if (response) {

    var data = response.data;
    setranking2(data);

    console.log('랭킹바뀐거')


    //dispatch(changeAction.setallergy_1(vale.kr))
    //setUser(response);
   } else {
    alert("failed to ");
   }
  }).catch((err) => {
   console.log(err.message);
   console.log(err)
   console.log('랭킹 오류chnage ');
  });

  console.log(change, time, ee)
  // iscomple = false;




 }
 const normal = function () {
  axios.get("http://172.30.1.31:5000/mypage/ranking",
   {
    headers: {
     'X-AUTH-TOKEN': token,

    }
   }
  ).then((response) => {
   if (response) {
    console.log('여기는')
    var data = response.data
    console.log(data)
    setranking(data.ranking);
    setranking2(data.user);

   } else {
    alert("failed to ");
   }
  }).catch((err) => {
   console.log(err.message);
   console.log(err)
   console.log('랭킹 오류 ');
  });
 }


 useEffect(() => {
  normal();
 }, [])


 return [normal, ran, ran2]
}


