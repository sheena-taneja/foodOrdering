import { configureStore,getDefaultMiddleware } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore = configureStore({
    reducer:{
        cart: cartReducer
    },
    middleware: getDefaultMiddleware({
        serializableCheck: false
      }),
});

export default appStore;