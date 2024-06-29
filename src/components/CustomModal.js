import React, { useRef, useEffect } from 'react';

function CustomModal({ show, onClose, backgroundImage, children }) {
  const modalContentRef = useRef(null);

  useEffect(() => {
    if (show && modalContentRef.current) {
      modalContentRef.current.scrollIntoView({ behavior: 'smooth' });
      modalContentRef.current.focus();
    }
  }, [show]);

  if (!show) return null;

  return (
    <div className="custom-modal-wrapper">
      <div className="custom-content-overlay">
        <div className="custom-modal" ref={modalContentRef}>
          <div className="custom-modal-overlay" onClick={onClose}></div>
          <div 
            className="custom-modal-content" 
            style={{ backgroundImage: `linear-gradient(to right, rgb(0 0 0 / 70%), rgb(0 0 0 / 70%)), url(${backgroundImage})` }}
            
            tabIndex="-1" // Makes the div focusable
          >
            <button className="custom-modal-close" onClick={onClose}>×</button>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomModal;
