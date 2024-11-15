import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseurl } from "../../baseUrl";
import { toast } from "react-toastify";
 

// Define your async thunk actions
// export const addReview = createAsyncThunk(
//   "addreview",
//   async (credentials, { rejectWithValue }) => {
//     try {
//       const response = await fetch(`${baseurl}/addreview`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(credentials),
//       });

      
//       const data = await response.json();

//       // localStorage.setItem("user",JSON.stringify(data.message));

//       // localStorage.setItem("user_data",JSON.stringify(data.storeData));
      
//       //   console.log(data," REDUX ")


//       return data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );
export const addReview = createAsyncThunk(
  "addreview",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await fetch(`${baseurl}/addreview`, {
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



export const getreviews = createAsyncThunk(
    "getreviews",
    async (args, { rejectWithValue }) => {
      const response = await fetch(
        `${baseurl}/getreviews`
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



  export const getsinglereview = createAsyncThunk(
    "getsinglereview",
    async (args, { rejectWithValue }) => {
      const response = await fetch(
        `${baseurl}/getsinglereview/${args}`
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


  export const getbrandreview = createAsyncThunk(
    "getbrandreview",
    async (args, { rejectWithValue }) => {
      const response = await fetch(
        `${baseurl}/getbrandreview`
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


  export const getAllBrands = createAsyncThunk(
    "getallbrands",
    async (args, { rejectWithValue }) => {
      const response = await fetch(
        `${baseurl}/getallbrands`
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



  export const getSingleBrandReviews = createAsyncThunk(
    "getsinglebrandreviews",
    async (args, { rejectWithValue }) => {
      const response = await fetch(
        `${baseurl}/getsinglebrandreviews/${args}`
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






  export const paginatedReviews = createAsyncThunk(
    "paginatedreviews",
    async (args, { rejectWithValue }) => {
      const response = await fetch(
        `${baseurl}/paginatedreviews?page=${args}&limit=20`
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




  export const getuserReviews = createAsyncThunk(
    "getuserreviews",
    async (args, { rejectWithValue }) => {
      const response = await fetch(
        `${baseurl}/getuserreviews/${args}`
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





  export const getAllReviews = createAsyncThunk(
    "getallreviews",
    async (args, { rejectWithValue }) => {
      const response = await fetch(
        `${baseurl}/allreviews`
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



  export const searchresults = createAsyncThunk(
    "searchresults",
    async (credentials, { rejectWithValue }) => {
      try {
        const response = await fetch(`${baseurl}/searchresults`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(credentials),
        });
  
        
        const data = await response.json();
   
  
  
        return data;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );


 

  export const updatereview = createAsyncThunk(
    "updatereview",
    async (credentials, { rejectWithValue }) => {
      try {
        const response = await fetch(`${baseurl}/update-review`, {
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
  
  


  export const deleteReview = createAsyncThunk(
    "deletereview",
    async (credentials, { rejectWithValue }) => {

        console.log(credentials,"REDUX")


      try {
        const response = await fetch(`${baseurl}/delete-review/${credentials}`, {
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



  export const Tagsresults = createAsyncThunk(
    "tagsresults",
    async (credentials, { rejectWithValue }) => {
      try {
        const response = await fetch(`${baseurl}/searchtags`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(credentials),
        });
  
        
        const data = await response.json();
   
  
  
        return data;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );




// Define your slice
export const addreviewSlice = createSlice({
  name: "addreview",
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
    reviews:[],
    singleReview:null,
    getbrandreview:null,
    getAllBrands:[],
    getSingleBrandReviews:[],


    paginatedReviews:[],
    currentPage: 1,
    totalPages: 1,
    
    userReviews:[],

    allReviews:[],

    searchResults:[],
    
    deleteReviewMessage:null,

    tagsResult:[]


   
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      localStorage.removeItem("user");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addReview.pending, (state) => {
        state.loading = true;
      })
      .addCase(addReview.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;

        toast.success(action.payload.message)
        
        console.log("review response redux success", action.payload.message)
      })
      .addCase(addReview.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;

        console.log("review response redux error", )
        toast.error(action.payload.error)
      })


      .addCase(getreviews.pending, (state) => {
        state.loading = true;
      })
      .addCase(getreviews.fulfilled, (state, action) => {
        state.loading = false;
        state.reviews = action.payload.Reviews.reviews;
      })
      .addCase(getreviews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })




      .addCase(getsinglereview.pending, (state) => {
        state.loading = true;
      })
      .addCase(getsinglereview.fulfilled, (state, action) => {
        state.loading = false;
        state.singleReview = action.payload.getSingleReview;
      })
      .addCase(getsinglereview.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })


      .addCase(getbrandreview.pending, (state) => {
        state.loading = true;
      })
      .addCase(getbrandreview.fulfilled, (state, action) => {
        state.loading = false;
        state.getbrandreview = action.payload.getSingleReview;
      })
      .addCase(getbrandreview.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })





      .addCase(getAllBrands.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllBrands.fulfilled, (state, action) => {
        state.loading = false;
        state.getAllBrands = action.payload.allBrands;
      })
      .addCase(getAllBrands.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })






      
      .addCase(getSingleBrandReviews.pending, (state) => {
        state.loading = true;
      })
      .addCase(getSingleBrandReviews.fulfilled, (state, action) => {
        state.loading = false;
        state.getSingleBrandReviews = action.payload.getAllSingleBrandReviews;
      })
      .addCase(getSingleBrandReviews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })





      .addCase(paginatedReviews.pending, (state) => {
        state.loading = true;
      })
      .addCase(paginatedReviews.fulfilled, (state, action) => {
        state.paginatedReviews = action.payload.Reviews.reviews;
        state.currentPage = action.payload.Reviews.currentPage;
        state.totalPages = action.payload.Reviews.totalPages;
        state.loading = false;
      })
      .addCase(paginatedReviews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })






      
      .addCase(getuserReviews.pending, (state) => {
        state.loading = true;
      })
      .addCase(getuserReviews.fulfilled, (state, action) => {
        state.userReviews = action.payload.allReviews;
       
        state.loading = false;
      })
      .addCase(getuserReviews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })




      .addCase(getAllReviews.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllReviews.fulfilled, (state, action) => {
        state.allReviews = action.payload.Reviews;
       
        state.loading = false;
      })
      .addCase(getAllReviews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })




      
      .addCase(searchresults.pending, (state) => {
        state.loading = true;
      })
      .addCase(searchresults.fulfilled, (state, action) => {
        state.searchResults = action.payload.Results;
       
        state.loading = false;
      })
      .addCase(searchresults.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })



           
      .addCase(updatereview.pending, (state) => {
        state.loading = true;
      })
      .addCase(updatereview.fulfilled, (state, action) => {
        state = action.payload;
       
        state.loading = false;
      })
      .addCase(updatereview.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })


      




      .addCase(deleteReview.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteReview.fulfilled, (state, action) => {
        state.deleteReviewMessage = action.payload.message;
       
        state.loading = false;
        toast.success(action.payload.message)

      })
      .addCase(deleteReview.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
        toast.error(action.payload.error)
      })




      
      .addCase(Tagsresults.pending, (state) => {
        state.loading = true;
      })
      .addCase(Tagsresults.fulfilled, (state, action) => {
        state.tagsResult = action.payload.TagResults;
       
        state.loading = false;
       

      })
      .addCase(Tagsresults.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
        
      })




     
  },
});

// Export actions and reducers
export const { logout } = addreviewSlice.actions;
export default addreviewSlice.reducer;
