import axios from "axios"
import React, { useState, useRef, useEffect, useContext } from 'react';
import {
  Text, View, TouchableOpacity, Alert,
  Button,
  Dimensions,
  StyleSheet,
  Vibration,

} from 'react-native';
import { Context } from '../contextv/DetailContext'
import { barcodeAction } from "../redux/auth";
import { Ionicons } from '@expo/vector-icons';

import { AntDesign } from '@expo/vector-icons';

import { useSelector, useDispatch } from 'react-redux'


import { BarCodeScanner } from 'expo-barcode-scanner';

const Barcode_main = ({ navigation }) => {
  const token = useSelector((state) => state.token.token)


  var ingredient_kr = [{
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

  var allergy_kr = [

    {
      name: 'wheat',
      check: 0,
      kr: '밀가루',
      image: ['https://cdn-icons-png.flaticon.com/512/992/992804.png', 'https://cdn-icons-png.flaticon.com/512/992/992730.png']

    },

    {
      name: 'milk',
      check: 0,
      kr: '우유',
      image: ['https://cdn-icons-png.flaticon.com/512/372/372922.png', 'https://cdn-icons-png.flaticon.com/512/373/373024.png']

    }
    , {
      name: 'buckwheat',
      check: 0,
      kr: '메밀',
      image: ['https://cdn-icons-png.flaticon.com/512/6534/6534050.png', 'https://cdn-icons-png.flaticon.com/512/6534/6534024.png']

    },

    {
      name: 'soybean',
      check: 0,
      kr: '대두',
      image: ['https://cdn-icons-png.flaticon.com/512/6931/6931713.png', 'https://cdn-icons.flaticon.com/png/512/1680/premium/1680537.png?token=exp=1661068499~hmac=96e2e6a2c3078e041bee1164098dff48']

    }
    , {
      name: 'mackerel',
      check: 0,
      kr: '고등어',
      image: ['https://cdn-icons-png.flaticon.com/512/6202/6202150.png', 'https://cdn-icons-png.flaticon.com/512/6202/6202242.png']


    }
    , {
      name: 'crab',
      check: 0,
      kr: '게',
      image: ['https://cdn-icons-png.flaticon.com/512/7260/7260090.png', 'https://cdn-icons.flaticon.com/png/512/2931/premium/2931496.png?token=exp=1661068588~hmac=4fc2b9e1dcbd833a8915c074208dff2e']


    }, {
      name: 'shrimp',
      check: 0,
      kr: '새우',
      image: ['https://cdn-icons.flaticon.com/png/512/2320/premium/2320381.png?token=exp=1661068625~hmac=2e1371c34fee900886540751b8baf096', 'https://cdn-icons.flaticon.com/png/512/1680/premium/1680526.png?token=exp=1661097958~hmac=b0f1634182264bf07a0dcbfb925680a2']

    }, {
      name: 'pork',
      check: 0,
      kr: '돼지 고기',
      image: ['https://cdn-icons-png.flaticon.com/512/7293/7293206.png', 'https://cdn-icons-png.flaticon.com/512/7880/7880013.png']

    }, {
      name: 'peach',
      check: 0,
      kr: '복숭아',
      image: ['https://cdn-icons.flaticon.com/png/512/2521/premium/2521253.png?token=exp=1661068749~hmac=536d98045dd415aba4d69faf0ff80eff', 'https://cdn-icons.flaticon.com/png/512/2521/premium/2521249.png?token=exp=1661068749~hmac=cdc00c584914c9a5279da1cba13f6bd5']

    }, {
      name: 'tomato',
      check: 0,
      kr: '토마토',
      image: ['https://cdn-icons-png.flaticon.com/512/135/135471.png']

    }, {
      name: 'peanut',
      check: 0,
      kr: '땅콩',
      image: ['https://cdn-icons-png.flaticon.com/512/811/811663.png', 'https://cdn-icons-png.flaticon.com/512/7010/7010784.png']
    }, {
      name: 'chicken',
      check: 0,
      kr: '닭',
      image: ['https://cdn-icons.flaticon.com/png/512/1886/premium/1886687.png?token=exp=1661068906~hmac=f6790b68baca8c6b1c622626395a64db',
        'https://cdn-icons.flaticon.com/png/512/1886/premium/1886713.png?token=exp=1661068909~hmac=a675f05fed47a03e2a8dfe5c07a139b6']

    }, {
      name: 'beef',
      check: 0,
      kr: '쇠고기',
      image: ['https://cdn-icons-png.flaticon.com/512/5746/5746230.png',
        'https://cdn-icons-png.flaticon.com/512/5745/5745943.png']

    }, {
      name: 'squid',
      check: 0,
      kr: '오징어',
      image: ['https://cdn-icons.flaticon.com/png/512/4753/premium/4753690.png?token=exp=1661069022~hmac=d0b802b97be01e11cd3a52267f2980cc',
        'https://cdn-icons.flaticon.com/png/512/4754/premium/4754018.png?token=exp=1661069025~hmac=ce267dd44942fb9bd15ee8437c8511a5']

    }, {
      name: 'shellfish',
      check: 0,
      kr: '조개',
      image: ['https://cdn-icons-png.flaticon.com/512/2060/2060195.png',
        'https://cdn-icons-png.flaticon.com/512/2060/2060144.png']


    },
    {
      name: 'egg',
      check: 0,
      kr: '달걀',
      image: ['https://cdn-icons-png.flaticon.com/512/1951/1951378.png',
        'https://cdn-icons-png.flaticon.com/512/1951/1951379.png']


    }]
  // var state_state = (Context._currentValue.state.Barcode);
  //var state_ = (Context._currentValue.state.Barcode);
  //const [scaned, setScaned] = useState(true);
  // const [hasPermission, setHasPermission] = useState(null);
  // const [type, setType] = useState(CameraType.back);
  const [hasPermission, setHasPermission] = useState(null);
  // const { create_Barcode, delete_Barcode } = useContext(Context);
  const [scanned, setScanned] = useState(false);

  const dispatch = useDispatch();

  //const myIcon = (<Icon name="rocket" size={30} color="black" />)
  useEffect(() => {

    //delete_Barcode();

    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = async ({ type, data }) => {
    setScanned(true);
    //navigation.navigate('Enroll_page', { data: data })
    //create_Barcode(data, () => navigation.pop())
    console.log('?', data)

    //바코드 백에서 정보 제공
    await axios.post(`http://172.30.1.31:5000/product/custom`, {
      "barcode": data
      //현재 바코드가 데이터 베이스에 존재하는가 

    },
      {
        headers: {
          'X-AUTH-TOKEN': token //토큰으로 사용자 정보 확인

        }
      }
    ).then((response) => {
      if (response) {
        console.log('확인해보자 ');
        console.log(response.data)
        var mapv = [];
        var ee = response.data.allergy;

        allergy_kr.forEach(ev => {

          for (const pro in ee) {

            if (ev.name == pro) {
              var ob = {
                name: ev.kr,
                image: ev.image,
                check: ee[pro]

              }
              console.log('확인해보기')
              console.log(ob)
              mapv.push(ob);

            }


          }



        })

        var key_f = (Object.keys(response.data.ingredient));
        var key_ff = (Object.values(response.data.ingredient));
        var elv = response.data.name
        var id_check = response.data.Id
        // console.log(`ididididididididid-first`);   console.log(id_check)
        var em = [];
        var em_kr = [];
        ingredient_kr.forEach(ev => {
          key_f.forEach(el => {
            if (ev.name == el) {

              em_kr.push(ev.kr);
            }

          })

        })



        var ssec = [];


        for (var i = 0; i < key_f.length; i++) {
          em.push(`${em_kr[i]}\n\n ${key_ff[i]}`)
        }
        em.forEach(el => {
          ssec.push(el);
        })
        //  mapv.push(response.data.ingredient);
        console.log(mapv, ssec)
        // setcheck(response.data);
        //navigation.navigate('search_item_first', { data: response.data })
        //setUser(response);

        navigation.navigate('Search_item_seconde', { name: elv, ssec: ssec, mapv: mapv, id: id_check })



      } else {
        alert("failed to ");
      }
    }).catch((err) => {
      console.log(err.message);
      console.log(err)
      console.log('?');
    });


    /*
    axios.post("http://13.209.83.188:5000/product/detail/barcode", {
     barcode: data
    })
     .then((response) => {
      if (response) {
       console.log('?? first');
       console.log(response.data)
       setcheck(response.data);
       //setUser(response);
      } else {
       alert("failed to ");
      }
     }).catch((err) => {
      console.log(err.message);
      console.log(err)
      console.log('?');
     });
  */
    alert(`바코드 번호는 ${data} 입니다. `);

    //dispatch(barcodeAction.setbarcode(data));



  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>

      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      <View style={{
        backgroundColor: 'white',
        width: 60,
        height: 60,
        borderRadius: '50%',
        marginTop: 20,

      }}>


        <TouchableOpacity onPress={() => {

          console.log('엥')
          navigation.pop()
        }}>
          <Ionicons style={{
            margin: 5
          }} name="chevron-back-circle-outline" size={50} color="black" />


        </TouchableOpacity>
      </View>
      {scanned &&
        <TouchableOpacity onPress={() => {
          setScanned(false)

        }} >

          <View style={{
            backgroundColor: 'white',
            width: '22%',
            height: '15%',
            borderRadius: 90,
            position: 'relative',
            bottom: 0,
            marginLeft: '75%',
            marginTop: '70%'
          }}>
            <AntDesign style={{
              margin: 10
            }} name="reload1" size={30} color="black" />
          </View>

        </TouchableOpacity>


      }
    </View>
  );

}


Barcode_main.navigationOptions = () => {
  return {
    header: () => false,
  };
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  scanner: { flex: 1 },
  btn: {
    position: 'absolute',
    top: 20
  }
});

export default Barcode_main;