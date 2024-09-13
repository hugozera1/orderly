import React, { useState } from 'react';
import axios from 'axios';

const ImageUpload = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadResult, setUploadResult] = useState(null);
  const [error, setError] = useState(null);

  const handleImageChange = (event) => {
    setSelectedImage(event.target.files[0]);
  };

  const handleImageUpload = async () => {
    if (!selectedImage) {
      alert('Please select an image first');
      return;
    }

    setUploading(true);
    setError(null);

    // Construa a URL com os parâmetros
    const apiUrl = `https://freeimage.host/api/1/upload/?key=6d207e02198a847aa98d0a2a901485a5&source=${selectedImage}&format=json`;

    try {
      const response = await axios.get(apiUrl);
      setUploadResult(response.data);
    } catch (error) {
      setError(error.response ? error.response.data : 'An error occurred while uploading the image.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      <h1>Upload Image</h1>
      <input type="file" accept="image/jpeg" onChange={handleImageChange} />
      <button onClick={handleImageUpload} disabled={uploading}>
        {uploading ? 'Uploading...' : 'Upload Image'}
      </button>
      {uploadResult && (
        <div>
          <h2>Upload Result:</h2>
          <pre>{JSON.stringify(uploadResult, null, 2)}</pre>
        </div>
      )}
      {error && (
        <div style={{ color: 'red' }}>
          <h2>Error:</h2>
          <pre>{JSON.stringify(error, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
