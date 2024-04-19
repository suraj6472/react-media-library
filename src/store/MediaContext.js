import MediaContext from "./media-context";

export default function MediaContextProvider({ children }) {

  const mediaContext = {
    media: [],
    isShowingProgressBar: false,
    activeFolderId: null,
    uploadMedia: () => {},
    deleteMedia: () => {},
    addDirectory: () => {},
    deleteDirectory: () => {},
  };

  return (
    <MediaContext.Provider value={mediaContext}>
      {children}
    </MediaContext.Provider>
  );
}
