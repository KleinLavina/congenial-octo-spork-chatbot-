import React from "react";
import "../css/profilemodule.css";
type ModalProps = {
  isOpening: boolean;
  onClosing: () => void;
};

const Modal: React.FC<ModalProps> = ({ isOpening, onClosing }) => {
  if (!isOpening) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <p>This is the Profile content.</p>
          <button onClick={onClosing}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
