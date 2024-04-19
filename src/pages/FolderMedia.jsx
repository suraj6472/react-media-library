import { useLoaderData } from "react-router-dom";
import App from "../App";
import MediaList from "../components/MediaList";
import loaderUtil from "../utils/loaderUtil";
import { useContext } from "react";
import MediaContext from "../store/media-context";

export default function FolderMedia() {
  const media = useLoaderData();
  useContext(MediaContext)
  return (
    <App>
      <MediaList media={media} />
    </App>
  );
}

export const loader = ({ params }) => {
  return loaderUtil.media(params.id);
};
