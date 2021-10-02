import {createSlice} from '@reduxjs/toolkit';

const productSlice = createSlice({
    name:"product",
    initialState:{
        products:[],
        isFetching:false,
        error:false,
    },
    reducers:{
        //GET ALL
        getProductStart:(state) =>{
            state.isFetching=true
            state.error =false
        },
        getProductSuccess:(state,action)=>{
            state.isFetching=true
            state.products = action.payload;
        },
        getProductFailure:(state) =>{
            state.isFetching=false;
            state.error = true
        },
        //Delete 
        deleteProductStart:(state) =>{
            state.isFetching=true
            state.error =false
        },
        deleteProductSuccess:(state,action)=>{
            state.isFetching=true
            state.products.splice(
                state.products.findIndex((item) =>item._id === action.payload.id),1
            )
        },
        deleteProductFailure:(state) =>{
            state.isFetching=false;
            state.error = true
        },
        //update
        updateProductStart:(state) =>{
            state.isFetching=true
            state.error =false
        },
        updateProductSuccess:(state,action)=>{
            state.isFetching=true
            state.products[state.products.findIndex((item) =>item._id === action.payload.id)] = 
            action.payload.product
        },
        updateProductFailure:(state) =>{
            state.isFetching=false;
            state.error = true
        },
        //Add
        addProductStart:(state) =>{
            state.isFetching=true
            state.error =false
        },
        addProductSuccess:(state,action)=>{
            state.isFetching=true
            state.products.push(action.payload);
        },
        addProductFailure:(state) =>{
            state.isFetching=false;
            state.error = true
        }
    }
});

export const {
    getProductStart,getProductSuccess,getProductFailure,
    deleteProductFailure,deleteProductStart,deleteProductSuccess,
    updateProductStart,updateProductSuccess,updateProductFailure,
    addProductStart,addProductSuccess,addProductFailure
} = productSlice.actions;
export default productSlice.reducer;