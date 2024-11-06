// components/Modal.tsx

import React from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      aria-modal="true"
      role="dialog"
      aria-labelledby="modal-title"
    >
      <div className="bg-white border border-black p-8 rounded-lg w-full max-w-md mx-4 sm:mx-0 shadow-lg">
        <h2 id="modal-title" className="text-2xl font-bold mb-4 text-black">
          {title}
        </h2>
        <div className="mb-6 text-black">{children}</div>
        <button
          onClick={onClose}
          className="px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transform transition-transform duration-200 hover:scale-105"
          aria-label="Close modal"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
