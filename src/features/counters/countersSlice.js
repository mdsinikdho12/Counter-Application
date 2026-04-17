import { createSlice } from "@reduxjs/toolkit";
import initialCounters from "../../data/initialCounters";
const counterSlice = createSlice({
    name: "counters",
    initialState : initialCounters,
    reducers:{
        increment (sate,action) =>{
            
        },
        decrement (sate,action) =>{},
    }
})