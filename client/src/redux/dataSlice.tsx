import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface UserData {
  id: string;
  name: string;
  description: string;
  date: string;
  location: string;
}

interface UsersData {
  users: UserData[];
}

const initialState: UsersData = {
  users: [],
};

const dataSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    addUserData: (state, action: PayloadAction<UserData>) => {
      state.users.push(action.payload);
    },
    editUserData: (state, action: PayloadAction<UserData>) => {
      const index = state.users.findIndex(
        (user) => (user.id = action.payload.id)
      );
      if (index !== -1) {
        state.users[index] = action.payload;
      }
    },
  },
});


export const {addUserData,editUserData}=dataSlice.actions;

export default dataSlice.reducer;
