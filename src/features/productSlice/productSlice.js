// src/slices/productSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const url = 'https://real-time-amazon-data.p.rapidapi.com/search?query=Phone&page=1&country=US&sort_by=RELEVANCE&product_condition=ALL';
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': `${import.meta.env.VITE_RAPID_KEY}`,
      'x-rapidapi-host': 'real-time-amazon-data.p.rapidapi.com',
    },
  };

  const response = await fetch(url, options);

  if (!response.ok) {
    const errorData = await response.json(); // Get detailed error information
    throw new Error(`Error: ${response.status} - ${errorData.message}`);
  }
  
  return response.json();
});

const productSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    selectedProduct: null, // Added for managing the selected product
    status: 'idle',
    error: null,
  },
  reducers: {
    setSelectedProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.products = action.payload.data.products;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { setSelectedProduct } = productSlice.actions;

export default productSlice.reducer;