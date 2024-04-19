const Modal = ({ children }) => {
    return (
        <div id="modal" className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-8 rounded shadow-lg w-96">
                {children}
            </div>
        </div>
    )
};

export default Modal;
