
import axios from "axios";
import React, {
  useState, useContext, useEffect
} from "react"
import { View, TextInput, TouchableOpacity, Button, StyleSheet, Text } from "react-native"
import { Context } from "../contextv/DetailContext";
var new_A = [];
var index_array = [];


const Search_ITEM = function ({ onfinsh }) {
  // const { set_state } = useContext(Context);
  //const { create_arr } = useContext(Context);
  // const { delete_all } = useContext(Context)
  // const { creat_index } = useContext(Context);
  var state_state = (Context._currentValue.state);
  var array_lst = ['콘칩', '콘사', '변민호칩', '콘사사', '칩시', '칩구', '민호짱'];
  var list_name = [];
  var list_name_sansa = [];
  /*
  useEffect(() => {
    //여기에 axios 개발
    {
      axios.get("http://172.30.1.13:5000/product/detail/name"



      ).then((response) => {
        if (response) {

          list_name = response.data


        }
      }).catch((err) => {
        console.log(err.message);
        console.log('이름리스트 받을때 에러남요 ');

      });
      axios.get("http://172.30.1.13:5000/product/search"

      ).then((response) => {
        if (response) {

          list_name_sansa = response.data

        }
      }).catch((err) => {
        console.log(err.message);
        console.log('상세 리스트  받을때 에러남요 ');

      });


      //정보다 보내줘야됨... 





    },[])
*/

  const [com, setcom] = useState("");
  const [count, setcount] = useState(1)
  var ar_length = array_lst.length;
  const change_new = function () {

    if (index_array.length > 0) {
      console.log('SOSUKE')
      //console.log(index_array)
      creat_index(index_array)

    }


  }

  const goto_text = function (el) {
    setcom(el)

    //console.log(com.length);
    if (com.length == 0) {

      // delete_all();
      console.log('showshow')
      console.log('시발 새키')
      console.log(state_state)



      new_A.length = 0;
      array_lst.forEach(element => {
        var ch = element.split('');
        // console.log(ch);
        new_A.push(ch)
        //console.log(new_A)
      });

      console.log(new_A)
      create_arr(new_A);

      console.log(state_state)


    }

    else if (el.length >= 1) {
      console.log('여기가 입니다만')
      console.log(el)
      //creat_index(check);
      var cc = [];


      console.log('정미수', state_state)
      state_state.list.forEach((EV, index) => {
        console.log("정미수 최고요")
        console.log(el)
        var chec = el.length;
        var good = el.toString().split('')
        var misu = (good[chec - 1])


        if (EV.includes(misu)) {
          console.log(EV, index)
          cc.push(EV);

        }


      })
      console.log(cc, cc.length);
      if (cc.length > 0) {
        console.log('$$');
        delete_all();
        //state_state = 0;
        //console.log(cc);
        create_arr(cc);
        console.log(state_state)

      }


    }



    //console.log(com)
    /*
    if (com.trim().length > 1) {
     setcount(22);
     console.log(count)
    }
   
    //setcount(1)
    setcom(ele)
    arr_show();
  */
  }


  const arr_show = function () {


    if (count == 0) {
      array_lst.forEach(element => {
        var ch = element.split('');
        //console.log(ch);
        new_A.push(ch)
      });

    }


    else if (count > 0) {



    }
    //  console.log(count);
    // console.log(new_A)

  }

  const namce = function () {
    console.log('HI')
    console.log(state_state.token);


    axios.post("http://15.165.76.99:5000/product/search", {

      "keyword": com


    },
      {
        headers: {
          'X-AUTH-TOKEN': ` ${state_state.token}`

        }
      }
    ).then((response) => {
      if (response) {
        console.log(total_response)

      }
    }).catch((err) => {
      console.log(err.message);

    });


    // set_state(com);
    onfinsh(com);
  }
  return (
    <View>
      <TextInput

        autoCapitalize='none'
        style={style.border}
        value={com}
        autoCorrect={false}


        onChangeText={(ele) => {
          // console.log('지금 치고 잇는거?')
          // console.log(ele)

          goto_text(ele)


        }}
        onSubmitEditing={() => namce()}>
      </TextInput>
    </View>
  )
}


const style = StyleSheet.create({
  text: {
    width: 200,
    height: 40,
    borderColor: "black"
  },

  border: {
    width: '90%',
    height: 40,
    //borderColor: 'black',
    borderWidth: 5,
    marginTop: 26,
    borderRadius: 5,
    margin: 10,
    borderColor: '#D2D2D2',
    borderWidth: 3,

  }

})

export default Search_ITEM;