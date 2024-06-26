import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
    {
        id: nanoid(),
        date: new Date().toISOString(),
        title: "اولین پست",
        content: "محتوای اولین پست ما ☺️",
    },
    {
        id: nanoid(),
        date: new Date().toISOString(),
        title: "دومین پست",
        content: "محتوای دومین پست ما    🤗",
    },
];

const blogsSlice = createSlice({
    name: "blogs",
    initialState: initialState,
    reducers: {},
});

export default blogsSlice.reducer;
