import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialState = [
    {
        id: "1",
        fullname: "عباس خسروی",
    },
    {
        id: "2",
        fullname: "علی احمدی",
    },
    {
        id: "3",
        fullname: "محمد رحیمی",
    },
];
const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
});
export default usersSlice.reducer;
