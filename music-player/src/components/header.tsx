import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getMusic } from "../store/musicSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export const Header = () => {
  const dispatch = useDispatch();
  let [searchValue, setSearchvalue] = useState("");
  return (
    <div className="flex justify-between p-4 border-b border-white bg-black">
      <div>
        {" "}
        <img className="w-20" src="./logo.png" alt="" />{" "}
      </div>
      <div className="flex ">
        <input
          type="search"
          name="search"
          className=" mb-4 w-[25rem] border p-2  rounded-l-lg  "
          placeholder="Search Song..."
          onChange={(e: any) => setSearchvalue(e.target.value)}
        />
        <button
          className=" mb-4  border p-2  rounded-r-lg"
          type="submit"
          onClick={() => {
            dispatch(getMusic(searchValue));
          }}
        >
          <FontAwesomeIcon className="text-white" icon={faMagnifyingGlass} />
        </button>
      </div>
    </div>
  );
};
