import { createSlice,PayloadAction } from "@reduxjs/toolkit";

type Test = {
    QuestsLength:number,
}


const initialState : Test = {
    QuestsLength:0,
}

const questsLengthSlice = createSlice({
    name:"Test",
    initialState,
    reducers:{
        SetLength(state,action:PayloadAction<number>){
            state.QuestsLength = action.payload 
           }
    }
})

export const {SetLength} = questsLengthSlice.actions

export default questsLengthSlice.reducer