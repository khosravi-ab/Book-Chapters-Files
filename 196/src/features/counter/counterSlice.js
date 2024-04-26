import { createSlice } from "@reduxjs/toolkit";
export const counterSlice = createSlice({
    name: "counter",
    initialState: {
        value: 0,
    },
    reducers: {
        increment: (state) => { state.value += 1; },
        decrement: (state) => { state.value -= 1; },
        incrementByAmount: (state, action) => { state.value += action.payload; },
    },
});
//state.counter
//Slice reducer
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
//{type: "counter/increment"}
export default counterSlice.reducer;
export const selectCount = (state) => state.counter.value;