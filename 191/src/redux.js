//Actions
// const action = { type: "counter/increment" };

//Actions
const action01 = { type: "counter/increment", payload: 1 };

//Action Creators
const increment = (number) => {
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
            value: (copyState.value += 1),
        };
    }

    return state;
};
