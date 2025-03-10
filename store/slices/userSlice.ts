import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  id: string | null;
  name: string;
  email: string;
}

const initialState: UserState = {
  id: null,
  name: "",
  email: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
    logout: (state) => {
      state.id = null;
      state.name = "";
      state.email = "";
    },
  },
});

export const { setUser, logout } = userSlice.actions;
export default userSlice.reducer;
