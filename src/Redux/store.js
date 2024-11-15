import { configureStore } from "@reduxjs/toolkit";
import userDetailReducer from "./Features/UserDetailSlice";
import authReducer from "./Features/userAuthentication"
import addreviewReducer from "./Features/addreviewSlice"
import addlistingReducer from "./Features/addListingSlice"
import addwishesReducer from "./Features/addWishesSlice"
import addcommentReducer from "./Features/addCommentSlice"
import addorderReducer from "./Features/addOrderSlice"
export const store = configureStore({
  reducer: {  
    userDetail: userDetailReducer,
    auth:authReducer,
    addreview:addreviewReducer,
    addlisting:addlistingReducer,
    addwishes:addwishesReducer ,
    addcomment:addcommentReducer,
    addorder:addorderReducer 
  
  },
});
