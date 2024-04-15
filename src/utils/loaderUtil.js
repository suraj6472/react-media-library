import { files, folders } from "../store/data";

const media = (directoryId = null) => {
  let result = files;
  if (directoryId) {
    result = files.filter((file) => file.folderId == directoryId);
  }
  return result;
};

const directory = () => {
  return folders;
};

const loaderUtil = {
  media,
  directory,
};
export default loaderUtil;
