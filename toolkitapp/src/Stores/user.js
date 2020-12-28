import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: 'koga',
  age: 10,
  skills: ['js', 'react', 'firebase'],
  imageUrl: '',
};

const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // state: 現在のstate
    // action: action.payloadの中にaction関数の引数が入る
    changeName: (state, action) => {
      // 新しいstateがreturnされる
      return {
        ...state,
        name: action.payload,
      };
    },
    berthday: (state) => {
      return {
        ...state,
        age: state.age + 1,
      };
    },
    // 書いておく
    changeImageUrl: (state, action) => {
      return {
        ...state,
        imageUrl: action.payload,
      };
    },
  },
});

// 追加
const { changeImageUrl } = slice.actions;

// 追加
export const fetchImage = () => {
  return async (dispatch) => {
    try {
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      const data = await response.json();
      dispatch(changeImageUrl(data.message));
    } catch (error) {
      console.log(error);
    }
  };
};

export const { changeName, berthday } = slice.actions;

export default slice.reducer;
