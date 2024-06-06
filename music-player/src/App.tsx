import React, { useEffect } from "react";
import { Header } from "./components/header";
import { Main } from "./components/main";
import { useDispatch } from "react-redux";
import { getMusic } from "./store/musicSlice";
import { PlayMusic } from "./components/PlayMusic";
import { Route, Routes } from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMusic(""));
  }, []);
  return (
    <>
    
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/play" element={<PlayMusic />} />
      </Routes>
    </>
  );
}

export default App;
