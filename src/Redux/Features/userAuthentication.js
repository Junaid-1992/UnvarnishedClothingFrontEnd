import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseurl } from "../../baseUrl";
 

// Define your async thunk actions
export const signup = createAsyncThunk(
  "auth/signup",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await fetch(`${baseurl}/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      
      const data = await response.json();

      localStorage.setItem("user",JSON.stringify(data.message));

      localStorage.setItem("user_data",JSON.stringify(data.storeData));
      
        console.log(data," REDUX ")


      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);



export const login = createAsyncThunk(
  "auth/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await fetch(`${baseurl}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });
      const data = await response.json();

      localStorage.setItem("user",JSON.stringify(data.userRecord));
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  } 
);





// Define your slice
export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: (() => {
        const user = localStorage.getItem("user");
        try {
          return user ? JSON.parse(user) : null;
        } catch (error) {
          console.error("Error parsing user from localStorage", error);
          return null;
        }
      })(),
      user_data: (() => {
        const user_data  = localStorage.getItem("user_data");
        try {
          return user_data  ? JSON.parse(user_data) : null;
        } catch (error) {
          console.error("Error parsing user from localStorage", error);
          return null;
        }
      })(),
    loading: false,
    error: null,
   
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      localStorage.removeItem("user");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signup.pending, (state) => {
        state.loading = true;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        
      })
      .addCase(signup.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
  },
});

// Export actions and reducers
export const { logout } = authSlice.actions;
export default authSlice.reducer;
