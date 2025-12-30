import React from 'react';
import { StarFill } from 'react-bootstrap-icons';

const Rating = ({ platform = 'google', rating = 5, maxRating = 5 }) => {
  // Platform icons mapping
  const platformIcons = {
    playstore: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Blue */}
        <path
          d="M3.5 2.8C3.19 3.1 3 3.6 3 4.3V19.7C3 20.4 3.19 20.9 3.5 21.2L13.2 12L3.5 2.8Z"
          fill="#4285F4"
        />
    
        {/* Green */}
        <path
          d="M16.8 15.6L6.1 21.8C6.6 22.1 7.3 22 8.1 21.5L19.3 14.9L16.8 15.6Z"
          fill="#34A853"
        />
    
        {/* Yellow */}
        <path
          d="M19.3 9.1L8.1 2.5C7.3 2 6.6 1.9 6.1 2.2L16.8 8.4L19.3 9.1Z"
          fill="#FBBC05"
        />
    
        {/* Red */}
        <path
          d="M20.5 10.2C21.2 10.6 21.2 11.4 20.5 11.8L19.3 12.5L16.8 12L19.3 11.5L20.5 10.2Z"
          fill="#EA4335"
        />
      </svg>
    ),
    chrome: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Red section */}
        <path
          d="M12 2C8.27 2 5.01 4.02 3.29 7.03L8.8 16.55C9.42 17.64 10.63 18.32 12 18.32C13.37 18.32 14.58 17.64 15.2 16.55L20.71 7.03C18.99 4.02 15.73 2 12 2Z"
          fill="#EA4335"
        />
    
        {/* Yellow section */}
        <path
          d="M3.29 7.03C2.46 8.5 2 10.2 2 12C2 15.73 4.02 18.99 7.03 20.71L12.55 11.19C13.18 10.1 13.18 8.76 12.55 7.67C11.92 6.58 10.71 5.9 9.45 5.9H3.29Z"
          fill="#FBBC05"
        />
    
        {/* Green section */}
        <path
          d="M7.03 20.71C8.5 21.54 10.2 22 12 22C15.73 22 18.99 19.98 20.71 16.97H9.68C8.42 16.97 7.21 16.29 6.58 15.2C5.95 14.11 5.95 12.77 6.58 11.68L7.03 20.71Z"
          fill="#34A853"
        />
    
        {/* Blue center */}
        <circle cx="12" cy="12" r="4" fill="#4285F4" />
      </svg>
    ),
    

    g2: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" fill="#FF6B35"/>
        <text x="12" y="16" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold" fontFamily="Arial, sans-serif">G2</text>
      </svg>
    )
  };

  return (
    <div className="rating-component">
      <div className="platform-icon">
        {platformIcons[platform] || platformIcons.google}
      </div>
      <div className="stars-container">
        {[...Array(maxRating)].map((_, index) => (
          <StarFill
            key={index}
            className={`star ${index < rating ? 'filled' : 'empty'}`}
            size={18}
          />
        ))}
      </div>
      <div className="rating-text">
        {rating}/{maxRating}
      </div>
    </div>
  );
};

export default Rating;