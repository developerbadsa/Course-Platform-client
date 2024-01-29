import { createSlice } from "@reduxjs/toolkit";

const counterState = createSlice({


      name: 'counterSliceState',
      initialState: {
            value: 0
      },
      reducers:{
            increment: (state)=>{
                  state.value = state.value+1
            }
       
      }
})
export const  {increment} = counterState.actions
export default counterState.reducer