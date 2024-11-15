import React, { useState, useRef, useEffect } from 'react';

export const Popup = ({ isOpen, onClose }) => {
  const popupRef = useRef(null);

  // Handle clicks outside of the popup
  useEffect(() => {
    const handleClickOutside = (event) => {
      // If the popup is open and the click target is outside the popup, close it
      if (isOpen && popupRef.current && !popupRef.current.contains(event.target)) {
        onClose();
      }
    };

    // Attach event listener
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  // If the popup is not open, don't render it
  if (!isOpen) return null;

  return (
    <div className="overlay">
      <div className="popup" ref={popupRef}>
        <h2>Popup Content</h2>
        <p>This is a centered popup.</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

// const App = () => {
//   const [isPopupOpen, setIsPopupOpen] = useState(false);

//   const openPopup = () => setIsPopupOpen(true);
//   const closePopup = () => setIsPopupOpen(false);

//   return (
//     <div>
//       <button onClick={openPopup}>Open Popup</button>
//       <Popup isOpen={isPopupOpen} onClose={closePopup} />
//     </div>
//   );
// };

// export default App;
