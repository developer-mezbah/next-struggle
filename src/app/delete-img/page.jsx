"use client"
import React, { useState } from 'react';

const DeleteImage = () => {
  const [imageId, setImageId] = useState('');
  const [apiKey, setApiKey] = useState('YOUR_API_KEY');
  const [message, setMessage] = useState('');

  const handleDeleteImage = async () => {
    try {
      const response = await fetch(`https://api.imgbb.com/1/image/${imageId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
        },
      });

      if (response.status === 200) {
        setMessage('Image deleted successfully!');
      } else {
        const errorData = await response.json();
        setMessage(`Error deleting image: ${response.status} - ${errorData.error.message}`);
      }
    } catch (error) {
      setMessage(`Error deleting image: ${error.message}`);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Image ID"
        value={imageId}
        onChange={(e) => setImageId(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter API Key"
        value={apiKey}
        onChange={(e) => setApiKey(e.target.value)}
      />
      <button onClick={handleDeleteImage}>Delete Image</button>
      <p>{message}</p>
    </div>
  );
};

export default DeleteImage;