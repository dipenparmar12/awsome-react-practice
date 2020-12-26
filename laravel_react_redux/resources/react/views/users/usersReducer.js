import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import API_URL from "../../config/apiConfig";

const userSlice = createSlice({
    name: "users",
    initialState: {
        list: [
            { id: 1, name: "Dipen InitialUser" },
            { id: 2, name: "UserTwo" }
        ],
        user: {}
    },
    reducers: {
        getUsers: (state, { payload }) => {
            state.list = payload.users;
        }
        // getUser: (state, action) => {
        //     state.user = action.payload.user;
        // }
    }
});

export default userSlice.reducer;
export const { getUsers } = userSlice.actions;

export const getUsersAsync = () => async (dispatch, getState) => {
    // console.log('usersReducer.js::currentState()', getState());
    try {
        const res = await axios.get(`${API_URL}/users`);
        dispatch(userSlice.actions.getUsers({ users: res.data }));
    } catch (err) {
        console.log("usersReducer.js::err", err);
    }
};
