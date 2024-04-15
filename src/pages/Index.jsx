import { useLoaderData } from "react-router-dom";
import App from "../App";
import loaderUtil from "../utils/loaderUtil";
import MediaList from "../components/MediaList";
export default function Index() {
  const media = useLoaderData();
  return (
    <App>
      <MediaList media={media} />
    </App>
  );
}

export const loader = () => {
  return loaderUtil.media();
};
