import {createSlice} from '@reduxjs/toolkit'

const basketSlice = createSlice({
    name:'basket',
    initialState: {
        basket: []
    },
    reducers: {

        saveElement:(state,action) => {
            const payload = action.payload;
            state.basket = state.basket.concat(payload);
        },
        getList:(state)=>{
            return state;
        },
        deleteElement:(state,action) => {
            console.log(action.payload);
            const {id} = action.payload;
            
            state.basket = state.basket.filter(elem => elem.id !== id);
        },

        payForBasket:(state,action) => {
            //fetch

        }
    }
})

export const { saveElement,getList, deleteElement } = basketSlice.actions;
export const basketSelector = (state) => state.basket;
export default basketSlice.reducer;