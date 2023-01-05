import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/auth/authSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
