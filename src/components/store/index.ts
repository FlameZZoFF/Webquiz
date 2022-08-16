import { configureStore } from "@reduxjs/toolkit";
import resultQlengthSlice from "./slices/resultQlengthSlice";
import resultSlice from "./slices/resultSlice";


 const store = configureStore({
    reducer:{
      result:resultSlice,
      length:resultQlengthSlice
    },
})

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch 

