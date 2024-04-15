import { Link, useLoaderData } from "react-router-dom";
import App from "../App";
import loaderUtil from "../utils/loaderUtil";

export default function AllFolder() {
  const folders = useLoaderData();
  return (
    <App>
      <div className="container mx-auto px-4 mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {folders.map((folder) => (
            <Link to={`/folder/${folder.id}`} key={folder.id}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3767/3767094.png"
                  alt="Placeholder"
                  className="w-full h-48"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold">{folder.folderName}</h2>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </App>
  );
}

export const loader = () => {
  return loaderUtil.directory();
};
