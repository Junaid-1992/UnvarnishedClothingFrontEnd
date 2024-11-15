import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseurl } from "../../baseUrl";
import { toast } from "react-toastify";
 

// Define your async thunk actions
export const addComment = createAsyncThunk(
  "addcomment",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await fetch(`${baseurl}/addcomment`, {
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



export const getallsingleproductcomments = createAsyncThunk(
    "getallsingleproductcomments",
    async (args, { rejectWithValue }) => {
      const response = await fetch(
        `${baseurl}/getallsingleproductcomments/${args}`
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
export const addcommentSlice = createSlice({
  name: "addcomment",
  initialState: {
    comments:[],
    comment:null,  
     
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
      .addCase(addComment.pending, (state) => {
        state.loading = true;
      })
      .addCase(addComment.fulfilled, (state, action) => {
        state.loading = false;
        state.comment = action.payload.message;
        toast.success(action.payload.message)
        
      })
      .addCase(addComment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
      })





      .addCase(getallsingleproductcomments.pending, (state) => {
        state.loading = true;
      })
      .addCase(getallsingleproductcomments.fulfilled, (state, action) => {
        state.loading = false;
        state.comments = action.payload.allComments;
        
      })
      .addCase(getallsingleproductcomments.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
      })




     
  },
});

// Export actions and reducers
export const { logout } = addcommentSlice.actions;
export default addcommentSlice.reducer;
