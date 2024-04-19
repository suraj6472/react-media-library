import React from "react";

const MediaContext = React.createContext({
  media: [],
  isShowingProgressBar: false,
  activeFolderId: null,
  uploadMedia: () => {},
  deleteMedia: () => {},
  addDirectory: () => {},
  deleteDirectory: () => {}, 
  getMedia: () => {},
});

export default MediaContext;
