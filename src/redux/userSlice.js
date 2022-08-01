import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        name: "Khanh Lam",
        age: 22,
        about: "I'm Iro man",
        avaUrl:
            "https://haycafe.vn/wp-content/uploads/2022/02/Hinh-avatar-de-thuong-cho-Facebook.jpg",
        themeColor: "#ff9051",
    },
    reducers: {

        update: (state, action) => {
            state.name = action.payload.name;
            state.age = action.payload.age;
            state.about = action.payload.about;
            state.avaUrl = action.payload.avaUrl;
            state.themeColor = action.payload.themeColor;
        }
    }
});

export const { update } = userSlice.actions;
export default userSlice.reducer;