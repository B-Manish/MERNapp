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
  users: [
    {
      id: "id",
      name: "Manish",
      description: "desc",
      date: "19/3/25",
      location: "Chennai",
    },
  ],
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    addUserData: (state, action: PayloadAction<UserData>) => {
      state.users.push(action.payload);
    },
    editUserData: (state, action: PayloadAction<UserData>) => {
      const index = state.users.findIndex(
        (user) => user.id == action.payload.id
      );
      if (index !== -1) {
        state.users[index] = action.payload;
      }
    },
  },
});

export const { addUserData, editUserData } = dataSlice.actions;

export default dataSlice.reducer;
