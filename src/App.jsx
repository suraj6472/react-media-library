import "./App.css";

export default function App() {
  return (
    <>
      <header className="bg-blue-500 py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-semibold text-white">Media Library</h1>
        </div>
      </header>

      <div className="container mx-auto px-4 mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="https://via.placeholder.com/300"
              alt="Placeholder"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">Media Title</h2>
              <p className="text-gray-600">
                Description of the media item goes here.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="https://via.placeholder.com/300"
              alt="Placeholder"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">Media Title</h2>
              <p className="text-gray-600">
                Description of the media item goes here.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="https://via.placeholder.com/300"
              alt="Placeholder"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">Media Title</h2>
              <p className="text-gray-600">
                Description of the media item goes here.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="https://via.placeholder.com/300"
              alt="Placeholder"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">Media Title</h2>
              <p className="text-gray-600">
                Description of the media item goes here.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
