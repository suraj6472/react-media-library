import MediaContext from "./media-context";
import { files, folders } from "./data";

export default function MediaContextProvider({ children }) {

  const getAllMediaFiles = () => {
    return files;
  }

  const mediaContext = {
    media: [],
    isShowingProgressBar: false,
    uploadMedia: () => {},
    deleteMedia: () => {},
    addDirectory: () => {},
    deleteDirectory: () => {},
    getMedia: getAllMediaFiles,
  };

  return (
    <MediaContext.Provider value={mediaContext}>
      {children}
    </MediaContext.Provider>
  );
}
