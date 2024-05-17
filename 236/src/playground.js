const store = configureStore({
    reducer: {},
});

const exampleThunkFunction = (dispatch, getState) => {
    const stateBefore = getState();
    console.log(`Counter before: ${stateBefore.counter}`);

    dispatch(increment());

    const stateAfter = getState();
    console.log(`Counter after: ${stateAfter.counter}`);
};

store.dispatch(exampleThunkFunction);

//Dispatch Plain Action
dispatch(increment());

//Thunk Action Creator
const logAndAdd = (amount) => {
    return async (dispatch, getState) => {
        const stateBefore = getState();
        console.log(`Counter before: ${stateBefore.counter}`);

        dispatch(incrementByAmount(amount));

        const stateAfter = getState();
        console.log(`Counter after: ${stateAfter.counter}`);
    };
};

//CreateAsyncThunk
export const fetchBlogs = createAsynThunk("blogs/fetchBlogs", async () => {
    const response = await client.get("url");
    return response.data;
});
//returns start/success/failure action

dispatch(fetchBlogs()); //returns 'blogs/fetchBlogs/pending' action
//if promise is resolved return 'blogs/fetchBlogs/fulfilled' action
//if promise is rejected return 'blogs/fetchBlogs/rejected' action


//Normalized State
{
    users: {
        ids: ["user1", "user2", "user3"],
        entities: {
            "user1": {id: "user1", firstName: "abbas"},
            "user2": {id: "user2", firstName: "ali"},
            "user3": {id: "user3", firstName: "mohamad"},
        }
    }
}

const userId = "user2";
const userObject = state.users.entities[userId]

//createEntityAdapter({options})
{ids: [], entities: {} }
