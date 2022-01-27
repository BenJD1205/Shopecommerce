import { loginStart, loginSuccess, loginFailure } from "./userRedux";
import { 
    getProductStart,getProductSuccess,getProductFailure,
    deleteProductStart,deleteProductSuccess,deleteProductFailure,
    updateProductFailure,updateProductStart,updateProductSuccess,
    addProductFailure,addProductStart, addProductSuccess,
} from "./productRedux";
import {publicRequest, userRequest} from '../requestMethod';
//login
export const login = async (dispatch,user) =>{
    dispatch(loginStart());
    try{
        const res = await publicRequest.post("/auth/login", user)
        dispatch(loginSuccess(res.data))
    }catch(err){
        dispatch(loginFailure())
    }
}
//getProducts
export const getProducts = async (dispatch) =>{
    dispatch(getProductStart());
    try{
        const res = await publicRequest.get("/products")
        dispatch(getProductSuccess(res.data))
    }catch(err){
        dispatch(getProductFailure())
    }
}
//deleteProduct
export const deleteProduct = async (id,dispatch) =>{
    dispatch(deleteProductStart());
    try{
        // await userRequest.delete("/products/"+id)
        dispatch(deleteProductSuccess(id))
    }catch(err){
        dispatch(deleteProductFailure())
    }
}
//updateProduct
export const updateProduct = async (id, product, dispatch) => {
    dispatch(updateProductStart());
    try {
      // update
      dispatch(updateProductSuccess({ id, product }));
    } catch (err) {
      dispatch(updateProductFailure());
    }
  };

//addProduct
export const addProduct = async (product,dispatch) =>{
    dispatch(addProductStart());
    try{
        const res = await userRequest.post("/products",product);
        dispatch(addProductSuccess(res.data))
    }catch(err){
        dispatch(addProductFailure())
    }
}