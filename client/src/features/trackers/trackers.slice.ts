import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// store
import { RootState } from "../../store";

// defs
import { IInitialState } from "../../defs/trackers.defs";

// new or update
export const newUpdate = createAsyncThunk(
  "tracker/newUpdate",
  async (flag: number) => {
    try {
      // await axios.post(
      //   "https://addispic-site-histories-server.onrender.com/api/epic/histories",
      //   { flag }
      // );
      console.log({ ok: true });
    } catch (err) {
      console.log({ ok: false });
    }
  }
);

// initial state
const initialState: IInitialState = {
  histories: [],
  isGetHistoriesPending: false,
};
// slice
const trackerSlice = createSlice({
  name: "tracker",
  initialState,
  reducers: {},
});

// exports
// selectors
export const selectHistories = (state: RootState) => state.trackers.histories;
export default trackerSlice.reducer;
