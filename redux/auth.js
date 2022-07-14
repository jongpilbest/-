import { createSlice } from "@reduxjs/toolkit";

const initialstate = {
 id: '',
 password: '',
 nickname: '',
 array_list: [],
 allergy: [

  {
   name: 'wheat',
   check: 0,
   kr: '밀가루'
  },

  {
   name: 'milk',
   check: 0,
   kr: '우유'

  }
  , {
   name: 'buckwheat',
   check: 0,
   kr: '메밀'

  },
  {
   name: 'peanut',
   check: 0,
   kr: '땅콩'

  },
  {
   name: 'soybean',
   check: 0,
   kr: '콩'

  }
  , {
   name: 'mackerel',
   check: 0,
   kr: '고등어'


  }
  , {
   name: 'crab',
   check: 0,
   kr: '게'


  }, {
   name: 'shrimp',
   check: 0,
   kr: '새우'

  }, {
   name: 'pork',
   check: 0,
   kr: '돼지 고기'

  }, {
   name: 'peach',
   check: 0,
   kr: '복숭아'

  }, {
   name: 'tomato',
   check: 0,
   kr: '토마토'

  }, {
   name: 'walnut',
   check: 0,
   kr: '땅콩'
  }, {
   name: 'chicken',
   check: 0,
   kr: '닭'

  }, {
   name: 'beef',
   check: 0,
   kr: '쇠고기'

  }, {
   name: 'squid',
   check: 0,
   kr: '오징어'

  }, {
   name: 'shellfish',
   check: 0,
   kr: '조개'


  },
  {
   name: 'egg',
   check: 0,
   kr: '달걀'


  }],
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
 ,

}

const authslice = createSlice({

 name: 'auth',
 initialState: initialstate,
 reducers: {
  setid: (state, action) => {
   state.id = action.payload
  },
  setpassword: (state, action) => {
   state.password = action.payload
  },
  setallergy_0: (state, action) => {



  },
  setallergy_1: (state, action) => {


   state.array_list.push(action.payload)




   console.log(' 나니-19');
  },
  setingredient_0: (state, action) => {

   var filter_name = state.ingredient(el => {
    return el.name == action.payload
   })
   filter_name.check = 0;

  },
  setingredient_1: (state, action) => {

   var filter_name = state.ingredient(el => {
    return el.name == action.payload
   })
   filter_name.check = 1;

  },

 }

})


export const authAction = authslice.actions;

export default authslice.reducer;
