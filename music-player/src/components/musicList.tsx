import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { setActiveSong } from "../store/musicSlice";

type MusicListProps = {
  activeTab: string;
};

export const MusicList = (props: MusicListProps) => {
  const music = useSelector((state: any) => state.musicSlice.music);
  const likedSongs = useSelector((state: any) => state.musicSlice.likedSongs);
  const pinnedSongs = useSelector((state: any) => state.musicSlice.pinnedSongs);
  const dispatch = useDispatch();
  return (
    <div>
      <div className="grid grid-cols-1   sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 ">
        {props.activeTab == "Trending" &&
          music.map((m: any) => (
            <div className="p-4 shadow-slate-500 border w-auto m-4  rounded-md hover:bg-slate-900 group">
              <img
                src={m.album.images[1].url}
                alt="#"
                className="w-full mb-5 rounded-md"
              />
              <div className="flex justify-between">
                <div>
                  <p className="text-white">{m.name}</p>
                  <p className="text-slate-500 ">By {m.artists[0].name}</p>
                </div>
                <div className="hidden group-hover:block">
                  <Link
                    to={"/play"}
                    onClick={() => dispatch(setActiveSong(m))}
                    className=" bg-green-600 px-3 py-4 rounded-full  h-[36px] flex justify-center items-center"
                  >
                    <FontAwesomeIcon icon={faPlay} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        {props.activeTab == "Liked" &&
          likedSongs.map((m: any) => (
            <>
              <Link to={"/"}>
                <FontAwesomeIcon className="m-4" icon={faArrowLeft} />
              </Link>
              <div className="p-4 border w-auto m-4 rounded-md hover:bg-slate-900 group">
                <img
                  src={m.album.images[2].url}
                  alt="#"
                  className="w-full mb-5 rounded-md"
                />
                <div className="flex justify-between">
                  <div>
                    <p className="text-white">{m.name}</p>
                    <p className="text-slate-500 ">By {m.artists[0].name}</p>
                  </div>
                  <div className="hidden group-hover:block">
                    <Link
                      to={"/play"}
                      onClick={() => dispatch(setActiveSong(m))}
                      className=" bg-green-600 px-3 py-4 rounded-full  h-[36px] flex justify-center items-center"
                    >
                      <FontAwesomeIcon icon={faPlay} />
                    </Link>
                  </div>
                </div>
              </div>
            </>
          ))}
        ;
        {props.activeTab == "Pinned" &&
          pinnedSongs.map((m: any) => (
            <div className="p-4 border w-auto m-4 rounded-md hover:bg-slate-900 group">
              <img
                src={m.album.images[2].url}
                alt="#"
                className="w-full mb-5 rounded-md"
              />
              <div className="flex justify-between">
                <div>
                  <p className="text-white">{m.name}</p>
                  <p className="text-slate-500 ">By {m.artists[0].name}</p>
                </div>
                <div className="hidden group-hover:block">
                  <Link
                    to={"/play"}
                    onClick={() => dispatch(setActiveSong(m))}
                    className=" bg-green-600 px-3 py-4 rounded-full  h-[36px] flex justify-center items-center"
                  >
                    <FontAwesomeIcon icon={faPlay} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
