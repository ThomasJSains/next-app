import { User } from "@/components/usersList/UsersList";
import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

type UserState = {
  user: User[];
};

const initialState: UserState = {
  user: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<User[]>) => {
      state.user = action.payload;
    },
  },
});
