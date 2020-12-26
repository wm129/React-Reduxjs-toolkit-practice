import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    name: "Wakamori",
    age: 24,
    skills: ['js', 'react', 'firebase']
    imageUrl: '',
};

const slice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        changeName: (state, action) => {
            //新しいステート
            return {
                ...state,
                name: action.payload,
            }
        },
        berthday: (state) => {
            return {
                ...state,
                age: state.age + 1,
            }
        },
        changeImageUrl: (state, action) => {
            return {
                ...state,
                imageUrl: action.payload,
            };
        },
    },
});
const { changeImageUrl } = slice.actions;

export const fetchImage = (imageUrl) => {
    return async (dispatch) => {
        try {
            const response = await fetch('https://dog.ceo/api/breeds/image/random')
            const data = await response.json();
            dispatch(changeImageUrl(data.message));
        } catch (error) {
            console.log(error);
        }
    };
};



export const { changeName, berthday } = slice.actions
export default slice.reducer;