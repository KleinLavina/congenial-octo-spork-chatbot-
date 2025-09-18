import React from "react";
import "../css/aboutmodule.css";
type ModalProps = {
  isShown: boolean;
  onHide: () => void;
};

const Modal: React.FC<ModalProps> = ({ isShown, onHide }) => {
  if (!isShown) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <p>This is the about content.</p>
          <button onClick={onHide}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
