import { createSlice } from "@reduxjs/toolkit";
import { Actions } from "./musicSaga";

const initialState = {
  music: [],
  getMusicStatus: "",
  getMusicError: "",
  activeSong: {},
  likedSongs:[],
  pinnedSongs: [],
};

export const getMusic = (payload: any) => {
  return { type: Actions.getMusic + "request", payload: payload };
};

const music: any = createSlice({
  name: "music",
  initialState,
  reducers: {
    setActiveSong: (state: any, action: any) => {
      state.activeSong = action.payload;
    },
    setLikedSongs: (state: any, action: any) =>{
      state.likedSongs.push(action.payload)  
    },
    setPinnedSongs: (state: any, action: any) =>{
      state.pinnedSongs.push(action.payload)  
    }
  },
  extraReducers(builder: any) {
    builder.addCase(Actions.getMusic + "pending", (state: any) => {
      state.getMusicStatus = "pending";
      state.getMusicError = "";
    });
    builder.addCase(
      Actions.getMusic + "fullfilled",
      (state: any, action: any) => {
        state.getMusicStatus = "fullfilled";
        state.getMusicError = "";
        state.music = action.payload;
      }
    );
    builder.addCase(
      Actions.getMusic + "rejected",
      (state: any, action: any) => {
        state.getMusicStatus = "rejected";
        state.getMusicError = action.payload;
      }
    );
  },
});

export const { setActiveSong,setLikedSongs, setPinnedSongs} = music.actions;


export const musicSlice = music.reducer;
