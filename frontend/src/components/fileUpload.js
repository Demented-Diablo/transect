import React from 'react';
import { Uploader } from 'react-uploader';

const uploader = Uploader({
  apiKey: '2b10sIQuRvHfJXk3Hf1O7yEdMe' 
});

const FileUpload = ({ onUploadComplete }) => (
  <UploadButton uploader={uploader} onComplete={onUploadComplete}>
    {({ onClick }) => (
      <button onClick={onClick}>
        Upload a plant image
      </button>
    )}
  </UploadButton>
);

export default FileUpload;