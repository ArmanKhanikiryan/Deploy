import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AddReducer} from "./productReducers";

const getProducts = createAsyncThunk('fetch/products', async (arg, thunkAPI) => {

})

export interface ToDoState {
    imgTitle: string
}
const initialState: ToDoState[] = [
    {
        imgTitle: ''
    }
]

const productSlice = createSlice({
    name: 'PRODUCTS',
    initialState,
    reducers: {
        ADD: AddReducer
    },
    extraReducers: (builder) => {
        builder.addCase(getProducts.fulfilled, (state, action) => {

        }).addCase(getProducts.rejected, (state,action) => {

        })
    }
})
export const {
    ADD
} = productSlice.actions

export default productSlice.reducer;
