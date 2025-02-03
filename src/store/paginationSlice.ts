import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PaginationState {
  page: number;
}

const initialState: PaginationState = {
  page: 1,
};

const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    nextPage: (state) => {
      state.page += 1;
    },
    prevPage: (state) => {
      if (state.page > 1) {
        state.page -= 1;
      }
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
  },
});

export const { nextPage, prevPage, setPage } = paginationSlice.actions;
export default paginationSlice.reducer;
