import React, { useState } from 'react';
import "./styles.css"

function SideModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
    <button onClick={() => setIsOpen(true)}>Open Modal</button>
    {isOpen && (
      <div className="modal">
        <div className="modal-content">
          <span onClick={() => setIsOpen(false)}>&times;</span>
          <p>Modal content goes here</p>
        </div>
      </div>
    )}
  </div>
  );
}

export default SideModal;
