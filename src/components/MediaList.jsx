import MediaCard from "./MediaCard";

const MediaList = ({media}) => {
  return (
    <div className="container mx-auto px-4 mt-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {media.map((file) => (
          <MediaCard key={file.id} media={file} />
        ))}
      </div>
    </div>
  );
};

export default MediaList;
