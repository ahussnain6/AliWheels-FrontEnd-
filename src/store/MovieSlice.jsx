import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { REACT_APP_URL } from "../../public/Url";
export const STATUS = Object.freeze({
  IDLE: "IDLE",
  ERROR: "ERROR",
  LOADING: "LOADING",
});
const initialState = {
  status: STATUS.IDLE,
  carlist: [],
  category: [],
  detail: [],
  response: [],
  cart: [],
};
const MovieSlice = createSlice({
  name: "movie",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchCar.pending, (state, action) => {
        state.status = STATUS.LOADING;
      })
      .addCase(fetchCar.fulfilled, (state, action) => {
        state.carlist = action.payload;
        state.status = STATUS.IDLE;
      })
      .addCase(fetchCar.rejected, (state, action) => {
        state.status = STATUS.ERROR;
      })
      .addCase(gCategory.pending, (state, action) => {
        state.status = STATUS.LOADING;
      })
      .addCase(gCategory.fulfilled, (state, action) => {
        state.category = action.payload;
        state.status = STATUS.IDLE;
      })
      .addCase(gCategory.rejected, (state, action) => {
        state.status = STATUS.ERROR;
      })
      .addCase(getDetail.pending, (state, action) => {
        state.status = STATUS.LOADING;
      })
      .addCase(getDetail.fulfilled, (state, action) => {
        state.detail = action.payload;
        state.status = STATUS.IDLE;
      })
      .addCase(getDetail.rejected, (state, action) => {
        state.status = STATUS.ERROR;
      })
      .addCase(postData.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.status = STATUS.LOADING;
      })
      .addCase(postData.fulfilled, (state, action) => {
        state.response = action.payload;
        state.status = STATUS.IDLE;
      })
      .addCase(postData.rejected, (state, action) => {
        state.status = STATUS.ERROR;
      })
      .addCase(postCart.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.status = STATUS.LOADING;
      })
      .addCase(postCart.fulfilled, (state, action) => {
        state.cart = action.payload;
        state.status = STATUS.IDLE;
      })
      .addCase(postCart.rejected, (state, action) => {
        state.status = STATUS.ERROR;
      })
      .addCase(forgetpass.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.status = STATUS.LOADING;
      })
      .addCase(forgetpass.fulfilled, (state, action) => {
        state.response = action.payload;
        state.status = STATUS.IDLE;
      })
      .addCase(forgetpass.rejected, (state, action) => {
        state.status = STATUS.ERROR;
      });
  },
});
export default MovieSlice.reducer;
export const fetchCar = createAsyncThunk("cars/get", async () => {
  const res = await fetch(`${REACT_APP_URL}/upload-image`);
  const response = await res.json();
  return response;
});
export const gCategory = createAsyncThunk("get/category", async (category) => {
  const resp = await fetch(
    `${REACT_APP_URL}/get/category/${category}`
  );
  const val = await resp.json();
  return val;
});
export const getDetail = createAsyncThunk("get/detail", async (id) => {
  const resp = await fetch(`${REACT_APP_URL}/get/product/${id}`);
  const val = await resp.json();
  return val;
});
export const postData = createAsyncThunk("post/Data", async (newData) => {
  try {
    const resp = await fetch(`${REACT_APP_URL}/Buyer/addtocart`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newData),
      }
    );
    return resp.json();
  } catch (error) {
    console.log(error, "error");
  }
});
export const postCart = createAsyncThunk("post/cart", async (id) => {
  const resp = await fetch(
    `${REACT_APP_URL}/Buyer/getcart/${id}`
  );
  const val = await resp.json();
  return val;
});
export const forgetpass = createAsyncThunk("forget/pass", async (user) => {
  const response = await fetch(
    `${REACT_APP_URL}/Buyer/forgetp`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    }
  );
  return response.json();
});
export const upload = createAsyncThunk("seller/data", async (data) => {
  const resp = await fetch(`${REACT_APP_URL}/Seller/upload`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return resp.json();
});
export const sellerdata = createAsyncThunk("seller/info", async (data) => {
  const response = await fetch(`${REACT_APP_URL}/Seller/data`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
});
export const BuySignup = createAsyncThunk("buyer/signup",async(user) => {
  const response = await fetch(`${REACT_APP_URL}/Buyer/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
  return response.json();
});
export const Sellsign = createAsyncThunk("sell/sign",async(seller)=>{
  const response = await fetch(`${REACT_APP_URL}/Buyer/login`,{
    method:"POST",headers:{"Content-Type":"application/json" },
    body:JSON.stringify(seller)
  }
  )
  return response.json();
})