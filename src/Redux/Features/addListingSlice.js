import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseurl } from "../../baseUrl";
import { toast } from "react-toastify";

 

// Define your async thunk actions
export const addlisting = createAsyncThunk(
  "addlisting",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await fetch(`${baseurl}/addlisting`, {
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


export const getuserlistings = createAsyncThunk(
  "getuserlistings",
  async (args, { rejectWithValue }) => {
    const response = await fetch(
      `${baseurl}/getuserlistings/${args}`
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



export const getalllistings = createAsyncThunk(
  "getalllistings",
  async (args, { rejectWithValue }) => {
    const response = await fetch(
      `${baseurl}/alllistings`
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


 

export const getbrandlistings = createAsyncThunk(
  "getbrandlistings",
  async (args, { rejectWithValue }) => {
    const response = await fetch(
      `${baseurl}/getbrandlistings/${args}`
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



export const getsinglelistingproduct = createAsyncThunk(
  "getsinglelistingproduct",
  async (args, { rejectWithValue }) => {
    const response = await fetch(
      `${baseurl}/getsinglelistingproduct/${args}`
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


export const deleteListing = createAsyncThunk(
  "deletelisting",
  async (credentials, { rejectWithValue }) => {

      console.log(credentials,"REDUX")


    try {
      const response = await fetch(`${baseurl}/delete-listing/${credentials}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      
      });

      // Check if the response status is not ok (like 400 or 500 status codes)
      if (!response.ok) {
        // Extract the error message from the response body
        const errorData = await response.json();
        return rejectWithValue(errorData || "Something went wrong");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      // Handle network errors or unexpected errors
      return rejectWithValue(error.message || "Network error occurred");
    }
  }
);





export const updatelisting = createAsyncThunk(
  "updatelisting",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await fetch(`${baseurl}/update-listing`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      // Check if the response status is not ok (like 400 or 500 status codes)
      if (!response.ok) {
        // Extract the error message from the response body
        const errorData = await response.json();
        return rejectWithValue(errorData || "Something went wrong");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      // Handle network errors or unexpected errors
      return rejectWithValue(error.message || "Network error occurred");
    }
  }
);








// Define your slice
export const addlistingSlice = createSlice({
  name: "addlisting",
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
    userListings:[],
    AllListings:[],
    BrandListings:[],
    singleListingProduct:null,
    deleteListing:null,

    updateListing:null
   
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      localStorage.removeItem("user");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addlisting.pending, (state) => { 
        state.loading = true;
      })
      .addCase(addlisting.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        
      })
      .addCase(addlisting.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })




      .addCase(getuserlistings.pending, (state) => {
        state.loading = true;
      })
      .addCase(getuserlistings.fulfilled, (state, action) => {
        state.loading = false;
        state.userListings = action.payload.allListings;
        
      })
      .addCase(getuserlistings.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })





      .addCase(getalllistings.pending, (state) => {
        state.loading = true;
      })
      .addCase(getalllistings.fulfilled, (state, action) => {
        state.loading = false;
        state.AllListings = action.payload.AllListings;
        
      })
      .addCase(getalllistings.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })





      .addCase(getbrandlistings.pending, (state) => {
        state.loading = true;
      })
      .addCase(getbrandlistings.fulfilled, (state, action) => {
        state.loading = false;
        state.BrandListings = action.payload.BrandsListings;
        
      })
      .addCase(getbrandlistings.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })






      
      .addCase(getsinglelistingproduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(getsinglelistingproduct.fulfilled, (state, action) => {
        state.loading = false;
        state.singleListingProduct = action.payload.SingleListing;
        
      })
      .addCase(getsinglelistingproduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })



           
      .addCase(deleteListing.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteListing.fulfilled, (state, action) => {
        state.loading = false;
        state.deleteListing = action.payload.message;

        toast.success(action.payload.message)
        
      })
      .addCase(deleteListing.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })






      
           
      .addCase(updatelisting.pending, (state) => {
        state.loading = true;
      })
      .addCase(updatelisting.fulfilled, (state, action) => {
        state.loading = false;
        state.deleteListing = action.payload.message;

        toast.success(action.payload.message)
        
      })
      .addCase(updatelisting.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })




     
  },
});
 

// Export actions and reducers
export const { logout } = addlistingSlice.actions;
export default addlistingSlice.reducer;
