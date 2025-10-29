import React from "react";
import "./css/faqsmodal.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  closeOnBackdropClick?: boolean;
}

const FaqsModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  closeOnBackdropClick = true,
}) => {
  React.useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (closeOnBackdropClick && event.target === event.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal-container">
        {(title || closeOnBackdropClick) && (
          <div className="modal-header">
            {title && <h2 className="modal-title">{title}</h2>}
            {closeOnBackdropClick && (
              <button
                className="modal-close-button"
                onClick={onClose}
                aria-label="Close modal"
              >
                ×
              </button>
            )}
          </div>
        )}

        <div className="modal-content">
          <h1>Hi</h1>
        </div>
      </div>
    </div>
  );
};

export default FaqsModal;
