import { configureStore } from "@reduxjs/toolkit";
//Actions
// const action = { type: "counter/increment" };

//Actions
const action01 = { type: "counter/increment", payload: 1 };

//Action Creators
export const increment = (number) => {
    return {
        type: "counter/increment",
        payload: number,
    };
};

//Reducers
const reducer =(state, action) =>{
    return newState;
}


const initialState = { value: 0 };

const counterReducer = (state = initialState, action) => {
    if (action.type === "counter/increment") {
        const copyState = { ...state };
        return {
            value: (copyState.value += action.payload),
        };
    }

    return state;
};


//Store
export const store = configureStore({ reducer: counterReducer });
// {value: 0}

//Dispatch
// store.dispatch({ type: 'counter/increment' })
// {value: 1}

//Dispatch
// store.dispatch(increment()) 
// {value: 2}

//Selectors
const selectCounterValue = (state) => state.value;

export const currentValue = selectCounterValue(store.getState());

console.log(currentValue);
