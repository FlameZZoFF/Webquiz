import { createSlice,PayloadAction } from "@reduxjs/toolkit";

type Test = {
    countResult:number,
}


const initialState : Test = {
    countResult:0,
}

const testSlice = createSlice({
    name:"Test",
    initialState,
    reducers:{
        AddSmth(state,action:PayloadAction<number>){
         state.countResult = state.countResult + action.payload 
        },
        ClearScore(state,action:PayloadAction<number>){
            state.countResult = action.payload
        }
    }
})

export const {AddSmth,ClearScore} = testSlice.actions

export default testSlice.reducer