import { Link } from "react-router-dom";
import Modal from "./components/Modal";
import { useState } from "react";

export default function App({children}) {
  const [isAddingFolder, setIsAddingFolder] = useState(false)
  return (
    <>
      <header className="bg-blue-500 py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-white">Media Library</h1>
          <nav className="space-x-4">
            <Link to={'/'} className="text-white hover:bg-blue-600 p-2">Home</Link>
            <Link to={'/all-folders'} className="text-white hover:bg-blue-600 p-2">All Folder</Link>
            <button className="text-white hover:bg-blue-600 p-2" onClick={() => setIsAddingFolder(!isAddingFolder)}>Add Folder</button>
            <button className="text-white hover:bg-blue-600 p-2">Add File</button>
          </nav>
        </div>
      </header>

      {children}
      {isAddingFolder &&       
      <Modal onClick={() => setIsAddingFolder(!isAddingFolder)}>
        <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">Add Folder</h2>
            <button id="closeModal" className="text-gray-600 hover:text-gray-800 focus:outline-none" onClick={() => setIsAddingFolder(!isAddingFolder)}>X</button>
        </div>
        <div className="bg-white mt-4">        
            <div className="mb-4">
              <input type="text" id="name" name="name" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" placeholder="Enter folder name"/>
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
        </div>
      </Modal>}
    </>
  );
}
