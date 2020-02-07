import { combineReducers } from "redux";

const songReducer = () => {
  return [
    { title: "Invincible", duration: "10:20" },
    { title: "Tempest", duration: "12:13" },
    { title: "Forty Six and Two", duration: "9:50" },
    { title: "Fear Inoculum", duration: "13:10" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songReducer,
  selectedSong: selectedSongReducer
});
