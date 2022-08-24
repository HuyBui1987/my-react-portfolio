import React, { useState, useEffect } from 'react';
import pdf from '../../assets/images/XuanHuy_Bui_Resume.PDF';
import { AiOutlineDownload } from 'react-icons/ai';
import { Document, Page, pdfjs } from 'react-pdf';
// import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Resume() {
  const [width, setWidth] = useState(1200);
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div className="resume-container">
      <div>
        <div className="resume-align">
          <a href={pdf} target="_blank" rel="noreferrer">
            <button className="resume-button" variant="primary" target="_blank">
              <AiOutlineDownload />
              &nbsp;Download CV
            </button>
          </a>
          <p style={{ padding: '20px' }}>
            Page {1} of {numPages}
          </p>
        </div>

        <div>
          <Document
            file={pdf}
            onLoadSuccess={onDocumentLoadSuccess}
            className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </div>

        <div className="resume-align">
          <p style={{ padding: '20px' }}>
            Page {1} of {numPages}
          </p>
          <a href={pdf} target="_blank" rel="noreferrer">
            <button
              className="resume-button"
              variant="primary"
              target="_blank"
              style={{ marginBottom: '40px' }}>
              <AiOutlineDownload />
              &nbsp;Download CV
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Resume;
