import { Link } from "react-router-dom";

export default function App({children}) {
  return (
    <>
      <header className="bg-blue-500 py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-white">Media Library</h1>
          <nav className="space-x-4">
            <Link to={'/'} className="text-white hover:bg-blue-600 p-2">Home</Link>
            <Link to={'/all-folders'} className="text-white hover:bg-blue-600 p-2">All Folder</Link>
            <button className="text-white hover:bg-blue-600 p-2">Add Folder</button>
            <button className="text-white hover:bg-blue-600 p-2">Add File</button>
          </nav>
        </div>
      </header>

      {children}
    </>
  );
}
