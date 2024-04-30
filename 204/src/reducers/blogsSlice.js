import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  {
    id: nanoid(),

    title: "اولین پست",
    content: "محتوای اولین پست ما ☺️",
  },
  {
    id: nanoid(),

    title: "دومین پست",
    content: "محتوای دومین پست ما    🤗",
  },
];

const blogsSlice = createSlice({
  name: "blogs",
  initialState: initialState,
  reducers: {
    blogAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content) {
        //Complex logic
        return {
          payload: {
            id: nanoid(),
            title,
            content,
          },
        };
      },
    },
  },
});
export const { blogAdded } = blogsSlice.actions;
export default blogsSlice.reducer;
