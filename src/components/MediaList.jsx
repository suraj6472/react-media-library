import MediaCard from "./MediaCard";
import { useDropzone } from "react-dropzone";

const MediaList = ({ media }) => {
  const {acceptedFiles, getRootProps, getInputProps} = useDropzone();

  const files = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <div className="container mx-auto px-4 mt-8" {...getRootProps({className: 'dropzone'})}>
        <input {...getInputProps()} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {media.map((file) => (
          <MediaCard key={file.id} media={file} />
        ))}
      </div>
      <aside>
        <h4>Files</h4>
        <ul>{files}</ul>
      </aside>
    </div>
  );
};

export default MediaList;
