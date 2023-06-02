import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
  severity: "",
  message: "",
};

export const snacBarSlice = createSlice({
  name: "snackbar",
  initialState,
  reducers: {
    doSuccess(state) {
      state.severity = "success";
      state.message = "Successfully added";
      state.open = true;
    },
    doError(state) {
      state.severity = "error";
      state.message = "error error erooroer";
      state.open = true;
    },

    incSuccess(state) {
      state.severity = "success";
      state.message = "Successfully added";
      state.open = true;
    },

    incError(state) {
      state.severity = "success";
      state.message = "Error";
      state.open = true;
    },

    decSuccess(state) {
      state.severity = "success";
      state.message = "Successfully added";
      state.open = true;
    },

    decError(state) {
      state.severity = "error";
      state.message = "Error";
      state.open = true;
    },
    closeSnackBar(state) {
      state.open = false;
    },
  },
});

export const snackBarAction = snacBarSlice.actions;
