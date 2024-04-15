import { useLoaderData } from "react-router-dom";
import App from "../App";
import MediaList from "../components/MediaList";
import loaderUtil from "../utils/loaderUtil";

export default function FolderMedia() {
  const media = useLoaderData();
  return (
    <App>
      <MediaList media={media} />
    </App>
  );
}

export const loader = ({ params }) => {
  return loaderUtil.media(params.id);
};
