import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseurl } from "../../baseUrl";
import { toast } from "react-toastify";
 

// Define your async thunk actions
export const addWishes = createAsyncThunk(
  "addwishes",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await fetch(`${baseurl}/addwishes`, {
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



export const getuserWishes = createAsyncThunk(
  "getuserwishes",
  async (args, { rejectWithValue }) => {
    const response = await fetch(
      `${baseurl}/getuserwishes/${args}`
    );

    try {
      const result = await response.json();
      console.log(result);
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);


export const getbrandWishes = createAsyncThunk(
  "getbrandwishes",
  async (args, { rejectWithValue }) => {
    const response = await fetch(
      `${baseurl}/getbrandwishes/${args}`
    );

    try {
      const result = await response.json();
      console.log(result);
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);



export const deleteWish = createAsyncThunk(
  "deletewish",
  async (id, { rejectWithValue }) => {
    const response = await fetch(
     `${baseurl}/deletewish/${id}`,
      { method: "DELETE" }
    );

    try {
      const result = await response.json();
      console.log(result);
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);



export const getallwishes = createAsyncThunk(
  "getallwishes",
  async (args, { rejectWithValue }) => {
    const response = await fetch(
      `${baseurl}/allwishes`
    );

    try {
      const result = await response.json();
      console.log(result);
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
 




// Define your slice
export const addwishesSlice = createSlice({
  name: "addwishes",
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
     
    loading: false,
    error: null,
    userWishes:[],

    delete_Wish:null,

    allWishes:[],

    brandWishes:[]
   
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      localStorage.removeItem("user");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addWishes.pending, (state) => {
        state.loading = true;
      })
      .addCase(addWishes.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        
      })
      .addCase(addWishes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })




      .addCase(getuserWishes.pending, (state) => {
        state.loading = true;
      })
      .addCase(getuserWishes.fulfilled, (state, action) => {
        state.loading = false;
        state.userWishes = action.payload.allWishes;
        
      })
      .addCase(getuserWishes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })



      .addCase(deleteWish.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteWish.fulfilled, (state, action) => {
        state.loading = false;
        state.delete_Wish = action.payload.message;

        toast.success(action.payload.message );
        
      })
      .addCase(deleteWish.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })






      .addCase(getallwishes.pending, (state) => {
        state.loading = true;
      })
      .addCase(getallwishes.fulfilled, (state, action) => {
        state.loading = false;
        state.allWishes = action.payload.AllWishes;

         
        
      })
      .addCase(getallwishes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })




      
      .addCase(getbrandWishes.pending, (state) => {
        state.loading = true;
      })
      .addCase(getbrandWishes.fulfilled, (state, action) => {
        state.loading = false;
        state.brandWishes = action.payload.BrandsWishes;

         
        
      })
      .addCase(getbrandWishes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })




     
  },
});

// Export actions and reducers
export const { logout } = addwishesSlice.actions;
export default addwishesSlice.reducer;
