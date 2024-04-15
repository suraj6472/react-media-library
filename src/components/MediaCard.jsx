const MediaCard = ({ media }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={media.url}
        alt="Placeholder"
        className="w-full h-48"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{media.filename}</h2>
      </div>
    </div>
  );
};

export default MediaCard;
