import React from 'react';
import './FileUpload.css';

const FileUpload = ({ title }) => {
  return (
    <div className="file-upload-container" style={{marginTop:'40px'}}>
      <h6 className='text-start'>{title}</h6>
      <div className="file-upload-box">
        <div className="file-upload-content d-flex gap-4 align-items-center">
            <img src="https://www.svgrepo.com/show/73906/cloud-upload.svg" width={48} height={48} alt="Icon Kamera"/>
            <div className="d">
                <p>Select a file or drag and drop here</p>
                <small>JPG, PNG, or PDF. File size no more than 10MB</small>
            </div>
        </div>
        <button className="btn btn-yellow text-white">Select File</button>
      </div>
    </div>
  );
};

export default FileUpload;