import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faThumbtack,
  faArrowLeft,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { setLikedSongs, setPinnedSongs } from "../store/musicSlice";

export const PlayMusic = () => {
  const likedSongs = useSelector((state: any) => state.musicSlice.likedSongs);
  const pinnedSongs = useSelector((state: any) => state.musicSlice.pinnedSongs);
  const activeSong = useSelector((state: any) => state.musicSlice.activeSong);
  const dispatch = useDispatch();
  const isLikedSong = likedSongs.find((song: object) => song == activeSong);
  const isPinnedSong = pinnedSongs.find((song: object) => song == activeSong);

  return (
    <div className="bg-gradient-to-br from-[#989797] to-[#3d0000] h-screen ">
      <Link to={"/"}>
        <FontAwesomeIcon className="m-4" icon={faArrowLeft} />
      </Link>
      <div className="max-w-3xl w-full m-auto flex-col flex items-center justify-center p-2 ">
        <img
          className="mt-8 w-8/12"
          src={activeSong?.album?.images[0]?.url}
          alt=""
        />
        <div className="flex justify-center items-center mt-8 p-4 ">
          <div>
            <p className="text-white">{activeSong?.name}</p>
            <p className="text-white">By: {activeSong?.artists[0]?.name}</p>
          </div>
          <div className="ml-20">
            <FontAwesomeIcon
              onClick={() => dispatch(setLikedSongs(activeSong))}
              className={isLikedSong ? "text-red-500 m-4" : "text-white m-4"}
              icon={faHeart}
            />
            <FontAwesomeIcon
              onClick={() => dispatch(setPinnedSongs(activeSong))}
              className={isPinnedSong ? "text-red-500 m-4" : "text-white m-4"}
              icon={faThumbtack}
            />
          </div>
        </div>
        <div>
          <div className="w-96">
            <audio
              src={activeSong?.preview_url}
              controls
              className="w-full"
            ></audio>
          </div>
        </div>
      </div>
    </div>
  );
};
