import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const initialState = {
 user :{
    name :"Kishan",
    role :"Frontend Developer",
    email :"kishan@example.com"
 }
};

const reportSlice = createSlice({
  name: "report",
  initialState,
  reducers: {
    updateUser(state) {
        state.user.name = "Rahul";
        state.user.role = "Frontend Developer";
        state.user.email = "rahul@example.com";
    },
     resetUser(state) {
        state.user.name = "Kishan";
        state.user.role = "Frontend Developer";
        state.user.email = "kishan@example.com";
    }
  },
});

export const { updateUser, resetUser } = reportSlice.actions;

export default reportSlice.reducer;